<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <p class="subtitle is-6">
            <nuxt-link to="/">Back to All Posts</nuxt-link>
          </p>

          <h1 class="title is-2"> {{ post.fields.title }} </h1>
          <hr>
          <div class="content" v-html="$md.render(post.fields.content)">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import client from '../plugins/contentful';

export default {
  async asyncData({ params, error, payload }) {
    if (payload) return { post: payload };

    let entries = await client.getEntries({ content_type: 'post', 'fields.slug': params.slug });
    return { post: entries.items[0] };
  },

  head() {
    return {
      title: this.post.fields.title
    }
  }
}
</script>

