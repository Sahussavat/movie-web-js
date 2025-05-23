<script setup>
import main_movie_slide from './main_movie_slide.vue';
import sub_movie_slide from './sub_movie_slide.vue';
import MainPage from './mainpage.vue';

const movie_type = [
    "Fantasy",
    "Military",
    "Action",
    "Romance"
]
</script>

<template>
    <MainPage>
    <template v-slot:body>
    <main_movie_slide></main_movie_slide>
        <div style="background-color: #000000; overflow: auto;">
    <sub_movie_slide v-for="type in movie_type" :movie_type="type"></sub_movie_slide>
        </div>
    </template>
    </MainPage>
</template>