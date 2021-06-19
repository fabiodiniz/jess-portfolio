<template lang="pug">
  nuxt-link(:to="`/job/${job.id}`")
    .job-card
      img(:src="require(`~/static/job${job.id}.png`)")
      .title.flex.flex-col.items-end.justify-end.p-8.text-4xl.uppercase
        strong
          i Job {{ job.id }}
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
