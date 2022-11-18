<template>
  <div id="app" style="height: 100%">
    <HomeIndex></HomeIndex>
  </div>
</template>

<script>
import HomeIndex from "@/components/HomeIndex";

export default {
  name: 'App',
  components: {
    HomeIndex,
  }
}
</script>

<style>

html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
