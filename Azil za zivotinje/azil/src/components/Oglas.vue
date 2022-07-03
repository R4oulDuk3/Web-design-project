

<template>
    <div v-if="!deleted" :class="{ notprintable: !printable }">
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-lg-6 col-sm-12">
                <img v-bind:src="oglas.imgPath"  class="img-fluid rounded-start img" alt="greska">
            </div>
            <div class="col-lg-6 col-sm-12 card-div">
                <div class="card-body">
                    <div class="user-bar">
                        <div class="user">
                            <img src="https://i.pinimg.com/originals/6f/9b/24/6f9b24e85d5bfb8acff726b5457bbd5c.jpg" alt="" class="avatar">
                                <div class="card-user-info">
                                    <h1 class="name">{{oglas.creatorName}}</h1>
                                    <h4 class="tel">{{oglas.tel}}</h4>
                                </div>
                        </div>
                        <i class="las la-file-pdf pdf notprintable" v-if="this.$props.canprint" @click="toPDF()"></i>
                        <i class="las la-trash pdf notprintable" v-if="this.$props.deletable" @click="deleteOglas()"></i>
                    </div>

                    <div class="post-content">
                        <h5 class="card-title">{{oglas.title}}</h5>
                        <p class="card-text">{{oglas.description}}</p>
                    </div>
                    <div class="comments notprintable">
                        <div v-for="comment in oglas.comments" :key="comment">
                            <Comment :comment="comment"></Comment>
                        </div>
                    </div>
                    <div class="create-comment-div notprintable">
                        <textarea type="text" class="input" placeholder="Write a comment" v-model="comment"></textarea>
                        <button type="button" class="btn btn-light" @click="addComment()">Add comment</button>
                    </div>
                </div>
            </div>
        </div>
</div>
    </div>
</template>

<style>
.card{
    width: 100%;
}
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
        min-height: 150px;
        max-height: 150px;
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
    .img{
            border-radius: 0px !important;
        }
    @media print {

        .notprintable{
            display: none !important;
        }
        .notprintable *{
            display: none !important; 
        }
        .img{
            max-height: 300px;
        }
        .card-body{
            max-height: 300px;
        }
            .comments{
        flex: 1;
        overflow: auto;
        margin-left: 1.5rem;
        margin-top: 0.5rem;
        overflow: auto;
        min-height: 200px;
        max-height: 200px;
    }
        
}
</style>

<script>
    import $ from 'jquery'
    import Comment from "../components/Comment.vue"
    export default{
        name:"Oglas",
        components:{
            Comment
        },
        props:[
            "oglas",
            "deletable",
            "canprint"
            
            ],
        created(){
            if(localStorage.getItem("currentUser")==null){
                localStorage.setItem("currentUser",JSON.stringify({
                    idUser: "3",
                    username:"Mirko"
                }))
            }
            this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
        },
        data(){
            return {
                comment:null,
                currentUser:{},
                deleted:false,
                printable:false
            }
        },
        methods:{
            removeItemOnce(arr, value) {
                var index = arr.indexOf(value);
                
                if (index > -1) {
                    arr.splice(index, 1);
                    console.log("deleted")
                }
                return arr;
            },
            addComment(){
                console.log("works")
                this.$props.oglas.comments.push(
                    {
                        idCreator:this.currentUser.idUser,
                        creatorName: this.currentUser.username,
                        comment: this.comment
                    }
                )

                let sviOglasi = JSON.parse(localStorage.getItem("oglasi"))
                for(let oglas of sviOglasi){
                    if(oglas.idOglas == this.$props.oglas.idOglas){
                        oglas.comments.push({
                            idOglas: oglas.idOglas,
                            idCreator:this.currentUser.idUser,
                            creatorName: this.currentUser.username,
                            comment: this.comment                           
                        })
                    }
                }
                localStorage.setItem("oglasi",JSON.stringify(sviOglasi))
            },
            deleteOglas(){
                let sviOglasi = JSON.parse(localStorage.getItem("oglasi"))
                for(let oglas of sviOglasi){
                    console.log(oglas.idOglas)
                    console.log(this.$props.oglas.idOglas)
                    if(oglas.idOglas==this.$props.oglas.idOglas){
                        this.removeItemOnce(sviOglasi, oglas)
                        break
                    }
                }
                localStorage.setItem("oglasi",JSON.stringify(sviOglasi))
                console.log("delete")
                this.deleted=true
//                this.close()
            },
            toPDF(){
                this.printable=true
                setTimeout(()=>{
                    $('.notprintable').parent().hide()
                    print()
                    $('.notprintable').parent().show()
                    this.printable=false
                    },5)
            },
            printDiv(divToPrint) 
                {

                

                var newWin=window.open('','Print-Window');

                newWin.document.open();
                console.log(divToPrint)
                newWin.document.write('<html><body onload="window.print()">'+divToPrint+'</body></html>');
                newWin.print()
                newWin.document.close();
                newWin.close();

                },
            printElem(elem)
                {
                    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

                    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
                    mywindow.document.write('</head><body >');
                    mywindow.document.write('')
                    mywindow.document.write('<h1>' + document.title  + '</h1>');
                    mywindow.document.write(elem);
                    mywindow.document.write('</body></html>');

                    mywindow.document.close(); // necessary for IE >= 10
                    mywindow.focus(); // necessary for IE >= 10*/

                    mywindow.print();
                    mywindow.close();

                    return true;
                },
            close() {
                this.$destroy();
                this.$el.parentNode.removeChild(this.$el);
                }
        }

    }
</script>