<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header

    horizontal-line

    job-list(:jobs="getJobs")
</template>

<script lang="ts">
import { useContext } from '@nuxtjs/composition-api'
import { Vue, Component } from 'nuxt-property-decorator'
import useJobs from '~/composables/useJobs'

@Component({
  setup () {
    const { $fire } = useContext()
    const ctx = useJobs($fire, true)

    return { ...ctx }
  },
})
export default class Home extends Vue {}
</script>
