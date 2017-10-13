<template>
  <div id="note-editor">
    <div class="note-header">
      <div class="btn-group">
        <h1 class="notes-title">NOTES|COLIGO</h1>
        <button class="button" @click="allOrFavorite('all')" :class="{active: showClass === 'all'}">All Notes</button>
        <button class="button" @click="allOrFavorite('favorite')" :class="{active: showClass === 'favorite'}">Favorites</button>
      </div>
    </div>
    <div class="list-group">
      <ul class="list-group-item">
        <li v-for="item in notes" :class="{activeNoteColor: getActiveNote === item}" @click="setActiveNote(item)">
          {{item.title.substr(0,13)}}
          <br>
          {{item.time}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'NoteEditor',
    computed: {
      notes() {
        if (this.showClass === 'all') {
          return this.$store.state.notes
        } else if (this.showClass === 'favorite') {
          return this.$store.state.notes.filter(note => note.favorite)
        }
      },
      showClass() {
        return this.$store.state.show
      },
      getActiveNote() {
        return this.$store.state.activeNote
      }
    },
    methods: {
      allOrFavorite(show) {
        this.$store.commit('AllOrFavorite', show)
      },
      setActiveNote(note) {
        this.$store.commit('SetActiveNote', note)
      }
    }
  }
</script>

<style lang="scss">
  #note-editor {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    width: 300px;
    overflow: auto;
    background: #f5f5f5;
    color: #686b6e;
    > .note-header {
      > .btn-group {
        > .notes-title {
          text-align: center;
          font-weight: 100;
        }
        > .button {
          height: 32px;
          width: 123px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: #fff;
          font-weight: 100;
        }
        .active {
          background: #D4D4D4;
        }
      }
    }
    > .list-group {
      margin-top: 25px;
      > .list-group-item {
        background: white;
        > li {
          line-height: 40px;
          width: 300px;
          padding: 0 20px;
          font-size: 20px;
          cursor: pointer;
        }
        :hover {
        background: #F5F5F5;
        }
      }
    }
  }

  .activeNoteColor {
    background: #C5E7FF !important;
    color: #333;
  }
</style>
