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
import { Vue, Component, Prop } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import User from '~/store/User'
import { LoginPayload } from '~/interfaces'

@Component
export default class LoginForm extends Vue {
  email = ''
  password = ''
  UserStore = getModule(User, this.$store)

  @Prop(Boolean) loading: Boolean | undefined

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

<style>
nav {
  position: relative;
  font-family: 'Courier Prime', sans-serif;
}

.social {
  position: absolute;
  left: 0;
}

.menu {
  position: absolute;
  right: 0;
}

nav a {
  color: #494949;
  position: relative;
}

nav .menu a:hover {
  color: black;
}

nav .menu a:hover::before {
  background: black;
}

nav .menu a::before {
  content: '';
  height: 2px;
  width: 14px;
  background: #6a6a6a;
  position: absolute;
  display: block;
  right: 0;
  bottom: 3px;
}
</style>
