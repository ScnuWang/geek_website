<template>
  <div>极客视界，欢迎您！！！
    <div>当前时间：{{ currentDate }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date().toLocaleString()
      };
    }
  }
</script>
