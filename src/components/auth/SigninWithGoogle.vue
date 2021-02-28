<template lang="pug">
form(@submit.prevent="signInWithGoogle")
  div
    button Googleでログイン
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import firebase from "firebase/app"

export default defineComponent({
  name: 'signInWithGoogle',
  methods: {
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase.auth().signInWithRedirect(provider)
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
