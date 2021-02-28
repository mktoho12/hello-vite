<template lang="pug">
main.p-main
  header
    h1.p-main__title ユーザー認証
  section(data-status)
    p(v-if="user") {{ user.email }}としてログインしています
    p(v-else) ログインしていません
  section(data-form="createUserWithEmailAndPassword")
    header
      h2 アカウント新規作成（メールアドレスとパスワード）
      register-with-email(@error="handleError")
  section(data-form="signInWithEmailAndPassword")
    header
      h2 ログイン
      sign-in-with-email(@error="handleError")
  section(data-form="signOut")
    header
      h2 ログアウト
    form
      button(type="button" @click="signOut") ログアウト
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import firebase from "firebase/app"
import RegisterWithEmail from './auth/RegisterWithEmail.vue'
import SigninWithEmail from './auth/SigninWithEmail.vue'

export default defineComponent({
  name: 'FirebaseAuth',
  components: {
    'register-with-email': RegisterWithEmail,
    'sign-in-with-email': SigninWithEmail,
  },
  data() {
    return {
      user: null,
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => this.user = user)
  },
  methods: {
    signOut() {
      firebase.auth().signOut().catch(this.handleError)
    },
    handleError(error: firebase.auth.Error) {
      console.error({errorCode: error.code, errorMessage: error.message})
    }
  }
})
</script>

<style lang="scss">
.p-main {
  margin: 30px;
  text-align: left;
}
</style>
