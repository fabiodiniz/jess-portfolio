<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header

    horizontal-line

    .max-w-sm.w-full.flex.flex-col.items-center
      custom-input.my-2.w-full(
        placeholder="E-mail"
        v-model="login"
      )

      custom-input.my-2.w-full(
        placeholder="Senha"
        v-model="password"
      )

      custom-button.my-2(
        @click=""
      ) Entrar
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      login: null,
      password: null
    }
  }
})
</script>
