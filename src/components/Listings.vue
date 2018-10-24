<template>
  <div>
    Listings...
    <ListingCard :listings="getListings()" />
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

import ListingCard from "@/components/ListingCard";

export default {
  name: 'Listings',

  components: {
    ListingCard
  },

  beforeMount() {
    this.retrieveListingsFromServer();
  },

  methods: {
    ...mapGetters([
      'getListings'
    ]),

    ...mapActions([
      'retrieveListingsFromServer'
    ])
  }
}
</script>