<template lang="pug">
  nuxt-link(:to="`/job/${job.slug}`")
    .job-card
      img(:src="job.cover")
      .title.flex.flex-col.items-end.justify-end.p-8.text-4xl.uppercase
        strong
          i {{ job.title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class JobCard extends Vue {
  @Prop(Object) job: any | undefined
}
</script>

<style>
.job-card {
  margin: 2px;
  position: relative;
  overflow: hidden;
}

.job-card:hover .title {
  opacity: 1;
}

.job-card:hover img {
  filter: blur(4px);
  transition: 0.3s ease-out filter;
}

.job-card .title {
  position: absolute;
  opacity: 0;
  transition: 0.3s ease-out opacity;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.5);
}
</style>
