import "@/scss/stisla.scss";

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'vite-plugin-laravel/inertia'
import { Ziggy } from "@/scripts/utils/ziggy";
import ZiggyVue from "@/scripts/utils/ziggy/ZiggyVue";
import { InertiaProgress } from "@inertiajs/progress";
import { Config } from "ziggy-js";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => title ? `${title} - ${appName}` : appName,
  resolve: (name) => resolvePageComponent(name, import.meta.glob('../views/pages/**/*.vue')),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy as Config)
      .mount(el)
  },
})

InertiaProgress.init();
