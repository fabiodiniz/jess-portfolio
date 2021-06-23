<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header

    horizontal-line

    .text-lg(v-show="isLoggedIn")
      .mt-5 Você já está logado

    login-form(
      v-show="!isLoggedIn"
      :loading="loading"
      @submit="submit"
    )
</template>

<script lang="ts">
import { useContext, useRouter } from '@nuxtjs/composition-api'
import { Vue, Component } from 'nuxt-property-decorator'
import useAuth from '~/composables/useAuth'

@Component({
  setup () {
    const { $fire } = useContext()
    const authCtx = useAuth($fire)
    const router = useRouter()

    const submit = async (payload: LoginPayload) => {
      await authCtx.login(payload)
      router.push('/dev')
    }

    return { ...authCtx, submit }
  },
})
export default class AdminPage extends Vue {}
</script>
