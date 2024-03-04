<template>
  <div id="apps">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
#apps {
  background-image: url('https://cdn.wikirby.com/thumb/4/43/KRtDLD_Dream_Land_backdrop.jpg/1600px-KRtDLD_Dream_Land_backdrop.jpg?20230111221533');
  background-size: cover;
  background-position: center;
  min-height: 100vh; 
}
</style>