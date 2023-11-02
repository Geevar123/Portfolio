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
    const isEducationOpen = ref(false)
    const isProfessionalTabOpen = ref(false)
    const isBioOpen = ref(false)
    const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value
    }
    const togglePersonalInfo = () => {
        if (isProfessionalTabOpen.value) {
            isProfessionalTabOpen.value = false
            isPersonalInfoOpen.value = true
        }
        else {
            isPersonalInfoOpen.value = !isPersonalInfoOpen.value
        }

    }
    const toggleProfessionalTab = () => {
        if (isPersonalInfoOpen.value) {
            isPersonalInfoOpen.value = false
            isProfessionalTabOpen.value = true
        }
        else {
            isProfessionalTabOpen.value = !isProfessionalTabOpen.value
        }
    }
    const toggleFindMe = () => {
        isFindMeOpen.value = !isFindMeOpen.value
    }
    const toggleEducation = () => {
        isEducationOpen.value = !isEducationOpen.value
    }
    const toggleBio=()=>{
        isBioOpen.value=!isBioOpen.value
    }
    return {
        isSidebarOpen,
        isAboutMeOpen,
        ishelloOpen,
        isProjectPageOpen,
        isPersonalInfoOpen,
        isContactMeOpen,
        isFindMeOpen,
        isSuccess,
        isEducationOpen,
        isProfessionalTabOpen,
        isBioOpen,
        toggleSidebar,
        togglePersonalInfo,
        toggleFindMe,
        toggleEducation,
        toggleProfessionalTab,
        toggleBio,
    }
})