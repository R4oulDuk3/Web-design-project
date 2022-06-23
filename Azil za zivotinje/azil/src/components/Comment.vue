<template>
    <div class="comment">
        <img src="https://i.pinimg.com/originals/6f/9b/24/6f9b24e85d5bfb8acff726b5457bbd5c.jpg" alt="" class="avatar avatar-comment">
        <div class="card-user-info">
            <p class="comment-text"><b>{{comment.creatorName}}</b> {{comment.comment}}</p>
        </div>
    </div>
</template>

<style>
    .avatar{
        margin-right: 0.5rem !important;
        width:60px !important;
        height:60px !important;
    }
    .avatar-comment{
        width:40px !important;
        height:40px !important;
    }
    .comment{
        display: flex;
        margin: 0.8rem;
    }
    .comment-text{
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        text-align: left;
        font-weight: bold;
    }
    b{
        font-weight: 500;
        font-family: 'Ubuntu', sans-serif;
    }
    .create-comment-div{
        border-top:1px solid lightgray;
    }
</style>

<script>
    export default{
        name:"Comment",
        props:["comment"],

    }
</script>