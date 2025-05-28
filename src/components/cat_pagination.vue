
<template>
    <CatPaginationHtml></CatPaginationHtml>
</template>

<script>
import CatPaginationHtml from './cat_pagination_html.vue'
var items = []
var max_movie_in_page = 1
export default {
    props:[
        'items',
        'max_movie_in_page'
    ],
    components:{
        CatPaginationHtml
    },
    data(){
        return {
            items: []
        }
    },
    setup(props){
        items = props['items']
        max_movie_in_page = props['max_movie_in_page']
    },
    methods:{
        numberRange (start, end) {
            if(start < end){
                let e = end + 1
                return new Array(e - start).fill().map((d, i) => i + start);
            } else {
                return [1]
            }
        }
    },
    created(){
        this.current_page = parseInt(this.$route.query.page)
        this.page_max = parseInt(items.length  / max_movie_in_page)
        if(this.page_max < this.current_page || this.current_page < 1 || !this.current_page){
            this.current_page = 1
        }

        let bound_len_each_side = 1
        this.bound_min = this.current_page - bound_len_each_side
        this.bound_max = this.current_page + bound_len_each_side
        if(this.current_page <= 1){
            this.bound_min = 1
            if(this.bound_max >= this.page_max){
                this.bound_max = this.page_max
            } else {
                this.bound_max += bound_len_each_side
            }
        }
        if(this.current_page >= this.page_max){
            this.bound_max = this.page_max
            if(this.bound_min <= 1){
                this.bound_min = 1
            } else {
                this.bound_min -= bound_len_each_side
            }
        }
        
    },
    mounted(){
        this.next = document.getElementsByClassName("next-pagination")
        this.prev = document.getElementsByClassName("prev-pagination")
        let nums = this.numberRange(this.bound_min, this.bound_max)
        for(let i in nums){
            for(let j=0;j < this.next.length;j++){
                let n_box = document.createElement('li')
                let n_link = document.createElement('a')
                n_box.className = "page-item"
                if(parseInt(nums[i]) == this.current_page){
                    n_box.className = n_box.className + " active"
                }
                n_link.className = "page-link"
                n_link.innerHTML = nums[i]
                n_link.href = '#/catalogue?movietype=' + this.$route.query.movietype + '&page=' + nums[i]
                n_box.appendChild(n_link)
                this.next[j].parentElement.insertBefore(n_box, this.next[j])
            }
        }

        if(this.current_page <= 1){
            for(let j=0;j < this.prev.length;j++){
                this.prev[j].className = this.prev[j].className + " disabled" 
            }
        } else {
            for(let j=0;j < this.prev.length;j++){
                this.prev[j].childNodes[0].href = '#/catalogue?movietype=' + this.$route.query.movietype + '&page=' + (this.current_page - 1)
            }
        }
        if(this.current_page >= this.page_max){
            for(let j=0;j < this.next.length;j++){
                this.next[j].className = this.next[j].className + " disabled"
            }
        } else {
            for(let j=0;j < this.next.length;j++){
                this.next[j].childNodes[0].href = '#/catalogue?movietype=' + this.$route.query.movietype + '&page=' + (this.current_page + 1)
            }
        }
    }
}
</script>