import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import user from '~/store/user'

let User: user

function initialiseStores (store: Store<any>): void {
  User = getModule(user, store)
}

export { initialiseStores, User }
