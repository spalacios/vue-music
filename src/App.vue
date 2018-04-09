<template lang="pug">
  #app
    img.logo(src='./assets/podcast-logo.png')
    h2 Vue Music by Palacios Santiago
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.name.toLowerCase()") {{ country.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
      //- li(v-for="artist in artists") {{ artist.name }} 
       
</template>

<script >
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'
import countries from './api/country'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries : countries.countries,
      selectedCountry: 'argentina',
      loading: true
    }
  },
  methods:{
    refreshArtist(){
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.selectedCountry)
        .then(function (artists){
          self.loading = false
          self.artists = artists
        })
    }
  },
  components: {
    Artist,
    Spinner
  },
  mounted(){
    this.refreshArtist()
  },
  watch: {
    selectedCountry(){
       this.refreshArtist()
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal
img.logo
  max-height 200px
ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #4f89bd
</style>
