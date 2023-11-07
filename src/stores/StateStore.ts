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

    const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value
    }
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
        if (isPersonalInfoOpen.value) {
            isPersonalInfoOpen.value = false
            isProfessionalTabOpen.value = true
        }
        else {
            isProfessionalTabOpen.value = !isProfessionalTabOpen.value
        }
    }
    const toggleContactTab = () => {
        if (isPersonalInfoOpen.value) {
            isPersonalInfoOpen.value = false
            isContactOpen.value = true
        }
        else {
            isContactOpen.value = !isContactOpen.value
        }
    }
    const toggleFindMe = () => {
        isFindMeOpen.value = !isFindMeOpen.value
    }

    const closeAllTabsExcept = (tabToKeepOpen: Tab, tabs: Tab[]) => {
        tabs.forEach(tab => {
            if (tab !== tabToKeepOpen) {
                tab.value = false;
            }
        });
    };


    const toggleEducation = () => {
        isEducationOpen.value = !isEducationOpen.value;
        if (isEducationOpen.value) {
            closeAllTabsExcept(isEducationOpen, [isBioOpen, isInerestedOpen, isSkillsOpen, isExperienceOpen]);
        }
    };

    const toggleBio = () => {
        isBioOpen.value = !isBioOpen.value;
        if (isBioOpen.value) {
            closeAllTabsExcept(isBioOpen, [isEducationOpen, isInerestedOpen, isSkillsOpen, isExperienceOpen]);
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
        toggleSidebar,
        togglePersonalInfo,
        toggleFindMe,
        toggleEducation,
        toggleProfessionalTab,
        toggleBio,
        toggleContactTab,
        toggleInterested,
        toggleSkills,
        toggleExperience
    }
})