<script setup>
import Header from "./header.vue"

</script>

<template>
    <head>
        <slot name="head"></slot>  
    </head>
    <body>
        <Header></Header>
        <slot name="body"></slot>
    </body>
</template>

<script>
export default {
    mounted(){
      this.array_l = Array.from(document.getElementsByClassName("loaded"))
      this.array_l_ing = Array.from(document.getElementsByClassName("loading"))
      for(let index in this.array_l_ing){
        this.array_l_ing[index].style.display = "none"
      }
      for(let index in this.array_l){
        this.array_l[index].style.display = "inline-block"
      }
    }
};
</script>

<style>
html, body {
  overflow: auto;
}
</style>