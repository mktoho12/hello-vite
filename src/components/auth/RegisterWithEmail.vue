<template lang="pug">
form(@submit.prevent="createUserWithEmailAndPassword")
  label
    p メールアドレス
    input(v-model="email" type="email" autocomplete="email")
  label
    p パスワード
    input(v-model="password" type="password" autocomplete="password")
  div
    button アカウント作成
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import firebase from "firebase/app"

export default defineComponent({
  name: 'RegisterWithEmail',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    createUserWithEmailAndPassword() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .catch(error => this.$emit('error', error))
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
