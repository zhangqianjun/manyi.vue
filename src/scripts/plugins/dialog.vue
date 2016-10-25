<template>
  <div>
    <div v-if="isShow">
      <div class="yo-dialog yo-dialog-a">
        <header class="hd">
          <h2 class="title"></h2>
        </header>
        <div class="bd">
          <p>请重新登录</p>
        </div>
        <footer class="ft">
          <button class="yo-btn yo-btn-dialog yo-btn-l" @click="hide"v-link="{path:'/index/my/login'}">确定</button>
        </footer>
      </div>
      <div class="yo-mask"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow: true
      }
    },
    methods: {
      hide(){
        this.isShow = false;
      }
    },
    ready(){
      
    }
  }
</script>
