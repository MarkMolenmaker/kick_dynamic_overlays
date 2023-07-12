<template>
  <div class="home">
    <router-link to="/webcam">webcam</router-link>
    <router-link to="/webcam/overlay">webcam/overlay</router-link>
    <br>
    <router-link to="/background">background</router-link>
    <router-link to="/background/styled">background/styled</router-link>
    <router-link to="/background/animated">background/animated</router-link>
    <br>
    <router-link to="/container">container</router-link>
    <router-link to="/container/overlay">container/overlay</router-link>
    <router-link to="/container/chat">container/chat</router-link>
    <br>
    <router-link to="/gambling/widgets/bonus_list">gambling/widgets/bonus_list</router-link>
    <router-link to="/gambling/widgets/bonus_opening">gambling/widgets/bonus_opening</router-link>
    <router-link to="/gambling/widgets/current_slot_artwork">gambling/widgets/current_slot_artwork</router-link>
    <router-link to="/gambling/widgets/deposit_withdrawal">gambling/widgets/deposit_withdrawal</router-link>
    <br>
    <router-link to="/alerts">alerts</router-link>
    <br>
    <router-link to="/banners">banners</router-link>
    <span>Stable 1.0</span>
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
