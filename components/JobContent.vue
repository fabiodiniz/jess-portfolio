<template lang="pug">
  .job-content Job {{ job.id }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class JobContent extends Vue {
  @Prop(Object) job: any | undefined
}
</script>
