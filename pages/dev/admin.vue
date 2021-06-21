<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header

    horizontal-line

    .text-lg(v-show="isLoggedIn")
      .mt-5 Você já está logado

    login-form(
      v-show="!isLoggedIn"
      :loading="loading"
      @submit="login"
    )
</template>

<script lang="ts">
import { useContext } from '@nuxtjs/composition-api'
import { Vue, Component } from 'nuxt-property-decorator'
import useAuth from '~/composables/useAuth'

@Component({
  setup () {
    const { $fire } = useContext()
    const ctx = useAuth($fire)

    return { ...ctx }
  },
})
export default class Admin extends Vue {}
</script>
