import {
  ref,
  computed,
} from '@nuxtjs/composition-api'
import { NuxtFireInstance } from '@nuxtjs/firebase'
import { user as userStore } from '~/store'

export default function ($fire: NuxtFireInstance) {
  const loading = ref(false)
  const isLoggedIn = computed(() => userStore.isLoggedIn)

  const auth = async (payload: LoginPayload) => {
    return await $fire
      .auth
      .signInWithEmailAndPassword(payload.email, payload.password)
  }

  const login = async (payload: LoginPayload) => {
    loading.value = true
    await auth(payload)
    loading.value = false
  }

  const logout = async () => {
    await $fire
      .auth
      .signOut()
  }

  return {
    auth,
    login,
    logout,
    loading,
    isLoggedIn,
  }
}
