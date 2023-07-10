<script>
import {useRoute} from "vue-router";

export default {
  name: 'ContainerChat',
  computed: { url () {
    const route = useRoute()
    const fontSize = route.query.fontSize ? route.query.fontSize : 16
    return `${process.env.VUE_APP_BOTRIX_CHAT_URL}${fontSize}`
  } },
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1">
    <iframe :src="this.url"></iframe>
  </div>
</template>

<style scoped lang="sass">
iframe
  width: 100%
  height: 100%
  border: 5px solid transparent
</style>

