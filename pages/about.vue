<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <p class="subtitle is-6">
            <nuxt-link to="/">Back to Latest Posts</nuxt-link>
          </p>

          <h1 class="title is-2"> {{ page.fields.title }} </h1>
          <hr>
          <div class="content" v-html="$md.render(page.fields.content)"></div>
        </div>
        <about-bio />
      </div>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';
import AboutBio from '~/components/AboutBio';

export default {

  components: {
    AboutBio
  },

  async asyncData({ params, error, payload }) {
    if (payload) return { page: payload };

    let entries = await client.getEntries({ content_type: 'page', 'fields.slug': 'about' });
    return { page: entries.items[0] };
  }
}
</script>

