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
                  <a style="padding-left:10px;display: initial; line-height: 33px" @click="toPage(k.url)"
                     :href="k.url" target="_blank">{{ k.title }}</a>
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
              url: "https://www.baidu.com/",
              title: "百度"
            },
            {
              logo: "https://www.bilibili.com/favicon.ico",
              url: "https://www.bilibili.com",
              title: "bilibili"
            }
          ]
        },
        {
          name: "资源搜索",
          list: [
            {
              logo: "https://g.csdnimg.cn/static/logo/favicon32.ico",
              url: "https://www.csdn.net/",
              title: "CSDN"
            },
            {
              logo: "https://www.google.com/favicon.ico",
              url: "https://www.google.com/",
              title: "Google"
            },
          ]
        },
        {
          name: "开发",
          list: [
            {
              logo: "https://github.githubassets.com/apple-touch-icon-144x144.png",
              url: "https://github.com/",
              title: "Github"
            },
          ]
        },
        {
          name: "电商",
          list: [
            {
              logo: "https://www.amazon.cn/favicon.ico",
              url: "https://www.amazon.cn",
              title: "亚马逊(中国)"
            },
          ]
        },
        {
          name: "下载",
          list: [
            {
              logo: "https://www.btbtt15.com/favicon.ico",
              url: "https://www.btbtt15.com",
              title: "BT之家"
            },
            {
              logo: "https://btdig.com/favicon.ico",
              url: "https://btdig.com",
              title: "BTGigg"
            },
            {
              logo: "https://yyets.dmesg.app/svg/logo.svg",
              url: "https://yyets.dmesg.app",
              title: "人人影视"
            },
            {
              logo: "http://www.down512.com/favicon.ico",
              url:"http://www.down512.com",
              title: "极品下载论坛"
            },
          ]
        },
        {
          name: "电影/电视剧",
          list: [
            {
              logo: "https://fitacg.com/media/website/icon.png",
              url:"https://fitacg.com",
              title: "菲特动漫"
            },
          ]
        },
      ]
    }
  },
  methods: {
    toPage() {
      console.log("12312321")

    },
  }
}
</script>

<style scoped lang="less">
</style>
