<template>
  <div>
    <h1>Signup page</h1>
    <form @submit.prevent="onSignup">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <input type="text" placeholder="naem" v-model="displayName">
      <button>회원가입</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { admin } from '../api/index.js'

export default {
  data() {
    return {
      email: '',
      password: '',
      displayName: ''
    }
  },
  methods: {
    onSignup() {
      admin.signup(this.email, this.password, this.displayName )
    }
  }
}
</script>
