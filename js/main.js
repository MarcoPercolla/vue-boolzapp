const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {

            notification: true,

            // status del elemento input selection (dropdown in singoli messaggi)(controlla se visibile o meno dropdown)
            selStatus: "true",

            searchName: "",

            // tiene traccia dell index del Contacts corrente
            counter: 1,

            // tiene traccia di counter su Nuovo messaggio
            tracker: 1,
            
            // accetta valori data corrente ogni volta che viene creato nuovo messaggio
            timeCheck: "",

            // Status dell'elemento p in message controllato da selection in dropdown (data nel mio caso)
            infoCheck: "none",

            // valore message in oggetto nuovo messaggio  da legare a this.contacts(i).message nei nuovi messaggi scritti da utente
            toSend: "",

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        
        selectChat(i) {

            this.counter = i;

            // elemento dropdown parte nascosto
            const sel = document.querySelectorAll(".msgActions");
            sel.forEach(element => {
                element.classList.add("invisible");
            });
        },

        notifyAlert() {
            this.notification = !(this.notification);
        },

        findDate() {
            let checkpoint = new Date();
            this.timeCheck = checkpoint.toLocaleString();
            // this.hourCheck = "0"+checkpoint.getHours().toString()+":0"+checkpoint.getMinutes().toString() ;   
        },

        dateToggle(i) {
            if (this.infoCheck == i) {
                this.infoCheck = "none";
                
            } else {
                this.infoCheck = i;
                
            }
            
        },

        // controlla relazione tra nome singolo contatto in contacts(array) e input in ricerca
        searchChat() {
            this.contacts.forEach(element => {

                let Elemento = element.name.toUpperCase();
                let Ricercato = this.searchName.toUpperCase();
                if (Elemento.includes(Ricercato)) {
                    element.visible = true;

                } else {
                    element.visible = false;
                }

            });
        },

        // genera risposta ok e push in messages di chat corrente
        sendResp() {
            this.findDate();
            let newMessage = {
                date: this.timeCheck,
                message: "ok",
                status: "received"

            };
            
            const newText = this.contacts[this.tracker].messages;
            newText.push(newMessage);

        },

        // genera risposta da input e push in messages di chat corrente
        addMessage() {
            this.findDate();

            let newMessage = {
                date: this.timeCheck,
                message: this.toSend,
                status: "sent"

            };
            this.contacts[this.counter].messages.push(newMessage);
            this.toSend = "";
            this.tracker= this.counter;

            // richiama sendResp con un ritardo di 3 sec
            setTimeout(this.sendResp , 3000);
            

        },

        // cancella messaggio da array messaggi in chat corrente e nasconde info di messaggio corrente
        deleteMsg(i) {

            this.contacts[this.counter].messages.splice(i, 1);
            document.querySelectorAll(".msgActions")[i].classList.add("invisible");
            this.selStatus = "true";

        },
        // open Select input
        openSel(i) {

            const sel = document.querySelectorAll(".msgActions");


            sel.forEach((element, index) => {

                if (index == i && this.selStatus == "true") {

                    element.classList.remove("invisible");
                    this.selStatus = i;
                } else if (index == i && this.selStatus == i) {

                    this.selStatus = "true";
                    element.classList.add("invisible");

                } else if (index == i) {
                    element.classList.remove("invisible");
                    this.selStatus = i;

                } else {
                    element.classList.add("invisible");

                }

            });

        }

    }
}

createApp(opzioni).mount('#app')