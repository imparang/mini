<template>
  <h1>제품 상세 페이지</h1>
  <div v-for="i in info" :key="i">{{ i }}</div>
  <button @click="onPay">구매신청</button>
</template>

<script>
import { user } from '../api'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      info: [],
      aid: ''
    }
  },
  created() {
    this.fetchDetail()
  },
  computed: {
    ...mapState({
      pid: 'pid'
    })
  },
  methods: {
    ...mapMutations(['FETCH_DETAIL']),
    fetchDetail() {
      user
        .detail(this.pid)
        .then(data => (this.info = data))
        .then(() => {
          user.showAccount().then(data => (this.aid = data.accounts[0].id))
        })
    },
    onPay() {
      user.pay(this.pid, this.aid)
    }
  }
}
</script>

<style></style>
