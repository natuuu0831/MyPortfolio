<template>
  <main>
    <h1>{{msg}}</h1>
    <h2>Continue to create<br>
    omething valuable<br>
    to users</h2>
  </main>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'NATSUKI KAMINAGA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-size: 60px;
  }
  h2{
    font-size: 45px;
    margin-top: 30px;
    line-height: 1.2;
  }
</style>
