<template>
  <div v-bind:class="classes">{{ label }}</div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: [
      'label',
      'icon',
      'classes'
    ]
  }
</script>

<style>

</style>
