<template>
  <div>
    Listings...
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Listings',

  data() {
    return {
    }
  },

  beforeMount() {
    this.retrieveListingsFromServer();
  },

  methods: {
    ...mapActions([
      'retrieveListingsFromServer'
    ])
  }
}
</script>