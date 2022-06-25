<template>
    <div>
        <div class="center grid">
            <div v-for="comment in comments" :key="comment">
                <Comment :comment="comment"></Comment>
            </div>
        </div>
    </div>
    
</template>

<style>
    .grid{
        margin-top: 1.5rem;
        display: grid;
        grid-gap: 20px 10px;
        grid-template-columns: auto;
        grid-auto-rows: 1fr
    }

</style>
    

<script>
import Comment from "../components/Comment.vue"
    export default{
        name:"Comments",
        components:{
            Comment
        },
        props:[
            'comments',
        ]
        
    }

</script>