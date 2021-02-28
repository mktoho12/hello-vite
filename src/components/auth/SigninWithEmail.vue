<template lang="pug">
form(@submit.prevent="signInWithEmailAndPassword")
  input(v-model="email" type="email" placeholder="Eメールアドレス" autocomplete="email")
  input(v-model="password" type="password" placeholder="パスワード" autocomplete="password")
  button ログイン
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import firebase from "firebase/app"

export default defineComponent({
  name: 'SigninWithEmail',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signInWithEmailAndPassword() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .catch(error => this.$emit('error', error))
    }
  }
})
</script>
