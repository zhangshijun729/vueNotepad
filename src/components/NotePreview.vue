<template>
  <div id="note-preview">
    <div class="bg">
      <input type="text" :value="activeNote.title" class="title" @input="editNoteTitle" @change="createTime">
      <textarea class="content" :value="activeNote.content" @input="editNoteContent" placeholder="请输入正文..." @change="createTime"></textarea>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'NotePreview',
    computed: {
      activeNote() {
        return this.$store.state.activeNote
      }
    },
    methods: {
      editNoteTitle(e) {
        this.$store.commit('EditNoteTitle', e.target.value)
      },
      editNoteContent(e) {
        this.$store.commit('EditNoteContent', e.target.value)
      },
      createTime() {
        this.$store.commit('CreateTime')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #note-preview {
    flex-grow: 1;
    > .bg {
      height: 100vh;
      overflow: hidden;
      > .title {
        height: 30px;
        width: 100%;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
      }
      > .content {
        height: 100vh;
        width: 100%;
        padding: 15px;
        border: none;
        outline: none;
      }
    }
  }
</style>
