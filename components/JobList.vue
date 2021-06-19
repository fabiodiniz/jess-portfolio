<template lang="pug">
  .job-list.flex.flex-wrap.justify-center
    job-card(
      v-for="job in jobs"
      :key="job.id"
      :job="job"
    )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    jobs: {
      type: Array,
      default: () => []
    }
  }
})
</script>
