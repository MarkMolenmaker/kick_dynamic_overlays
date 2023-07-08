<script setup />

<template>
  <div class="bg bg-blue tp-1 bt-1">
    <iframe :src="process.env.BOTRIX_CHAT_WIDGET_URL"></iframe>
  </div>
</template>

<style scoped lang="sass">
iframe
  width: 100%
  height: 100%
  border: 5px solid transparent
</style>

