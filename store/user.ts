import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

type FirebaseAuth = {
  authUser?: any
  claims?: any
}

type UserType = {
  uid?: number
  email?: string
  emailVerified?: string
}

@Module({
  name: 'User',
  stateFactory: true,
  namespaced: true,
})
class User extends VuexModule {
  user: UserType = {}

  @Mutation
  setUser ({ authUser, claims }: FirebaseAuth) {
    if (!authUser) { return }

    const { uid, email, emailVerified } = authUser
    this.user = { uid, email, emailVerified }
    console.log('claims', claims)
  }

  @Mutation
  resetUser () {
    this.user = {}
  }

  @Action
  changeUser ({ authUser, claims }: FirebaseAuth) {
    console.log('claims', claims)
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
}

export default User
