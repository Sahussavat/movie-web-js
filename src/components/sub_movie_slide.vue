<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import { search } from '../assets/search_simirarity';
import { test_data } from '../assets/test_data';
</script>

<template>    
    <div class="shadow" style="background-color: #000000;">
<div align="left" class="fade-in" style="padding-top: 2%; margin-left: 10%;">
        <a :href="'#/catalogue?movietype=' + movie_type"><p class="title-name" style="font-family: noto; color: #8bc819;">{{movie_type}}</p></a>
    </div>
    <div style='margin-left: 5%; margin-right: 5%;'>
    <vueper-slides class="no-shadow fade-in"
    :visible-slides="5"
    slide-multiple
    fixed-height="400px"
    :dragging-distance="100"
    :breakpoints="{ 
        800: { visibleSlides: 3, slideMultiple: 2, fixedHeight: '300px', }}"
    autoplay bullets-outside :touchable="true">
        <vueper-slide v-for="(item, index) in slides" :key="index" :style="'background-color: transparent;'">
        <template #content>
        <div class="vueperslide__content-wrapper" style="">
          <a :href="'#/videoplay?id=' + item.id + get_series_string(item)">
            <div>
            <img :src=item.pic_src draggable="false" class="rounded shadow loaded img-sub-movie" alt="..." style="display: none; ">
            </div>
            <br>
            <!-- <h5 class="card-title">Card title</h5> -->
            <div class="loaded" style="display: none; font-family: noto-regular; color: #8bc819;">{{ item.name }}</div>
          </a>
        </div>
            
        </template>

        </vueper-slide>
    </vueper-slides>
    </div>
    </div>
    
</template>

<script>
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
      this.slides = search(this.movie_type.split(" "), test_data)
    }
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .title-name {
    font-size: 50px;
  }
  .img-sub-movie {
    width: 90%;
    height: 200px;
  }

}

@media only screen and (min-width: 992px) {
  .title-name {
    font-size: 50px;
  }
  .img-sub-movie{
    width: 90%;
    height: 350px;
  }
}
</style>