import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    activeNote: {},
    show: 'all',
  },
  mutations: {
    //新增笔记
    NewNote(state) {
      var newNote = {
        id: +new Date(),
        title: 'New Note',
        time: '',
        content: '',
        favorite: false
      }
      state.notes.push(newNote)
      state.activeNote = newNote
      localStorage.setItem('state', JSON.stringify(state))
    },
    //编辑笔记标题
    EditNoteTitle(state, text) {
      state.activeNote.title = text
      localStorage.setItem('state', JSON.stringify(state))
    },
    //创建时间
    CreateTime(state) {
      let created = new Date(),
        year = created.getFullYear(),
        month = created.getMonth() + 1,
        day = created.getDate(),
        createdAt = year + '-' + month + '-' + day
      state.activeNote.time = createdAt
      localStorage.setItem('state', JSON.stringify(state))
    },
    //编辑笔记内容
    EditNoteContent(state, text) {
      state.activeNote.content = text
      localStorage.setItem('state', JSON.stringify(state))
    },
    //删除笔记
    DeleteNote(state) {
      var index = state.notes.indexOf(state.activeNote)
      state.notes.splice(index, 1)
      if(index === 0) {
        state.activeNote = state.notes[index] || {}
      }else {
        state.activeNote = state.notes[index - 1] || {}
      }
      localStorage.setItem('state', JSON.stringify(state))
      console.log(22222)
    },
    //切换笔记收藏
    ToggleFavorite(state) {
      state.activeNote.favorite = !state.activeNote.favorite
      localStorage.setItem('state', JSON.stringify(state))
      console.log(33333)
    },
    //切换显示所有和收藏
    AllOrFavorite(state, show) {
      state.show = show
      if (state.show === 'favorite') {
        state.activeNote = state.notes.filter(note => note.favorite)[0] || {}
      } else {
        state.activeNote = state.notes[0] || {}
      }
    },
    //设置当前激活的笔记
    SetActiveNote(state, note) {
      state.activeNote = note
      console.log(state.activeNote)
      localStorage.setItem('state', JSON.stringify(state))
    },
    //本地存储
    initState(state, payload) {
      Object.assign(state, payload)
    }
  }
})
