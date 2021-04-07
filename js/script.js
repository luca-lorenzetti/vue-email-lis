/* Descrizione:

    Attraverso l'apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all'interno di una lista. 
*/

let app = new Vue({
    el: '#root',
 
    data:{
        emailsList: []
    },

    mounted(){
        this.emailsList = this.getEmails(10);
    },

    methods:{
        // Funzione per richiedere le mail
        getEmails: function(num){

            const email = [];

            for (let i = 0; i < num; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                 email.push(response.data.response);
               });
            }

           return email;
        }
    }
});


