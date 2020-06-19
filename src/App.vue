<template>
  <div id="app">
    <router-view></router-view>
    <NavFooter v-show="$route.meta.navShow" />
  </div>
</template>

<script>
import NavFooter from "./components/footer/NavFooter"
export default {
  name: 'App',
  components: {
    NavFooter
  }
}
</script>

<style>

</style>
