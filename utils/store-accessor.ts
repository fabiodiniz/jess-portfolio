import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import example from '~/store/user'

let User: example

function initialiseStores (store: Store<any>): void {
  User = getModule(example, store)
}

export { initialiseStores, User }
