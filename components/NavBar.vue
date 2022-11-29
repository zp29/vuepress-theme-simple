<template>
  <div
    v-if="navbar"
    class="navbar"
  >
    <SearchBox class="SearchBox"/>
    <a
      v-for="(url, name) in navbar"
      :key="name"
      :href="url"
      target="_blank"
      class="navbar-item"
      rel="noopener noreferrer"
    >{{ name }}</a>
  </div>
</template>

<script>
  
import SearchBox from '@SearchBox'

export default {
  computed: {
    navbar() {
      return this.$themeConfig.navbar || null
    },
  },
  components: { SearchBox }
}
</script>
