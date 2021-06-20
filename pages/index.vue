<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header

    horizontal-line

    job-list(:jobs="[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
