<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <h1 class="title is-2">Latest Posts</h1>
          <hr>

          <div class="content" v-for="post in posts" :key="post.slug">
            <nuxt-link :to="post.fields.slug"><h2 class="title is-4"> {{ post.fields.title }}</h2></nuxt-link>
            <p class="content"> {{ post.fields.excerpt }} </p>
            <p> Posted on {{ prettyDate(post.fields.publishedAt) }}</p>
            <nuxt-link :to="post.fields.slug">More...</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import moment from 'moment';
import * as client from '../plugins/contentful';

export default {
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
