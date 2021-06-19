<template lang="pug">
  .job-content Job {{ job.id }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    job: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>
