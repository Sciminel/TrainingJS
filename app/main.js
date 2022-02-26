import app from "./app.js";

import Home from "../controller/Home.js";

// Initialiser l'appli

function initialiseRouter() {
  //Instance de vanilla router, en mode hash dans l'url : /#/<route>
  app.mvc.router = new Router({
    mode: 'hash',
    root: '/index.html'
  });

  console.log(app.mvc);
  //Définir les différentes routes disponible
  app.mvc.router.add('/', () => app.mvc.dispatchRoute(new Home()));

  app.mvc.router.check().addUriListener();

}

document.addEventListener("DOMContentLoaded", function () {
  // Initialise le routeur
  initialiseRouter();

});
