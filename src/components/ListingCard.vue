<template>
  <div>
    <div class="card-block">
      <div class="metadata">
        <h2>
          {{ name }}
        </h2>
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