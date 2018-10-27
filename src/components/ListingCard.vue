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
}
</script>