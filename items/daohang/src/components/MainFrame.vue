<template>
  <div style="margin: 0 auto;width: 1000px">
    <el-row>
      <el-col v-for="(k,v) in list" :key="v">
        <el-card>
          <div slot="header">
            <span>{{ k.name }}</span>
          </div>

          <el-row :gutter="12">
            <el-col :span="4" v-for="(k,v) in k.list" :key="v">
              <el-card :body-style="{padding:'0px'}">
                <div style="padding-top: 4px;display: flex">
                  <el-avatar shape="square" size="small" :src="k.logo" id="logo"></el-avatar>
                  <div style="padding-left:10px;display: initial; line-height: 33px">{{ k.title }}</div>
                </div>
              </el-card>
            </el-col>
          </el-row>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AsideFrame',
  data() {
    return {
      list: [
        {
          name: "常用站点",
          list: [
            {
              logo: "https://www.baidu.com/favicon.ico",
              title: "百度"
            },
            {
              logo: "https://www.bilibili.com/favicon.ico",
              title: "bilibili"
            }
          ]
        },
        {
          name: "资源搜索",
          list: [
            {
              logo: "https://g.csdnimg.cn/static/logo/favicon32.ico",
              title: "CSDN"
            },
            {
              logo: "https://www.google.com/favicon.ico",
              title: "Google"
            },
          ]
        },
        {
          name: "开发",
          list: [
            {
              logo: "https://github.githubassets.com/apple-touch-icon-144x144.png",
              title: "Github"
            },
          ]
        },
        {
          name: "电商",
          list: [
            {
              logo: "https://www.amazon.cn/favicon.ico",
              title: "亚马逊"
            },
          ]
        },
        {
          name: "下载",
          list: [
            {
              logo: "https://www.btbtt15.com/favicon.ico",
              title: "BT之家"
            },
          ]
        },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">

#logo {


}


/*.el-card ::v-deep .el-card__body {*/
/*  padding: 3px;*/
/*}*/


</style>
