<template lang="pug">
form(@submit.prevent="signInWithEmailAndPassword")
  label
    p メールアドレス
    input(v-model="email" type="email" autocomplete="email")
  label
    p パスワード
    input(v-model="password" type="password" autocomplete="password")
  div
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

<style lang="scss" scoped>
</style>
