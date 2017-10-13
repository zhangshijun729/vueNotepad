<template>
  <div id="page">
    <Notebar/>
    <NoteEditor/>
    <NotePreview/>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'
  import Notebar from './components/Notebar'
  import NoteEditor from './components/NoteEditor'
  import NotePreview from './components/NotePreview'
  import store from './vuex/index'

  export default {
    name: 'app',
    store,
    components: {
      Notebar,
      NoteEditor,
      NotePreview
    },
    created(){
      let state = localStorage.getItem('state')
      if(state){
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
    }
  }
</script>

<style lang="scss">
  #page{
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
  li{
    list-style: none;
  }
</style>
