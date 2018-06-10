<template>
  <div>
    <h2>Register</h2>

    <form @submit.prevent="submitRegistration"></form>
  </div>
</template>

<script>
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

    }
  }
}
</script>

<style scoped>

</style>