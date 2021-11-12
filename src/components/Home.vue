<template>
  <h1>Home page..</h1>
  <form @submit.prevent="onSearch">
    <input type="text" v-model="query" />
  </form>
  <div>
    <ul v-if="show">
      <li @click="goDetail(p.id)" v-for="p in products" :key="p.id">
        {{ p }}
      </li>
    </ul>
  </div>
</template>

<script>
import { user } from '../api'
import Product from './Product.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: { Product },
  data() {
    return {
      query: '',
      tags: [],
      products: [],
      show: false
    }
  },
  computed: {
    ...mapState({ pid: 'pid' })
  },
  methods: {
    ...mapMutations(['FETCH_DETAIL']),
    onSearch() {
      this.show = true
      user.search(this.query).then(data => (this.products = data))
    },
    goDetail(id) {
      this.FETCH_DETAIL(id)
      this.$router.push(`/product/${id}`)
    }
  }
}
</script>
