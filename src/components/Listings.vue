<template>
  <div>
    <div v-if="getListings()">
      <div v-for="listing in getListings()" :key="listing.id">
        <ListingCard :name="listing.name" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

// TODO
// Build out full auth system, starting with ensuring that the store is working
// And combine the registration component into an auth component

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