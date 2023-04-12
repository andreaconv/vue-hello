const {createApp} = Vue;

createApp({
  //metodo data
  data(){
    //return dell'oggetto
    return {
      messaggio: "Ciao Vue",
      immagine: "<img src='https://picsum.photos/200/300'>",
    }
  },

  methods: {

  }

}).mount('#app')