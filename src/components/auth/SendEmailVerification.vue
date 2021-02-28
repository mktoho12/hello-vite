<template lang="pug">
form(@submit.prevent="sendEmailVerification")
  div
    button 確認メールを送る
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import firebase from "firebase/app"

export default defineComponent({
  name: 'SendEmailVerification',
  methods: {
    sendEmailVerification() {
      const currentUser = firebase.auth().currentUser
      currentUser && currentUser.sendEmailVerification()
      .catch(error => this.$emit('error', error))
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
