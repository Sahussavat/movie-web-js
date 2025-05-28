<script setup>
import SearchBar from './searchbar.vue';
const header_links = [
  {name:"แฟนตาซี"},
  {name:"แอ็คชั่น"},
  {name:"โรแมนติก"},
  {name:"สยองขวัญ"},
]
</script>

<template>
<nav id="navbar-example2" class="navbar sticky-top navbar-expand-lg " style="background-color: #000000;">
    <!-- Container wrapper -->
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" style=" background-color: #8bc819;" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample" aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <!-- Collapsible wrapper -->
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarCenteredExample"
      >
        <!-- Left links -->
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/" style="font-family: noto-regular; font-size: 20px; color: #8bc819;">หน้าหลัก</a>
          </li>
          <li class="nav-item" v-for="h in header_links">
            <a class="nav-link" aria-current="page" :href="'#/catalogue?movietype=' + h.name" style="font-family: noto-regular; font-size: 20px; color: #8bc819;">{{ h.name }}</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
       <div class="navbar-brand">
        <SearchBar></SearchBar>
       </div>
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<style>
 a:link {
      text-decoration: none;
}

a:visited {
      text-decoration: none;
}

a:hover {
      text-decoration: none;
}

a:active {
      text-decoration: none;
}
</style>

<script>
import { watch } from 'vue'
export default {
  methods:{
    to_page(string){

    }
  },
  created(){
    watch(
            ()=> this.$route.query.search, ()=>{
                location.reload(true);
            }
        )
  }
}
</script>