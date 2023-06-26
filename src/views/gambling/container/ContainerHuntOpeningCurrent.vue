<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ContainerHuntOpeningCurrent',
  computed: { ...mapGetters(['loaded', 'current_slot_artwork']) },
}
</script>
<template>
  <div class="bg bg-blue tp-1 bt-1">
    <img v-if="loaded" :src="current_slot_artwork" alt="Artwork">
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

