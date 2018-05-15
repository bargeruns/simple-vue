<template>
  <div class="container column is-one-fourth">
    <div class="card">
      <div class="card-image">
        <figure class="image is-16x9">
          <img :src="imageUrl" class="bio-image" alt="photo of the author at the world's largest comic book store."/>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Sean Brage</p>
            <p class="subtitle is-6">
              <a href="http://seanbrage.com">seanbrage.com</a>
            </p>
            <ul class="social-links">
              <li>
                <a href="https://linkedin.com/in/seanmbrage"><span><i class="fab fa-linkedin fa-2x"/></span></a>
              </li>
              <li>
                <a href="https://github.com/bargeruns"><span><i class="fab fa-github fa-2x" /></span></a>
              </li>
              <li>
                <a href="https://seanbrage.com"><i class="fab fa-safari fa-2x"/></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="content">
          Sean is the husband of Hannah, and the father to twins Abbey and Lukas. They live in Lakewood, CO, right against the foothills and a stone's throw from some quality craft beer and BBQ. Sean loves to write music, play games, and help others hone their skills as developers. When he's not solving problems or writing blog posts, he's been known to run the occasional D&D campaign when time permits.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import client from '~/plugins/contentful';

export default {
  data() {
    return {
      imageUrl: ''
    }
  },

  async mounted() {
    let imageEntry = await client.getEntries({ content_type: 'image', 'fields.title': 'headshot-small' });

    this.$set(this.$data, 'imageUrl', imageEntry.includes.Asset[0].fields.file.url);
  }
}
</script>

<style scoped>
ul.social-links {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

ul.social-links li {
  margin-right: 12px;
}
</style>
