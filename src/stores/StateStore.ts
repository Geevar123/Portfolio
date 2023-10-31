import { defineStore } from "pinia"
import { ref } from "vue"
export const useStateStore = defineStore('state', () => {
    const isSidebarOpen = ref(false)
    const isAboutMeOpen = ref(false)
    const isProjectPageOpen=ref(false)
    const ishelloOpen = ref(false)
    const isPersonalInfoOpen = ref(false)
    const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value
    }
    const togglePersonalInfo=()=>{
        isPersonalInfoOpen.value=!isPersonalInfoOpen.value
    }
    return {
        isSidebarOpen,
        isAboutMeOpen,
        ishelloOpen,
        isProjectPageOpen,
        isPersonalInfoOpen,
        toggleSidebar,
        togglePersonalInfo
    }
})