import { defineStore } from "pinia"
import { ref } from "vue"
export const useStateStore = defineStore('state', () => {
    const isSidebarOpen = ref(false)
    const isAboutMeOpen = ref(false)
    const isProjectPageOpen = ref(false)
    const ishelloOpen = ref(false)
    const isPersonalInfoOpen = ref(false)
    const isContactMeOpen = ref(false)
    const isFindMeOpen = ref(false)
    const isSuccess = ref(false)
    const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value
    }
    const togglePersonalInfo = () => {
        isPersonalInfoOpen.value = !isPersonalInfoOpen.value
    }
    const toggleFindMe = () => {
        isFindMeOpen.value = !isFindMeOpen.value
    }
    return {
        isSidebarOpen,
        isAboutMeOpen,
        ishelloOpen,
        isProjectPageOpen,
        isPersonalInfoOpen,
        toggleSidebar,
        togglePersonalInfo,
        toggleFindMe,
        isContactMeOpen,
        isFindMeOpen,
        isSuccess
    }
})