import { defineStore } from "pinia"
import { ref } from "vue"
import AOS from 'aos'
export const useStateStore = defineStore('state', () => {
    interface Tab {
        value: boolean;
    }
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
    const isContactOpen = ref(false)
    const isInerestedOpen = ref(false)
    const isSkillsOpen = ref(false)
    const isExperienceOpen = ref(false)
    const isFrontendOpen = ref(false)
    const isBackendOpen = ref(false)
    const isDatabaseOpen = ref(false)
    const isOtherSkillsOpen = ref(false)

    const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value
    }

    const closeAllTabsExcept = (tabToKeepOpen: Tab, tabs: Tab[]) => {
        tabs.forEach(tab => {
            if (tab !== tabToKeepOpen) {
                tab.value = false;
            }
        });
    };
    const togglePersonalInfo = () => {
        if (isProfessionalTabOpen.value) {
            isProfessionalTabOpen.value = false
            isPersonalInfoOpen.value = true
            AOS.refresh()
        }
        else {
            isPersonalInfoOpen.value = !isPersonalInfoOpen.value
        }

    }
    const toggleProfessionalTab = () => {
        isProfessionalTabOpen.value = !isProfessionalTabOpen.value;
        if (isProfessionalTabOpen.value) {
            closeAllTabsExcept(isProfessionalTabOpen, [isBioOpen, isInerestedOpen, isSkillsOpen, isExperienceOpen, isContactOpen, isPersonalInfoOpen]);
        }
    }
    const toggleContactTab = () => {
       isContactOpen.value=!isContactOpen.value;
        if (isContactOpen.value){
            closeAllTabsExcept(isContactOpen, [isBioOpen, isInerestedOpen, isSkillsOpen, isExperienceOpen,isProfessionalTabOpen,isPersonalInfoOpen]);
        }
    }
    const toggleFindMe = () => {
        isFindMeOpen.value = !isFindMeOpen.value
    }

    const toggleEducation = () => {
        isEducationOpen.value = !isEducationOpen.value;
        if (isEducationOpen.value) {
            closeAllTabsExcept(isEducationOpen, [isBioOpen, isInerestedOpen, isSkillsOpen, isExperienceOpen]);
        }
    };

    const toggleBio = () => {
        isBioOpen.value = !isBioOpen.value;
        if (isBioOpen.value) {
            closeAllTabsExcept(isBioOpen, [isEducationOpen, isInerestedOpen, isSkillsOpen, isExperienceOpen, isProfessionalTabOpen]);
        }
    };
    const toggleInterested = () => {
        isInerestedOpen.value = !isInerestedOpen.value
        if (isInerestedOpen.value) {
            closeAllTabsExcept(isInerestedOpen, [isEducationOpen, isBioOpen, isSkillsOpen, isExperienceOpen]);
        }
    }
    const toggleSkills = () => {
        isSkillsOpen.value = !isSkillsOpen.value
        if (isSkillsOpen.value) {
            closeAllTabsExcept(isSkillsOpen, [isExperienceOpen, isEducationOpen, isInerestedOpen, isBioOpen,]);
        }
    }
    const toggleExperience = () => {
        isExperienceOpen.value = !isExperienceOpen.value
        if (isSkillsOpen.value) {
            closeAllTabsExcept(isExperienceOpen, [isSkillsOpen, isEducationOpen, isInerestedOpen, isBioOpen,]);
        }
    }
    const toggleFrontend = () => {
        isFrontendOpen.value = !isFrontendOpen.value
        if (isFrontendOpen.value) {
            closeAllTabsExcept(isFrontendOpen, [isEducationOpen, isInerestedOpen, isBioOpen, isBackendOpen, isDatabaseOpen, isOtherSkillsOpen]);
        }
    }
    const toggleBackend = () => {
        isBackendOpen.value = !isBackendOpen.value
        if (isBackendOpen.value) {
            closeAllTabsExcept(isBackendOpen, [isEducationOpen, isInerestedOpen, isBioOpen, isFrontendOpen, isDatabaseOpen, isOtherSkillsOpen]);
        }
    }
    const toggleDatabase = () => {
        isDatabaseOpen.value = !isDatabaseOpen.value
        if (isDatabaseOpen.value) {
            closeAllTabsExcept(isDatabaseOpen, [isEducationOpen, isInerestedOpen, isBioOpen, isBackendOpen, isFrontendOpen, isOtherSkillsOpen]);
        }
    }
    const toggleOtherSkills = () => {
        isOtherSkillsOpen.value = !isOtherSkillsOpen.value
        if (isOtherSkillsOpen.value) {
            closeAllTabsExcept(isOtherSkillsOpen, [isEducationOpen, isInerestedOpen, isBioOpen, isBackendOpen, isDatabaseOpen, isFrontendOpen]);
        }
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
        isContactOpen,
        isInerestedOpen,
        isSkillsOpen,
        isExperienceOpen,
        isFrontendOpen,
        isBackendOpen,
        isDatabaseOpen,
        isOtherSkillsOpen,
        toggleSidebar,
        togglePersonalInfo,
        toggleFindMe,
        toggleEducation,
        toggleProfessionalTab,
        toggleBio,
        toggleContactTab,
        toggleInterested,
        toggleSkills,
        toggleExperience,
        toggleFrontend,
        toggleBackend,
        toggleDatabase,
        toggleOtherSkills
    }
})