<template lang="pug">
  .main-header.flex.w-full.justify-center.items-center
    social-links

    .flex.flex-col.items-center
      nuxt-link(to="/dev")
        img(
          class="w-36 sm:w-auto"
          src="~/static/jess-logo.png"
          srcset="~/static/jess-logo@2x.png 2x"
        )

      small.uppercase.mt-1.cursor-default(
        class="text-sm sm:text-lg"
      ) Copywriter

    .menu.flex.flex-col.text-right(
      class="text-sm sm:text-base"
    )
      nuxt-link(to="/dev/about-me") about me
      nuxt-link(to="/dev/free-time") free time
      nuxt-link(
        to="/dev"
        @click.native="logout"
        v-show="isLoggedIn"
      ) logout
</template>

<script lang="ts">
import { useContext } from '@nuxtjs/composition-api'
import { Vue, Component } from 'nuxt-property-decorator'
import useAuth from '~/composables/useAuth'

@Component({
  setup () {
    const { $fire } = useContext()
    const ctx = useAuth($fire)

    return { ...ctx }
  },
})
export default class MainHeader extends Vue {}
</script>

<style scoped>
.main-header {
  position: relative;
  font-family: 'Courier Prime', sans-serif;
}

.social {
  position: absolute;
  left: 4px;
}

.menu {
  position: absolute;
  right: 4px;
}

.main-header a {
  color: #494949;
  position: relative;
}

.main-header .menu a:hover {
  color: black;
}

.main-header .menu a:hover::before {
  background: black;
}

.main-header .menu a::before {
  content: '';
  height: 2px;
  width: 14px;
  background: #6a6a6a;
  position: absolute;
  display: block;
  right: 0;
  bottom: 3px;
}
</style>
