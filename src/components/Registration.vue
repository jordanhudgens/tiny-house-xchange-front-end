<template>
  <div>
    <h2>Register</h2>

    <form @submit.prevent="submitRegistration">
      <div>
        <input type="text" v-model="email">
      </div>

      <div>
        <input type="password" v-model="password">
      </div>

      <div>
        <input type="password" v-model="password_confirmation">
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Registration',
  data() {
    return {
      email: null,
      password: null,
      password_confirmation: null
    }
  },
  methods: {
    submitRegistration() {
      axios
        .post("https://tiny-house-exchange-service.herokuapp.com/register_user",
        {
          user: {
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation
          }
        })
        .then(response => {
          console.log('created successfully', response.data);

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