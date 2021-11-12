<template>
  <div>
    <h1>제품 추가</h1>
    <input type="text" placeholder="title" v-model="title" />
    <input type="text" placeholder="price" v-model="price" />
    <textarea placeholder="desc" v-model="desc" />
    <input @keyup="onAddTag" type="text" placeholder="tag" v-model="tag" />
    <div v-for="t in tags" :key="t">{{ t }}</div>
    <input type="file" />
    <button @click="onSubmit">제품추가</button>
  </div>
</template>

<script>
import { admin } from '../api'

export default {
  data() {
    return {
      title: '',
      price: 0,
      desc: '',
      tags: [],
      tag: ''
    }
  },
  methods: {
    onAddTag(e) {
      const enter = 13
      if (e.keyCode !== enter) return
      this.tags.push(this.tag)
      this.tag = ''
    },
    onSubmit() {
      console.log(123)
      admin.addProduct({
        title: this.title,
        price: this.price,
        description: this.desc,
        tags: this.tags
      })
    }
  }
}
</script>

<style>
input {
  display: block;
}
</style>
