<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="dodajOglas">
                    <div class="createOglas">
                        <div class="info">
                            <h1 class="info">Izgubili ste ljubimca?</h1>
                            <h2 class="info">Dozvolite da pomognemo našom širokom mrežom ljubitelja životinja</h2>
                        </div>
                        <div class="center-text">
                            <table class="mytable">
                                <tbody>
                                    <tr>
                                        <td><h2>Naslov</h2><input type="text" class="form-control" v-model="naslov" placeholder="Unesite Naslov/naziv ljubimca" > </td>
                                    </tr>
                                    <tr>
                                        <td><h2>Opis</h2><textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Unesite opis ljubimca" v-model="opis" ></textarea></td>
                                    </tr>
                                    <tr>
                                        <td><h2>Broj telefona</h2><input type="text" class="form-control" placeholder="Unesite broj telefona" v-model="telefon" > </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <button type="submit" class="btn btn-primary" @click="dodajOglas()">Postavi</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>


<style>
    .center-text{
        display: flex;
        justify-content: center;
    }
    td{
        margin: 1rem !important;
    }
    .mytable{
        width: 80%;
    }
    td{
        border: 0px solid black !important;
    }
    input{
        width:100%;
    }
    .dodajOglas{
        margin-top: 8rem;
        display: flex; 
        flex-direction: column;
        height: 70vh !important;
    }
    .fill{
        flex: 1;
    }
    label{
        text-align: left;
        font-size:26px;
        margin: 1rem;
        font-family: 'Ubuntu', sans-serif;
    }
    .form-group{
        margin: 1rem;
    }
    textarea {
        resize: none !important;
    }
    button{
        margin-top: 1rem !important;
    }

</style>

<script>
    export default{
        name:"DodajOglas",
        data(){
            return {
                currentUser:{},
                naslov:"",
                opis: "",
                telefon:""
            }
        },
        created(){
            if(localStorage.getItem("currentUser")==null){
                localStorage.setItem("currentUser",JSON.stringify({
                    idUser: "3",
                    username:"Mirko"
                }))
            }
            this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
        },
        methods:{
            dodajOglas(){
                let sviOglasi = JSON.parse(localStorage.getItem("oglasi"))

                sviOglasi.push(
                    {
                        idCreator: this.currentUser.idUser,
                        creatorName: this.currentUser.username,
                        description: this.opis,
                        title: this.naslov,
                        imgPath: "dog.jpg",
                        tel: this.telefon,
                        comments:[]
                    }
                )
                localStorage.setItem("oglasi", JSON.stringify(sviOglasi))
            }
        }

    }


</script>


