<template lang="pug">
main.p-main
  header
    h1.p-main__title ユーザー認証
  section(data-status)
    p(v-if="user")
      div {{ user.email }}としてログインしています
      table
        tr
          th attribute
          th value
        tr
          td email verified
          td {{ user.emailVerified }}
        tr
          td is anonymous
          td {{ user.isAnonymous }}
        tr
          td metadata
          td
            table
              tr
                th attribute
                th value
              tr
                td a
                td {{ user.metadata.a}}
              tr
                td b
                td {{ user.metadata.b}}
              tr
                td last sign in time
                td {{ user.metadata.lastSignInTime }}
              tr
                td creation time
                td {{ user.metadata.creationTime }}
        tr
          td multifactor
          td {{ user.multiFactor }}
        tr
          td phoneNumber
          td {{ user.phoneNumber }}
        tr
          td provider data
          td
            table(v-for="providerData in user.providerData")
              tr
                th attribute
                th value
              tr
                td uid
                td {{ providerData.uid }}
              tr
                td display name
                td {{ providerData.displayName }}
              tr
                td photo URL
                td {{ providerData.photoURL }}
              tr
                td email
                td {{ providerData.email }}
              tr
                td phoneNumber
                td {{ providerData.phoneNumber }}
              tr
                td providerId
                td {{ providerData.providerId }}
        tr
          td refresh token
          td {{ user.refreshToken }}
    p(v-else) ログインしていません
  section(data-form="createUserWithEmailAndPassword")
    header
      h2 アカウント新規作成（メールアドレスとパスワード）
      register-with-email(@error="handleError")
  section(data-form="signInWithEmailAndPassword")
    header
      h2 ログイン
      sign-in-with-email(@error="handleError")
  section(data-form="signInWithGoogle")
    header
      h2 Googleでログイン
      sign-in-with-google(@error="handleError")
  section(data-form="sendEmailVerification")
    header
      h2 確認メール
    form
      send-email-verification(@error="handleError")
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
import SendEmailVerification from './auth/SendEmailVerification.vue'
import SignInWithGoogle from './auth/SigninWithGoogle.vue'

export default defineComponent({
  name: 'FirebaseAuth',
  components: {
    'register-with-email': RegisterWithEmail,
    'sign-in-with-email': SigninWithEmail,
    'send-email-verification': SendEmailVerification,
    'sign-in-with-google': SignInWithGoogle,
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
section {
  margin: 50px 0 0;
}
form {
  label {
    display: block;
    margin: 10px 0 0;
    &:first-child {
      margin: 0;
    }
    p {
      margin: 0;
      font-weight: bold;
    }
  }
  div {
    margin: 20px 0 0;
  }
  input[type="email"],input[type="password"] {
    font-size: 16px;
    line-height: 1.5;
    border-radius: 5px;
    border-width: 1pt;
    margin: 10px 0;
    padding: 5px 10px;
    width: 200px;
  }
  button {
    color: white;
    background-color: #238636;
    border-color: #2ea043;
    border-width: 0;
    border-radius: 5px;
    padding: 5px 20px;
    font-size: 18px;
    line-height: 1.5;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
