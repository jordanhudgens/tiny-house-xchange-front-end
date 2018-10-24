<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'ListingCard',

  props: {
    name: String
  },

  mounted() {
    console.log("in listing card", this.listings)
  }
}
</script>