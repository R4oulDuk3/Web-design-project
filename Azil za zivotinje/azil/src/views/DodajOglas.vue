<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="dodajOglas">
                    <div class="createOglas">
                        <div class="info-form">
                            <h1>Izgubili ste ljubimca?</h1>
                            <h2>Dozvolite da pomognemo našom širokom mrežom ljubitelja životinja</h2>
                        </div>
                        <div class="center-text myform">
                            <table class="mytable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h2>Naslov</h2>
                                            <input type="text" class="form-control" v-model="naslov" placeholder="Unesite Naslov/naziv ljubimca" > 
                                            <h3 v-if="err_naslov" class="err-msg" id="naslov-err">
                                                Naslov nije u ispravnom formatu.
                                             </h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>Opis</h2>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Unesite opis ljubimca" v-model="opis" ></textarea>
                                            <h3 v-if="err_opis" class="err-msg" id="opis-err">
                                                Mora se uneti opis ljubimca.
                                            </h3>    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>Broj telefona</h2>
                                            <input type="text" class="form-control" placeholder="Unesite broj telefona" v-model="telefon" >
                                            <h3 v-if="err_telefon" class="err-msg" id="telefon-err">
                                                Telefon nije u ispravnom formatu.
                                            </h3>    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <button type="submit" class="btn submit-button" @click="dodajOglas()">
                                            <h3 v-if="!showLoading" class="button-text">Postavi</h3>
                                            <div v-if="showLoading" class="loading loading--full-height"></div>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
          <div id="snackbar">Uspeh!</div>
    </div>
</template>


<style>
    .myform{
        padding:1rem;
    }
    .err-msg{
        color: red;
        font-size: 20px;
        text-align: left;
        margin-top:0.2rem;
    }
    .center-text{
        display: flex;
        justify-content: center;
    }
    td{
        margin: 1rem !important;
    }
    .mytable{
        width: 80%;
        margin-top:1rem;
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
        height: 140vh !important;
    }
    .createOglas{
        background: whitesmoke;
        border-radius: 2rem;
    }
    .info-form{
        background: rgb(113, 180, 141) !important;
        padding: 1.5rem;
        color:whitesmoke;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
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
    .submit-button{
        margin-top: 1rem !important;
        background: rgb(113, 180, 141) !important;
    }
    .button-text{
        font-size: 25px;
        margin: 0.5rem !important;
        color: white;
    }
    .loading {
    display: flex;
    justify-content: center;
    }

    .loading--full-height {
    align-items: center;
    height: 25px;
    margin: 0.5rem;
    }

    .loading::after {
    content: "";
    width: 50px;
    height: 50px;
    border: 10px solid #dddddd;
    border-top-color: #009579;
    border-radius: 50%;
    transform: rotate(0.16turn);
    animation: loading 1s ease infinite;
    }

    @keyframes loading {
    /* Safari support */
    from {
        transform: rotate(0turn);
    }
    
    to {
        transform: rotate(1turn);
    }
    }
    #snackbar {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 50%; /* Center the snackbar */
    bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
.show {
    visibility: visible !important; /* Show the snackbar */

/* Add animation: Take 0.5 seconds to fade in and out the snackbar.
However, delay the fade out process for 2.5 seconds */
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}

</style>

<script>
import $ from "jquery";
    export default{
        name:"DodajOglas",
        data(){
            return {
                currentUser:{},
                naslov:"",
                opis: "",
                telefon:"",
                showLoading:false,
                err_telefon:false,
                err_opis:false,
                err_naslov:false
            }
        },
        created(){
            localStorage.setItem('page','dodajOglas')
            document.title = "Dodaj oglas"
            $(".loading").hide()
            if(localStorage.getItem("currentUser")==null){
                localStorage.setItem("currentUser",JSON.stringify({
                    idUser: "3",
                    username:"Mirko"
                }))
            }
            this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
        },
        methods:{
            showSnackbar(){
                
                // Get the snackbar DIV
                var x = document.getElementById("snackbar")

                // Add the "show" class to DIV
                x.className = "show";

                // After 3 seconds, remove the show class from DIV
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            },
            validatePhone(phone){
                if(phone.match(/[^a-zA-Z]/g) && phone.length>8){
                    return true
                }return false
            },
            dodajOglas(){
                $("err-msg").hide()
                this.err_naslov= this.naslov.length<4
                this.err_opis= this.opis.length<5
                this.err_telefon= !this.validatePhone(this.telefon)
                if(this.err_naslov|| this.err_opis || this.err_telefon)return
                let sviOglasi = JSON.parse(localStorage.getItem("oglasi"))
                
                sviOglasi.push(
                    {
                        idOglas: sviOglasi.length+1,
                        idCreator: this.currentUser.idUser,
                        creatorName: this.currentUser.username,
                        description: this.opis,
                        title: this.naslov,
                        imgPath: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                        tel: this.telefon,
                        comments:[]
                    }
                )
                this.showLoading=true
                localStorage.setItem("oglasi", JSON.stringify(sviOglasi))
                setTimeout(()=>{
                    this.showLoading=false;
                    this.showSnackbar()
                },1000)
                
            }
        }

    }


</script>


