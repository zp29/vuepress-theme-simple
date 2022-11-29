<template>
  <div class="theme-container vuepress-theme-simple">
    <header class="header">
      <router-link
        to="/"
        :title="$description"
        class="site-name"
      >
        {{ $site.title }}
      </router-link>
      <div style="clear: both" />
      <NavBar />
    </header>
    <HomePage v-if="isHome" />
    <PostPage v-else />
    <FooterBar />
  </div>
</template>

<script>
import HomePage from "../components/Home";
import PostPage from "../components/Post";
import FooterBar from '../components/FooterBar';
import NavBar from '../components/NavBar';

export default {
  components: {
    HomePage,
    PostPage,
    FooterBar,
    NavBar,
  },
  computed: {
    isHome() {
      return this.$page.path === '/';
    }
  }
};
</script>
