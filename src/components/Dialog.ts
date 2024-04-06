import { createApp } from 'vue'
import Dialog from '@/components/Dialog.vue'

const createDialog = (message: any, option = {}) => {
    const mountNode = document.createElement('div')
    const Instance = createApp(Dialog, {
        show: true,
        message,
        ...option,
        close: () => { 
            Instance.unmount(); 
            document.body.removeChild(mountNode);
        }
    })

    document.body.appendChild(mountNode)
    Instance.mount(mountNode)
}

export default createDialog