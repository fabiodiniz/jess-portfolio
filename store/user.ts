import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { FirebaseAuth, UserType } from '~/types'

@Module({
  name: 'User',
  stateFactory: true,
  namespaced: true,
})
class User extends VuexModule {
  user: UserType = {}

  @Mutation
  setUser ({ authUser }: FirebaseAuth) {
    if (!authUser) {
      this.user = {}
    } else {
      const { uid, email, emailVerified } = authUser
      this.user = { uid, email, emailVerified }
    }
  }

  @Mutation
  resetUser () {
    this.user = {}
  }

  @Action
  changeUser ({ authUser }: FirebaseAuth) {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
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
