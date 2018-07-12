<template>
  <div>
    Seller dashboard

    <div>
      <HomeForm />
    </div>
  </div>
</template>

<script>
import HomeForm from '@/components/HomeForm';
import axios from 'axios';

export default {
  name: 'SellerDashboard',
  components: {
    HomeForm
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>