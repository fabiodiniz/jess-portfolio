import {
  ref,
  computed,
} from '@nuxtjs/composition-api'
import { NuxtFireInstance } from '@nuxtjs/firebase'
import { delay } from '~/utils'
import { LoginPayload } from '~/interfaces'
import { user } from '~/store'

export default function ($fire: NuxtFireInstance) {
  const loading = ref(false)
  const isLoggedIn = computed(() => user.isLoggedIn)

  const auth = async (payload: LoginPayload) => {
    return await $fire
      .auth
      .signInWithEmailAndPassword(payload.email, payload.password)
  }

  const login = async (payload: LoginPayload) => {
    loading.value = true
    await auth(payload)
    await delay(500)
    loading.value = false
  }

  const logout = async () => {
    await $fire
      .auth
      .signOut()
  }

  return {
    login,
    logout,
    loading,
    isLoggedIn,
  }
}
