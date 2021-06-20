<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header

    horizontal-line

    form.max-w-sm.w-full.flex.flex-col.items-center(
      @submit.prevent="auth"
    )
      custom-input.my-2.w-full(
        placeholder="E-mail"
        v-model="email"
      )

      custom-input.my-2.w-full(
        placeholder="Senha"
        type="password"
        v-model="password"
      )

      custom-button.my-2 Entrar
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Admin extends Vue {
  email = ''
  password = ''

  auth () {
    this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
  }
}
</script>
