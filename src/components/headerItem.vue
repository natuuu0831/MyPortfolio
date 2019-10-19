<template>
  <header id="headerItem"> 
      <router-link to="/"><img src="../../src/assets/icon.png" alt=""></router-link>
      <ul class="flex">
          <router-link tag="li" to="/about">ABOUT</router-link>
          <router-link tag="li" to="/skill">SKILL</router-link>
          <router-link tag="li" to="/work">WORK</router-link>
      </ul>
  </header>
</template>

<script>
export default {
  name: 'headerItem',
}
</script>

<style>
header {
  background: #4B5355;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 1rem;
}
header .flex {
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  
}
header .flex li {
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 1rem 0;
  margin: 0 1rem;
  cursor: pointer;
}
header .flex .router-link-active{
  color:skyblue;
}
</style>> 


