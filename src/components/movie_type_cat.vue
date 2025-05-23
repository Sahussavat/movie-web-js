<script setup>
import MainPage from './mainpage.vue';
</script>

<template>
    <MainPage>
        <template v-slot:body>
        <div style="overflow: auto; background-color: #000000;">
        <div class="" style="margin: 2%;">
            <div>
                <nav aria-label="...">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item">
                    <a class="page-link disabled" href="#">Next</a>
                    </li>
                </ul>
                </nav>
            </div>
            <div id="doctors" align="left" class="fade-in" style="padding-top: 2%; margin-left: 10%;">
                <p class="title-name" style="font-family: noto; color: #8bc819;">{{movie_type}}</p>
            </div>
            <div class="containers" align="center" style="min-height: 300px;">
                <div class="row row-cols-3 row-cols-sm-5">
                    <div class="col" style="margin-bottom: 5%;" v-for="slide in slides">
                        <a :href="'/videoplay?id=' + slide.id + get_series_string(slide)">
                         <img :src="slide.pic_src" draggable="false" class="rounded shadow loaded" alt="..." style="display: none;width: 90%;">
                         <div class="loaded" style="margin-top: 5%; display: none; font-family: noto-regular; color: #8bc819;">{{ slide.name }}</div>
                        </a>
                    </div>
                </div>
                <div v-if="slides.length == 0">
                        <br>
                        <p style="font-size: 45px; font-family: noto-regular; color: #8bc819;">ไม่พบหนัง</p>
                    </div>
            </div>
            <div>
                <nav aria-label="...">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item">
                    <a class="page-link disabled" href="#">Next</a>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
        </div>
        </template>
    </MainPage>
</template>

<script>
import { search } from '../assets/search_simirarity';
import { test_data } from '../assets/test_data';
export default {
    created(){
        let type = this.$route.query.movietype
        let srch = this.$route.query.search
        this.is_screach = false
        if(srch){
            this.movie_type = srch
            this.is_screach = true
        } else if(type){
            this.movie_type = type
        }
        this.slides = search(this.movie_type.split(" "), test_data)
        
        if(this.is_screach){
            this.movie_type = "ค้นหา: " + this.movie_type
        }
    },
    methods:{
        get_series_string(item){
            if(item.series){
            return "&ep=1&season=1"
            }
            return ""
        }
    }
}
</script>

<style>
.pagination>li.active>a {
  background-color: #8bc819;
  border-color: #8bc819;
}
</style>