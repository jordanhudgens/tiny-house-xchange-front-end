<template>
  <div>
    <div class="card-block">
      <div class="metadata">
        {{ name }}
      </div>
    </div>
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