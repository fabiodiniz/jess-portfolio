import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { FirebaseAuth, User as UserType } from '~/types'

@Module({
  name: 'User',
  stateFactory: true,
  namespaced: true,
})
class User extends VuexModule {
  user: UserType | null = null

  @Mutation
  setUser ({ authUser }: FirebaseAuth) {
    if (!authUser) this.user = null
    else {
      const {
        displayName,
        email,
        phoneNumber,
        photoURL,
        providerId,
        uid,
      } = authUser

      this.user = {
        displayName,
        email,
        phoneNumber,
        photoURL,
        providerId,
        uid,
      }
    }
  }

  @Action
  changeUser ({ authUser }: FirebaseAuth) {
    if (!authUser) {
      // Usuário fez logout
    } else {
      // Usuário logou
    }
  }

  get getUser (): UserType {
    const empty = {} as UserType

    return this.user || empty
  }

  get isLoggedIn (): boolean {
    return !!this.getUser.uid
  }
}

export default User
