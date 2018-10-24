<template>
  <div>
    ListingCard
  </div>
</template>

<script>
export default {
  name: 'ListingCard',

  props: {
    listings: Array
  },

  mounted() {
    console.log("in listing card", this.listings)
  }
}
</script>