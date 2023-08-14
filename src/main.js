import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')









/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faHouse, faUser, faFolderOpen, faAddressCard, faInstagram, faTelegram, faGithub, faLinkedin, faStackOverflow, faPhone, faTrash )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')