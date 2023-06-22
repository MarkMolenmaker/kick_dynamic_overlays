<script>
export default {
  name: 'ContainerHuntOpeningCurrent',
  data() {
    return {
      artwork: null
    }
  },
  mounted() {
    /* Auto Update values */
    this.fetchValues()

    setInterval(() => {
      this.fetchValues()
    }, 5000)

  },
  methods: {
    fetchValues() {
      // const API_URL = 'https://bht-scrapi-markmolenmaker.koyeb.app/statistic/'
      const API_URL = 'http://127.0.0.1:8000/statistic/'
      fetch(API_URL + 'current_slot_artwork')
          .then(response => response.json())
          .then(json => this.artwork = json.image)
    }
  }
}
</script>
<template>
  <div class="bg bg-blue tp-1 bt-1">
    <img v-if="this.artwork" :src="this.artwork" alt="Artwork">
  </div>
</template>

<style scoped lang="sass">
.bg
  display: flex
  width: fit-content

img
  max-width: 100%
  max-height: 100%
</style>

