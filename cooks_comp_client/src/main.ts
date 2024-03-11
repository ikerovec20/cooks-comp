/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light'
    },
})

const app = createApp(App).use(vuetify);

registerPlugins(app)

app.mount('#app')
