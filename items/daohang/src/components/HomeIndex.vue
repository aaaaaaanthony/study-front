<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
<!--      <el-aside width="200px" style="height: 100%">-->
<!--        <AsideFrame></AsideFrame>-->
<!--      </el-aside>-->
      <el-main>
        <MainFrame></MainFrame>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import AsideFrame from "../components/AsideFrame";
import MainFrame from "../components/MainFrame";

export default {
  name: 'HomeIndex',
  components:{
    // AsideFrame,
    MainFrame
  },
  props: {
    msg: String
  }
}
</script>


<style scoped>

el-aside{
  height: 100%;
}
</style>
