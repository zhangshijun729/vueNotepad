<template>
  <div id="notebar">
    <a href="#" class="iconfont" @click="newNote(),createTime()">&#xe669;</a>
    <a href="#" class="iconfont" @click="toggleFavorite" :class="{activeIcon: selected}">&#xe601;</a>
    <a href="#" class="iconfont" @click="deleteNote">&#xe50f;</a>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../assets/iconfont.css'

  export default {
    name: 'Notetbar',
    computed: {
      selected() {
        return this.$store.state.activeNote.favorite
      }
    },
    methods: {
      newNote() {
        this.$store.commit('NewNote')
      },
      deleteNote() {
        this.$store.commit('DeleteNote')
      },
      toggleFavorite() {
        this.$store.commit('ToggleFavorite')
      },
      createTime() {
        this.$store.commit('CreateTime')
      }
    }
  }
</script>

<style lang="scss">
  #notebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    background: #30414d;
    > .iconfont {
      display: block;
      margin-top: 36px;
      font-size: 2.2em;
      color: #686b6e;
      text-decoration: none;
    }
    > .activeIcon {
      color: #F7AE4F;
    }
  }
</style>
