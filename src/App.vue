<template>
  <div id="app">
    <div class="nav">
      <div class="nav-links">
        <router-link class="nav-link" to="/">
          <i class="fas fa-list-ol"></i>
          <span class="link-text">
            Recent
          </span>
        </router-link>

        <router-link class="nav-link" to="/">
          <i class="fas fa-chart-line"></i>
          <span class="link-text">
            Popular
          </span>
        </router-link>

        <router-link class="nav-link" to="/">
          <img class="nav-logo" src="https://s3.amazonaws.com/interweave-networks-static/tinyhouse.png">
        </router-link>

        <router-link class="nav-link" to="/">
          <i class="fas fa-random"></i>
          <span class="link-text">
            Random
          </span>
        </router-link>

        <router-link class="nav-link" to="/">
          <i class="far fa-plus-square"></i>
          <span class="link-text">
            Submit
          </span>
        </router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<style lang="scss">
@import "styles/main.scss";
</style>
