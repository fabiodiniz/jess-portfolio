import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { FirebaseAuth, User as UserType } from '~/types'

@Module({
  name: 'User',
  stateFactory: true,
  namespaced: true,
})
class User extends VuexModule {
  user: UserType = {}

  @Mutation
  setUser ({ authUser }: FirebaseAuth) {
    if (!authUser) this.user = {}
    else {
      const { uid, email, emailVerified } = authUser
      this.user = { uid, email, emailVerified }
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

  get getUser () {
    return this.user
  }

  get isLoggedIn () {
    return !!this.user.uid
  }
}

export default User
