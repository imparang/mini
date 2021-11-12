<template>
  <header>
    <RouterLink to="/"> Home. </RouterLink>
    <template v-if="!currentUser">
      <RouterLink to="/login"> Login. </RouterLink>
      <RouterLink to="/signup"> Signup. </RouterLink>
    </template>
    <div v-if="currentUser">
      {{ currentUser.displayName }}
    </div>
    <RouterLink v-if="currentUser" to="/mtpage"> Mypage. </RouterLink>
    <RouterLink to="/admin"> Admin. </RouterLink>
  </header>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    }
  },
  mounted() {
    console.log(this.$store.state.currentUser)
  }
}
</script>

<style lang="scss" scoped>
header {
  box-sizing: border-box;
  height: 60px;
  padding: 20px 20px;
  border-bottom: 1px solid $color-primary;
  a {
    margin-right: 10px;
    line-height: 1;
  }
}
</style>
