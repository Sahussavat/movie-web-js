<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
</script>

<template>    
    <div>
    <vueper-slides class="no-shadow fade-in"
    style="mix-blend-mode: darken;"
    :visible-slides="1"
    slide-multiple
    fixed-height="500px"
    :dragging-distance="100"
    :breakpoints="{ 
        800: { visibleSlides: 1, slideMultiple: 2, fixedHeight: '400px', }}"
    :touchable="true">
        <vueper-slide v-for="(item, index) in slides" :key="index" :style="'background-color: #000000;'">
        <template #content>
        <div class="vueperslide__content-wrapper">
            <img :src="item.pic_src" style="width: 100%; position: relative; opacity: 0.5;" alt="">

            <div class="container" style="position: absolute;">
            <div class="row">
                <div class="col">
                    <div align="left" class="movide-main-slde fade-in" style="padding-top: 2%; margin-left: 10%;">
                        <p class="movie-main-title" style="font-family: noto; color: #ffffff;">{{item.name}}</p>
                        <div class="movie-main-dsec" style="font-family: noto; color: #ffffff; word-wrap: break-word;">
                            {{item.dsec}}</div>
                            <br>
                            <button type="button" class="btn btn-danger rounded shadow" style="background-color: #8bc819; border-color: #8bc819;" v-on:click="this.$router.push( '/videoplay?id=' + item.id + get_series_string(item))">Watch</button>
                    </div>
                </div>
                <div class="col" style="width: 50%;">
                </div>
            </div>
            </div>
            
        </div>
        </template>

        </vueper-slide>
    </vueper-slides>
    </div>
</template>

<script>
import { search } from '../assets/search_simirarity';
import { test_data } from '../assets/test_data';
export default {
    props: {
        movie_type: {
            type: String,
            required: true,
        },
    },
    methods:{
        get_series_string(item){
            if(item.series){
            return "&ep=1&season=1"
            }
            return ""
        }
    },
    created(){
      this.slides = search(["hot"], test_data)
    }
};
</script>

<style>
@media only screen and (max-width: 600px) {
    .movie-main-title{
        font-size: 30px;
    }
    .movie-main-dsec{
        font-size: 20px;
    }
    .movide-main-slde{
        max-width: 70%;
    }

}

@media only screen and (min-width: 992px) {
    .movie-main-title{
        font-size: 50px;
    }
    .movie-main-dsec{
        font-size: 25px;
    }
    .movide-main-slde{
        max-width: 50%;
    }
}
</style>