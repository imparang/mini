<template>
  <h1>account</h1>
  <li @click="getBc(b.code)" v-for="b in banks">{{ b }}</li>

  <hr />

  <input type="text" v-model="an" />
  <input type="text" v-model="pn" />
  <input type="checkbox" v-model="sn" />
  <button @click="create">생성</button>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { user } from '../api'
export default {
  data() {
    return {
      bc: '',
      an: '',
      pn: '',
      sn: false
    }
  },
  created() {
    this.fetch()
  },
  computed: {
    ...mapState({
      banks: 'banks'
    })
  },
  methods: {
    ...mapActions(['FETCH_BANKS']),
    fetch() {
      this.FETCH_BANKS()
    },
    getBc(bc) {
      this.bc = bc
      console.log(this.bc)
    },
    create() {
      user.createAccount(this.bc, this.an, this.pn, this.sn)
    }
  }
}
</script>

<style></style>
