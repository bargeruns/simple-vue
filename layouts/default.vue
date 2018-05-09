<template>
  <div>
    <section class="hero is-primary has-text">
      <div class="hero-body">
        <div class="container">
          <nuxt-link to="/">
          <h1 class="title"><img src="/logo.png" alt="vuejs logo" class="logo">SimpleVue</h1></nuxt-link>
          <h2 class="subtitle">Tips and Tricks for VueJS Developers</h2>
        </div>
      </div>
    </section>
    <nuxt/>
  </div>
</template>

<script>
export default {

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


</style>
