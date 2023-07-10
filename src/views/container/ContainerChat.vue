<script>
import {useRoute} from "vue-router";

export default {
  name: 'ContainerChat',
  data () { return { loaded: false, src: null } },
  mounted () {
    const route = useRoute()
    const fontSize = route.query.fontSize
    switch (fontSize) {
      case 'large':
        this.src = 'https://botrix.live/widgets/chat/?bid=2QA6EfEf2MUVSCPH2kd%2FBw&bots=true&emojis=true&hideCommands=true&hideMessages=false&hideMessagesSeconds=10&fontSize=22&trovo=false&twitch=false&youtube=false&kick=true&platformIcon=false&theme=transparent'
        break
      case 'normal':
        this.src = 'https://botrix.live/widgets/chat/?bid=2QA6EfEf2MUVSCPH2kd%2FBw&bots=true&emojis=true&hideCommands=true&hideMessages=false&hideMessagesSeconds=10&fontSize=16&trovo=false&twitch=false&youtube=false&kick=true&platformIcon=false&theme=transparent'
        break
      case 'medium':
        this.src = 'https://botrix.live/widgets/chat/?bid=2QA6EfEf2MUVSCPH2kd%2FBw&bots=true&emojis=true&hideCommands=true&hideMessages=false&hideMessagesSeconds=10&fontSize=14&trovo=false&twitch=false&youtube=false&kick=true&platformIcon=false&theme=transparent'
        break
      case 'small':
        this.src = 'https://botrix.live/widgets/chat/?bid=2QA6EfEf2MUVSCPH2kd%2FBw&bots=true&emojis=true&hideCommands=true&hideMessages=false&hideMessagesSeconds=10&fontSize=12&trovo=false&twitch=false&youtube=false&kick=true&platformIcon=false&theme=transparent'
        break
      default:
        this.src = 'https://botrix.live/widgets/chat/?bid=2QA6EfEf2MUVSCPH2kd%2FBw&bots=true&emojis=true&hideCommands=true&hideMessages=false&hideMessagesSeconds=10&fontSize=16&trovo=false&twitch=false&youtube=false&kick=true&platformIcon=false&theme=transparent'
        break
    }
    this.loaded = true
  }
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1">
    <iframe v-if="loaded" :src="this.src"></iframe>
  </div>
</template>

<style scoped lang="sass">
iframe
  width: 100%
  height: 100%
  border: 5px solid transparent
</style>

