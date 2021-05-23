<template>
  <Menu ref="menu"></Menu>
  <router-view />
</template>

<script>
import Menu from './components/menu'
export default {
  name: 'App',
  components: {
    Menu,
  },
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
