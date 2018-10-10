<style lang="scss" scoped>
.error {
  margin: 0 auto;
  padding-top: 80px;
  img {
    margin: 0 auto 10px;
    display: block;
    width: 130px;
  }
  .prompt {
    display: block;
    margin: 0 16px;
    color: #42bd56;
    font-size: 16px;
    text-align: center;
  }
}

</style>
<template lang="pug">
  div
    .error
      img(src="/static/404.png" alt="页面未发现")/
      router-link.prompt(to="/") 返回首页
</template>

<script>
export default {
  name: 'page_status_404'
}
</script>
