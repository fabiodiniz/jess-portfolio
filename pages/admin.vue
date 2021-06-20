<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header(@logout="logout")

    horizontal-line

    .text-lg(v-if="isLoggedIn") Você já está logado

    form.max-w-sm.w-full.flex.flex-col.items-center(
      v-else
      @submit.prevent="login"
    )
      custom-input.my-2.w-full(
        v-model="email"
        placeholder="E-mail"
        :disabled="loading"
      )

      custom-input.my-2.w-full(
        type="password"
        v-model="password"
        placeholder="Senha"
        :disabled="loading"
      )

      custom-button.my-2(
        :disabled="isDisabled"
      ) Entrar
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { delay } from '~/utils'
import User from '~/store/User'

@Component
export default class Admin extends Vue {
  email = ''
  password = ''
  loading = false
  UserStore = getModule(User, this.$store)

  get isLoggedIn () {
    return this.UserStore.isLoggedIn
  }

  get isDisabled () {
    return this.loading || !this.email || !this.password
  }

  async auth () {
    return await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
  }

  async login () {
    this.loading = true
    await this.auth()
    await delay(500)
    this.loading = false
  }

  async logout () {
    await this.$fire.auth.signOut()
    this.loading = false
  }
}
</script>
