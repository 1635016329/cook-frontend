import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usetabbarActiveStore = defineStore('tabbarActive', () => {
    const cur = ref("home")
    const pre = ref("home")


    function updateActive(active: string) {
        cur.value = active
    }
    return { cur, pre, updateActive }
})
