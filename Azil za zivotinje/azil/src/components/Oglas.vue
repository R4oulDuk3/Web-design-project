

<template>
    <div>
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-lg-7 col-sm-12">
                <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"  class="img-fluid rounded-start" alt="greska">
            </div>
            <div class="col-lg-5 col-sm-12 card-div">
                <div class="card-body">
                    <div class="user-bar">
                        <div class="user">
                            <img src="https://i.pinimg.com/originals/6f/9b/24/6f9b24e85d5bfb8acff726b5457bbd5c.jpg" alt="" class="avatar">
                                <div class="card-user-info">
                                    <h1 class="name">{{oglas.creatorName}}</h1>
                                    <h4 class="tel">{{oglas.tel}}</h4>
                                </div>
                        </div>
                        <i class="las la-file-pdf pdf"></i>
                    </div>

                    <div class="post-content">
                        <h5 class="card-title">{{oglas.title}}</h5>
                        <p class="card-text">{{oglas.description}}</p>
                    </div>
                    <div class="comments">
                        <div v-for="comment in oglas.comments" :key="comment">
                            <Comment :comment="comment"></Comment>
                        </div>
                    </div>
                    <div class="create-comment-div">
                        <textarea type="text" class="input" placeholder="Write a comment" v-model="newItem" @keyup.enter="addItem()"></textarea>
                        <button type="button" class="btn btn-light">Add comment</button>
                    </div>
                </div>
            </div>
        </div>
</div>
    </div>
</template>

<style>
    .pdf{
        font-size: 45px;
        cursor: pointer;
    }
    .user-bar{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        padding-bottom: 0.3rem;   
    }
    button{
        border-radius: 10px;
    }
    textarea {
        width: 100%;
        border: none;
        padding: 5px 10px;
        height: 50%;
        border-radius: 10px 10px 10px 10px;
        border: 1px solid lightgray;
        transition: all 0.5s;
        margin-top: 15px;
    }
    .comments{
        flex: 1;
        overflow: auto;
        margin-left: 1.5rem;
        margin-top: 0.5rem;
        overflow: auto;
        max-height: 400px;
    }
    .create-comment-div{
        padding-top:1rem;
        border-top:1px solid lightgray;
        
    }
    .card-body{
        display: flex !important;
        flex-direction: column !important;
        height: 100%;
    }
    .user{
        display: flex;
    }
    .avatar{
        margin-right: 0.5rem !important;
        width:60px !important;
        height:60px !important;
    }
    .avatar-comment{
        width:40px !important;
        height:40px !important;
    }
    .img-fluid{
        height: 100% !important;
    }
    .tel{
        font-size: 18px;
        font-family: 'Ubuntu', sans-serif;
        text-align: left;
    }
    .name{
        font-size: 20px;
        text-align: left;
        font-family: 'Ubuntu', sans-serif;
    }
    .card-title{
        margin-top: 0.5rem;
        font-size: 24px;
        text-align: left;
        margin-left: 1rem;
        font-family: 'Ubuntu', sans-serif;
    }
    .card-text{
        margin-left: 1rem;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        text-align: left;
    }
</style>

<script>
    import Comment from "../components/Comment.vue"
    export default{
        name:"Oglas",
        components:{
            Comment
        },
        props:["oglas"],

    }
</script>