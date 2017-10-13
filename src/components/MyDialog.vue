<template>
  <div class="dialogWrapper" v-show="visible">
    <div class="dialog">
      <header>
        {{title}}
        <span class="close" @click="close">X</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MyDialog',
    props: ['title','visible'],
    methods: {
      close(){
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss">

</style>
