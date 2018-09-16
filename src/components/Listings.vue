<template>
  <div>
    Listings...
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Listings',
  data() {
    return {
    }
  },
  beforeMount() {
    this.getListings();
  },
  methods: {
    getListings() {
      axios
        .get("https://tiny-house-exchange-service.herokuapp.com/homes")
        .then(response => {
          console.log('responseeeee', response.data);

          return response.data;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>

</style>