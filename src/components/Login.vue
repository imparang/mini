<template>
  <div>
    <h1>Login page..</h1>
    <form @submit.prevent="onLogin(email, pw)">
      <input type="email" placeholder="email" v-model="email" />
      <input
        type="password"
        minlength="8"
        placeholder="password"
        v-model="pw"
      />
      <button type="submit">로그인</button>
      <RouterLink to="/signup"> 회원가입 </RouterLink>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { admin } from '../api/index.js'

export default {
  data() {
    return {
      email: '',
      pw: ''
    }
  },
  methods: {
    onLogin() {
      admin
        .login(this.email, this.pw)
        .then(res => sessionStorage.setItem('token', res.accessToken))
        .then(() =>
          this.email === 'test@test.com'
            ? this.$store.commit('CHECK_ADMIN')
            : console.log(1234)
        )
    }
  }
}
</script>
