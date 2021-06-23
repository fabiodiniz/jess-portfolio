import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
@Module({
  name: 'User',
  stateFactory: true,
  namespaced: true,
})
export default class UserStore extends VuexModule {
  user: User | null = null

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

  get getUser (): User {
    const empty = {} as User

    return this.user || empty
  }

  get isLoggedIn (): boolean {
    return !!this.getUser.uid
  }
}
