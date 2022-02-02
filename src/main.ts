import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/tailwind-light/theme.css";
import "primeicons/primeicons.css";
import "remixicon/fonts/remixicon.css";

import Button from "primevue/button";
import ToastService from "primevue/toastservice";

const app = createApp(App).use(PrimeVue).use(store).use(router).use(ToastService);
app.component("p-btn", Button);
app.mount("#app");
