<template>
    <div>
        OGLAS
        <div>{{oglas.title}}</div>
        <p>{{oglas.opis}}</p>
    </div>
</template>


<script>
    export default{
        name:"Oglas",
        props:["oglas"],
        
    }
</script>