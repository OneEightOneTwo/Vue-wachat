<template>
  <div class="weui-tabbar">
    <a href="javascript:;" v-for="(t,index) in tabber" :key="index" class="weui-tabbar__item weui-bar__item_on" >
       <span style="display: inline-block;position: relative;">
           <img :src="img" alt="" class="weui-tabbar__icon">
           <span  class="weui-badge" style="position: absolute;top: -2px;right: -13px;" v-text="t.number"></span>
       </span>
       <p class="weui-tabbar__label" v-text="t.title"></p>
    </a>
  </div>
  <!-- 好吧哈巴 -->
</template>

<script>
// 引入小图标
import img from "../assets/messa.png";
export default {
  data() {
    return {
      img,
      tabber: [
        { title: "微信", number: 8, name: "wechat" },
        { title: "通讯录", number: 0, name: "contact" },
        { title: "发现", number: 0, name: "discover" },
        { title: "我", number: 0, name: "mine" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
}
</style>