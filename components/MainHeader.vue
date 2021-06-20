<template lang="pug">
  .main-header.flex.w-full.justify-center.items-center
    .social.flex.items-center.space-x-2
      a(
        target="_blank"
        href="https://www.linkedin.com/in/jess-fernandes"
      )
        img(
          src="~/static/icon-linkedin.png"
          srcset="~/static/icon-linkedin@2x.png 2x"
        )

      a(
        target="_blank"
        href="mailto:jessfernandes.pp@gmail.com"
      )
        img(
          src="~/static/icon-email.png"
          srcset="~/static/icon-email@2x.png 2x"
        )

    .flex.flex-col.items-center
      nuxt-link(to="/")
        img(
          class="w-40 sm:w-auto"
          src="~/static/jess-logo.png"
          srcset="~/static/jess-logo@2x.png 2x"
        )

      small.uppercase.mt-1.cursor-default(
        class="text-sm sm:text-lg"
      ) Copywriter

    .menu.flex.flex-col.text-right(
      class="text-sm sm:text-base"
    )
      nuxt-link(to="/") about
      nuxt-link(to="/") free time
      nuxt-link(
        to="/"
        @click.native="logout"
        v-if="isLoggedIn"
      ) logout
</template>

<script lang="ts">
import { useContext } from '@nuxtjs/composition-api'
import { Vue, Component } from 'vue-property-decorator'
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

<style>
.main-header {
  position: relative;
  font-family: 'Courier Prime', sans-serif;
}

.social {
  position: absolute;
  left: 0;
}

.menu {
  position: absolute;
  right: 0;
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
