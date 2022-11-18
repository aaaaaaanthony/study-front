<template>
  <div id="back">
    <div style="text-align: center">
      联系:mmzcg@outlook.com
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterFrame',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="less">

</style>
