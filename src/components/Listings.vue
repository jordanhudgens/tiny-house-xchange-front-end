<template>
  <div>
    Listings...

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