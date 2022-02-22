let app = {

    // ARCHITECTURE DE L'APPLICATION
    mvc: {

        //Instance de classe Router de la librairie vanilla routeur 
        router : null,

        dispatchRoute: function(controllerInstance){
            // Vérifie que le contrôleur est un contrôleur valide
            if (!controllerInstance.hasOwnProperty('template') || !controllerInstance.executeHttpRequest) {
                return console.warn(`Le controller ${controllerInstance.constructor.name} est invalide.`);
            }
            console.log(controllerInstance);
            // Exécute une requête HTTP GET pour récupérer la vue, et définir la chaîne de promesses pour traiter la réponse
            fetch(controllerInstance.template)
            .then(response => console.log(response.text()))
            .then(htmlContent => {

                //La reponse HTTP contient le HTML de la vue a injecter
                document.querySelector('.container').innerHTML = htmlContent;

                controllerInstance.executeHttpRequest();

            });



        },

        redirectTo : function(url){
            //Demande au routeur de charger une nouvelle route 
            app.mvc.router.navigateTo(url);
        }

    }

}

// Exporter app afin qu'il soit accessible par d'autres modules
export default app;