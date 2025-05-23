<script setup>
import { ref } from 'vue';
</script>

<template>
       <div class="input-group">
          <div class="form-outline">
            <input type="search" id="form1" class="form-control" placeholder="Search" :value="this.$route.query.search" @keyup.enter="this.do_search()" />
          </div>
          <button type="button" class="btn btn-primary" v-on:click="this.do_search()" style="background-color: #8bc819; border-color: #8bc819;">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 20 20">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          </button>
        </div>
</template>

<script>
export default {
    methods:{
        do_search(){
            let val = document.getElementById('form1').value
            if (val){
                window.location.href = '/catalogue?search=' + val
            }
        }
    }
}
</script>