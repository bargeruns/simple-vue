<template>
  <div>
    <section class="hero is-primary has-text">
      <div class="hero-body">
        <div class="container">
          <nuxt-link to="/">
          <h1 class="title"><img src="/logo.png" alt="vuejs logo" class="logo">SimpleVue</h1></nuxt-link>
          <h2 class="subtitle">Tips and Tricks for VueJS Developers</h2>
          <ul class="nav-links">
            <li>
              <nuxt-link to="/" :class="{ selected: currentRoute === '/' }">Articles</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" :class="{ selected: currentRoute === '/about' }">About</nuxt-link>
            </li>
          </ul>
        </div>
          
      </div>
    </section>
    <nuxt/>
    
    <section class="section is-marginless footer-section">
      <footer class="footer">
        <div class="container">
          <p>
            <strong>SimpleVue</strong> by <a href="https://seanbrage.com">Sean Brage</a>
            <br/>
            <strong>&#169;</strong>Sean Brage and Simple-Vue.com, 2018
          </p>
          <hr>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'SimpleVue',
      meta: [
       { hid: 'description', name: 'description', content: 'Tips and Tricks for VueJS Developers' } 
      ]
    }
  },

  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }

}
</script>


<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

img.logo {
  width: 36px;
  margin-bottom: -6px;
  display: inline-block
}

section.footer-section {
  padding: 3em 0 0 0;
  width: 100vw;
}

ul.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin-top: 14px;
  margin-bottom: 0;
}

ul.nav-links li {
  margin-right: 14px;
  font-size: 1.65em;
}

ul.nav-links li a.selected {
  text-decoration: underline;
}

</style>
