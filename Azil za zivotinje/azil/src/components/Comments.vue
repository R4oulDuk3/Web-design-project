<template>
    <div>
        <div class="comment-wrapper">
            <div class="oglas-info">
                <div>
                    <h1 class="oglas-title">{{oglasComments.title}}</h1>
                    <h2 class="oglas-text">{{oglasComments.description}}</h2>
                </div>
                <div class="user">
                    <img src="https://i.pinimg.com/originals/6f/9b/24/6f9b24e85d5bfb8acff726b5457bbd5c.jpg" alt="" class="avatar">
                    <div class="card-user-info">
                        <h1 class="name">{{oglasComments.creatorName}}</h1>
                        <h4 class="tel">{{oglasComments.tel}}</h4>
                    </div>
                </div>

            </div>
            <div class="grid move-right">
                <div v-for="comment in oglasComments.comments" :key="comment">
                    <Comment :comment="comment"></Comment>
                </div>
            </div>
            <!-- <div class="poster-info">
                <div class="user">
                    <img src="https://i.pinimg.com/originals/6f/9b/24/6f9b24e85d5bfb8acff726b5457bbd5c.jpg" alt="" class="avatar">
                    <div class="card-user-info">
                        <h1 class="name">{{oglasComments.creatorName}}</h1>
                        <h4 class="tel">{{oglasComments.tel}}</h4>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
    
</template>

<style>
    .poster-info{
        display: flex;
        justify-content:flex-end;
        padding: 1rem;
        background-color: lightgray;
        border-bottom-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }
    .comment-wrapper{
        display: flex;
        flex-direction: column;
        margin: 1rem;
        background: whitesmoke;
        border-radius: 2rem;
    }
    .grid{
        margin-top: 1.5rem;
        display: grid;
        grid-gap: 20px 10px;
        grid-template-columns: auto;
        grid-auto-rows: 1fr
    }
    .move-right{
        margin-left: 3rem;

    }
    .oglas-title{
        font-size: 32px;
        text-align: left;
        margin-left: 1rem;
        font-family: 'Ubuntu', sans-serif;
    }
    .oglas-info{
        background: rgb(113, 180, 141) !important;
        padding: 1rem;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .oglas-text{
        margin-left: 1rem;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        text-align: left;
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
            'oglasComments',
        ]
        
    }

</script>