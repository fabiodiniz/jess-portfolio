<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header(@logout="logout")

    horizontal-line

    .text-lg(v-if="isLoggedIn") Você já está logado

    login-form(
      v-else
      :loading="loading"
      @submit="login"
    )
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { delay } from '~/utils'
import User from '~/store/User'
import { LoginPayload } from '~/interfaces'

@Component
export default class Admin extends Vue {
  loading = false
  UserStore = getModule(User, this.$store)

  get isLoggedIn () {
    return this.UserStore.isLoggedIn
  }

  async auth (payload: LoginPayload) {
    return await this.$fire
      .auth
      .signInWithEmailAndPassword(payload.email, payload.password)
  }

  async login (payload: LoginPayload) {
    this.loading = true
    await this.auth(payload)
    await delay(500)
    this.loading = false
  }

  async logout () {
    await this.$fire
      .auth
      .signOut()

    this.loading = false
  }
}
</script>
