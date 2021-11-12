<template>
  <h1>제품조회</h1>
  <ul>
    <li v-for="p in products" :key="p.id">{{ p }}</li>
  </ul>
</template>

<script>
import { admin } from '../api'
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      admin.showAllProducts().then(data => {
        this.products = data
      })
    }
  }
}
</script>
