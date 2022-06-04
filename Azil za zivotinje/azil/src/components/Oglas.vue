

<template>
    <div>
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"  class="img-fluid rounded-start" alt="greska">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{oglas.title}}</h5>
                    <p class="card-text">{{oglas.description}}</p>
                    <h4 class="card-text"><small class="text-muted">+381 62 244 094</small></h4>
                </div>
            </div>
        </div>
</div>
    </div>
</template>

<style>
    .card-title{
        font-size: 32px;
    }
    .card-text{
        font-size: 26px;
    }
</style>

<script>
    export default{
        name:"Oglas",
        props:["oglas"],

    }
</script>