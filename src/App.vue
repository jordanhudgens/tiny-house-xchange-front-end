<template>
  <div id="app">
    <div class="nav">
      <div class="nav-links">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/">
          <img class="nav-logo" src="https://s3.amazonaws.com/interweave-networks-static/tinyhouse.png">
        </router-link>
        <router-link class="nav-link" to="/seller-dashboard">Dashboard</router-link>
        <router-link class="nav-link" to="/seller-dashboard">Another Link</router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<style lang="scss">
@import "styles/main.scss";
</style>
