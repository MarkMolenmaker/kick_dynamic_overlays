<template>
  <div class="home">
    <router-link to="/gambling/background">gambling/background</router-link>
    <br>
    <router-link to="/gambling/main">gambling/main</router-link>
    <router-link to="/gambling/main/overlay">gambling/main/overlay</router-link>
    <br>
    <router-link to="/gambling/webcam">gambling/webcam</router-link>
    <router-link to="/gambling/webcam/overlay">gambling/webcam/overlay</router-link>
    <br>
    <router-link to="/gambling/secondary">gambling/secondary</router-link>
    <br>
    <router-link to="/gambling/container">gambling/container</router-link>
    <router-link to="/gambling/container/chat">gambling/container/chat</router-link>
    <router-link to="/gambling/container/bonuslist_and_statistics">gambling/container/bonuslist_and_statistics</router-link>
    <router-link to="/gambling/container/bonushunt_opening">gambling/container/bonushunt_opening</router-link>
    <router-link to="/gambling/container/bonushunt_opening_current">gambling/container/bonushunt_opening_current</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped lang="sass">
.home
  display: flex
  flex-direction: column
</style>