<template>
<div class="container">
    <div class="row">
        &nbsp;
    </div>
    <div class="row">
        &nbsp;
    </div>
    <div class="row">
        &nbsp;
    </div>
    <div class="row">
        &nbsp;
    </div>
    <div class="row">
        &nbsp;
    </div>
    <div class="row" >
        <div class="col-sm-4" id="opis">
            {{animal.opis}}
        </div>
        <div class="col-sm-4">
            <img :src="animal.jpg" alt="Slika">
        </div>
        <div class="col-sm-4" >
            <div class="row"  id="row">
                <div class="col-sm-4">
                    <b>Ime</b>
                    <br>
                    {{animal.ime}}
                </div>
                <div class="col-sm-4">
                    <b>Tezina</b>
                    <br>
                    {{animal.tezina}}kg
                </div>
                <div class="col-sm-4">
                    <b>Godine</b>
                    <br>
                    {{animal.godine}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
img { 
    width: 80%;
    padding-bottom: 30%;
}
#row{
    font-family: 'Courier New', Courier, monospace;
    margin-top: 25%;
}
#opis{
    font-family: 'Courier New', Courier, monospace;
    margin-top: 10%;
    font-size: 20px;

}
</style>

<script>
import animals from '../data/animals';

export default {
    name: 'JednaZivotinja',
    data() {
        return {
            rasa: '',
            animal: null,
        }
    },
    created() {
        this.animal = animals[this.$route.params.id-1];
        if (this.animal.rasa == 1) {
            this.rasa = 'Pas';
        }
        else if (this.animal.rasa == 2) {
            this.rasa = 'Macka';
        }
        else {
            this.rasa = 'Ptica';
        }

    }
}
</script>