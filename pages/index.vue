<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-2">Latest Posts</h1>
      <hr>
      <post-excerpt v-for="post in posts" :post="post" :key="post.fields.slug"></post-excerpt>    
    </div>
  </section>
</template>

<script>
import moment from 'moment';
import * as client from '../plugins/contentful';
import PostExcerpt from '~/components/PostExcerpt.vue';

export default {
  components: {
    PostExcerpt
  },

  async asyncData({ params }) {
    return client.getEntries({
      content_type: 'post',
      order: '-sys.createdAt',
    })
    .then(entries => {
      return { posts: entries.items }
    })
    .catch(err => console.log(err));
  },

  methods: {
    prettyDate(date) {
      return moment(date).format('MM/DD/YYYY');
    }
  },

  head() {
    return {
      title: 'SimpleVue'
    }
  }
}
</script>

<style>

</style>
