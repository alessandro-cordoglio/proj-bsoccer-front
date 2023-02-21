import { createApp } from "vue";
// import { router } from "./router";

import App from "./App.vue";

createApp(App).mount("#app");
//Aggiungi .use(router) tra createApp e mount

// Import our custom CSS
import '../src/style/global.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'