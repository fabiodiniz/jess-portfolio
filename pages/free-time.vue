<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header

    horizontal-line

    page-detail(title="Free time")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class FreeTimePage extends Vue {}
</script>
