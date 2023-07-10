<script>
import {useRoute} from "vue-router";

export default {
  name: 'ContainerChat',
  data () { return { fontSize: 16 } },
  computed: { url () { return process.env.VUE_APP_BOTRIX_CHAT_URL + this.fontSize } },
  mounted() {
    const route = useRoute()
    this.fontSize = route.query.fontSize ? route.query.fontSize : 16
  }
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

