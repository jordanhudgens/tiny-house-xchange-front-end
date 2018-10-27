<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/seller-dashboard">Dashboard</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "styles/main.scss";
</style>
