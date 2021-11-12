<template>
  <h1>MYpage</h1>
  <ul>
    <li v-for="item in purchaseHistories" :key="item.detailId">
      {{ item }}
      <button @click="cancle(item.detailId)" :disabled="item.done">
        구매취소
      </button>
      <button @click="confirmed(item.product.productId)">구매확인</button>
    </li>
  </ul>
  <button @click="create">계좌생성</button>

  <hr />

  <ul>
    <li v-for="ac in acc" :key="ac">
      {{ ac }}
    </li>
  </ul>
</template>

<script>
import { user } from '../api'
export default {
  data() {
    return {
      purchaseHistories: [],
      acc: [],
      a: []
    }
  },
  created() {
    this.fetch()
    this.account()
  },
  methods: {
    create() {
      this.$router.push('/account')
    },
    fetch() {
      user.Allbuy().then(data => {
        this.purchaseHistories = data.filter(el => !el.isCanceled)
      })
    },
    cancle(id) {
      user.cancle(id).then(() => this.fetch())
    },
    confirmed(id) {
      user.confirmed(id).then(() => {
        this.fetch()
      })
    },
    account() {
      user.showAccount().then(data => {
        this.acc = data
        console.log(this.a)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #000;

  li {
    border: 1px solid #000;
    padding: 10px;

    ~ li {
      margin-top: 10px;
    }
  }
}
</style>
