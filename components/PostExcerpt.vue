<template>
<div class="columns">
  <div class="column is-6">
    <div class="content">
      <nuxt-link :to="post.fields.slug"><h2 class="title is-4"> {{ post.fields.title }}</h2></nuxt-link>
      <p class="content"> {{ post.fields.excerpt }} </p>
      <nuxt-link :to="post.fields.slug">Read More...</nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'PostExcerpt',
  props: ['post']
} 
</script>
