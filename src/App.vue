<template>
  <div id="app" class="flex justify-center h-screen">
    <user-form />
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue'

export default {
  name: 'App',
  components: {
    UserForm,
  },
}
</script>

<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
