<template lang="pug">
  form.max-w-sm.w-full.flex.flex-col.items-center(
    v-else
    @submit.prevent="submit"
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
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import User from '~/store/User'

@Component
export default class LoginForm extends Vue {
  email = ''
  password = ''
  UserStore = getModule(User, this.$store)

  @Prop(Boolean) readonly loading?: Boolean

  get isDisabled () {
    return this.loading || !this.email || !this.password
  }

  submit () {
    const payload: LoginPayload = {
      email: this.email,
      password: this.password,
    }

    this.$emit('submit', payload)
  }
}
</script>
