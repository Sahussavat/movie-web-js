<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
</script>

<template>    
    <div class="" v-if="slides && slides.length > 0">
<div id="doctors" align="left" class="" style="padding-top: 2%; margin-left: 10%;">
        <p class="title-name" style="font-family: noto-regular; color: #000;">หนังที่คล้ายกัน</p>
    </div>
    <div style='margin-left: 5%; margin-right: 5%;'>
    <vueper-slides class="no-shadow"
    :visible-slides="5"
    slide-multiple
    fixed-height="400px"
    :dragging-distance="100"
    :bullets="false"
    :breakpoints="{ 
        800: { visibleSlides: 3, slideMultiple: 2, fixedHeight: '300px', }}"
    autoplay :touchable="true">
        <vueper-slide v-for="(item, index) in slides" :key="index" :style="'background-color: transparent;'">
        <template #content>
        <div class="vueperslide__content-wrapper" style="">
          <a :href="'#/videoplay?id=' + item.id + get_series_string(item)">
            <div>
            <img :src=item.pic_src draggable="false" class="rounded shadow loaded other-vid-img" alt="..." style="display: none;">
            </div>
            <br>
            <!-- <h5 class="card-title">Card title</h5> -->
            <div class="loaded" style="display: none; font-family: noto-regular; color: #000;">{{ item.name }}</div>
          </a>
        </div>
            
        </template>

        </vueper-slide>
    </vueper-slides>
    </div>
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
  methods: {
    get_movie_by_id(id){
      for(let i=0;i<test_data.length;i++){
        if(parseInt(id) == test_data[i]['id']){
          
          return test_data[i]
        }
      }
    },
    get_series_string(item){
        if(item.series){
          return "&ep=1&season=1"
        }
        return ""
      }
  },
  created(){
    this.item = this.get_movie_by_id(this.$route.query.id)
    this.slides = search([this.item.name, ...this.item.tags], test_data, this.$route.query.id)
    console.log(this.slides)
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .title-name {
    font-size: 50px;
  }
  .other-vid-img{
    width: 90%;
    height: 200px;
  }

}

@media only screen and (min-width: 992px) {
  .title-name {
    font-size: 50px;
  }
  .other-vid-img{
    width: 90%;
    height: 350px;
  }
}
</style>