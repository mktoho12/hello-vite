<template lang="pug">
form(@submit.prevent="createUserWithEmailAndPassword")
  input(v-model="email" type="email" placeholder="Eメールアドレス" autocomplete="email")
  input(v-model="password" type="password" placeholder="パスワード" autocomplete="password")
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
