<template>
  <div class="grid-layout">
    <div class="left-column">
      <Listings />
    </div>

    <div class="right-column">
      Sidebar listings
    </div>
  </div>
</template>

<script>
import Listings from '@/components/Listings';

export default {
  name: 'home',
  components: {
    Listings
  }
}
</script>
