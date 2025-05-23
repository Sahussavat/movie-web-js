<script setup>
import OtherVideoes from './other_videoes.vue';
import MainPage from './mainpage.vue';
</script>

<template>
    <MainPage>
    <template v-slot:body>
      <div style=" background-color: #8bc819; overflow: auto;">
        <div class="shadow" style="margin: 5%;">
        <div class="vid-box rounded" style="position:relative; overflow: hidden;">
            <div class="vid-dsec" style="overflow: hidden; position:relative;">
                <img :src="item.pic_src" style="width: 100%; position: absolute; margin: auto;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;" alt="">
                <div class="container" style="position: absolute;">
                <div class="row">
                    <div class="vid-dsec col vid-text-col" style="background-image: linear-gradient(to left, rgba(0,0,0,0.2) 0%,  rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);">
                        <div id="doctors" align="left" class="fade-in" style="padding-top: 2%; margin-left: 10%;">
                            <p class="title-name" style="font-family: noto; color: #ffffff;">{{item.name}}</p>
                            <div class="title-name" style="font-family: noto; color: #ffffff; font-size: 20px; word-wrap: break-word;">
                                {{ item.dsec }} </div>
                                <br>
                        </div>
                    </div>
                    <div class="col" style="width: 100%; background-image: linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);">
                    </div>
                </div>
                </div>
            </div>
            <div>
              <div class="vid-series-title" v-if="this.item.series && this.item.series.length > 0">
              <p style="font-family: noto; color: #000000; font-size: 20px;">ซีซั่น {{ this.$route.query.season }} ตอนที่ {{this.$route.query.ep}}</p>
              </div>
            </div>
            <div>
                <video-player :options="{
                    autoplay: true,
                    controls: true,
                    sources: [
                      {
                        src:
                          'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
                          type: 'video/mp4'
                      }
                    ]
                  }" />
            </div>
        </div>
        </div>
        <div v-if="this.item.series && this.item.series.length > 0">
        <div style="margin-left: 5%; margin-right: 5%;">
          <select id="season-select" class="form-select" style="font-family: noto-regular; color: #8bc819; background-color: #000000; border-color: #000000; font-size: 20px;" v-on:change="show_eps($event.target.value)">
            <option selected value="1">ซีซั่น 1</option>
            <option :value="i + 1" v-for="i in this.item.series.length - 1">ซีซั่น {{ i + 1 }}</option>
          </select>
        </div>
        <div class="shadow rounded overflow-auto" id="scrollable-div" style="margin: 5%; background-color: #000000;">
          <div class="container" style="">
                <div id="ep_box" class="row row-cols-1" style="max-height: 600px;">
                  
                </div>
            </div>
        </div>
        </div>
        <div style="margin: 5%;">
            <OtherVideoes></OtherVideoes>
        </div>
        </div>
    </template>
    </MainPage>
</template>

<script>
import VideoPlayer from './video.vue';
import { test_data } from '../assets/test_data';

export default {
  components: {
    VideoPlayer
  },
  methods: {
    get_movie_by_id(id){
      for(let i=0;i<test_data.length;i++){
        if(parseInt(id) == test_data[i]['id']){
          
          return test_data[i]
        }
      }
    },
    show_eps(season_i){
      document.getElementById('ep_box').innerHTML = ''
      for(let i=0;i<this.item.series[season_i - 1].length;i++){
        let ep = this.item.series[season_i - 1][i]
        let font_color = "#8bc819"
        let bg_color = "#000"
        let focus_here = ""
        if(this.ep && this.ep == i + 1 && this.season && this.season == season_i){
          font_color = "#000"
          bg_color = "#8bc819"
          focus_here = "focus-here"
        }
        document.getElementById('ep_box').innerHTML = document.getElementById('ep_box').innerHTML + 
        `<div class="col rounded" id="${focus_here}" style="max-height: 300px; 
        display: inline-flex; margin-bottom:2%; margin-top:2%; width: 100%; background-color: ${bg_color};">
            <a href="/videoplay?id=${this.$route.query.id}&ep=${i + 1}&season=${season_i}" style="display: inline-flex;">
              <img class="shadow rounded" src="${ep.pic_src}" style="max-height: 200px;">
              <div style="width: 50%; margin-left: 5%;">
                  <br>
                  <p class="" style="font-family: noto; color: ${font_color}; font-size: 20px;">ตอนที่ ${i + 1}</p>
                  <div class="" style="font-family: noto-regular; color: ${font_color}; font-size: 17px; word-wrap: break-word;">
                              ${ep.dsec}</div>
              </div>
              </a>
              </div>`
      }
    },
  },
  created(){
    this.item = this.get_movie_by_id(this.$route.query.id)
  },
  mounted(){
    if(this.item.series && this.item.series.length > 0){
      this.ep = this.$route.query.ep
      this.season = this.$route.query.season
      document.getElementById('season-select').value = this.season
      this.show_eps(this.season)
      setTimeout(function(){
        const container = document.querySelector('#scrollable-div');
        const target = document.querySelector('#focus-here');
        container.scrollTo({
              top: target.offsetTop - container.offsetTop, 
              behavior: 'smooth'
        });
        console.log(target.offsetTop)
      }, 500)
    }
  }
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .vid-text-col{
    max-width: 50%;
  }
  .vid-dsec{
    height: 300px;
  }
  .vid-box{
    height: 550px;
  }
  .vid-series-title{
    margin: 1%;
    margin-top: 3%;
    margin-left: 3%;
  }
}

@media only screen and (min-width: 992px) {
  .vid-text-col{
    max-width: 60%;
  }
  .vid-dsec{
    height: 400px;
  }
  .vid-box{
    height: 1100px;
  }
  .vid-series-title{
    margin: 1%;
    margin-top: 1%;
  }
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
  background-color: aliceblue;
}

::-webkit-scrollbar-thumb {
  background-color: #324c04;
}
</style>