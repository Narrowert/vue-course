import { createApp } from 'vue'
import App from './App'
import MyButton from '@/components/UI/MyButton.vue'
import MyInput from '@/components/UI/MyInput.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MySelect from '@/components/UI/MySelect.vue'
import router from '@/router/router'

const app = createApp(App);

app
.component('my-button', MyButton)
.component('my-input', MyInput)
.component('my-dialog', MyDialog)
.component('my-select', MySelect)


app.use(router)
app.mount('#app')