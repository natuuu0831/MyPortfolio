<template>
  <div id="app">
    <headerItem />
      <router-view />
  </div>
</template>

<script>
  import headerItem from "./components/headerItem";

  export default {
    name: "App",
    components: {
      headerItem
    }
  };

</script>

<style>
  body,
  div,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  dl,
  dt,
  dd,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  li {
    list-style: none;
  }

  main {
    margin: 4rem 6rem; 
  }
  .flex{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
