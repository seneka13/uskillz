const routes = {
  index: {
    landing: "/",
    privacy: "/privacy",
    aboutUs: "/about-us",
    termsOfService: "/terms-of-service",
    loading: "/loading",
    AddToHomeScreen: "/add-to-homescreen",
  },
  api: {
    auth: "/auth",
    logIn: "/auth/login",
    signUp: "/auth/signup",
    check: "/auth/check",
    resetPass: "/auth/reset-password",
    resetPassConfirm: "/auth/reset-password-confirm",
  },
  skillz: {
    skillzPage: "/skillz",
    onboarding: "/skillz/onboarding",
    mySkillsProfile: "/skillz/my-skills-profile",
    profile: "/skillz/profile",
    goals: "/skillz/goals",
    experiences: "/skillz/experiences",
    createExperiences: "/skillz/create-experiences",
    addCompany: "/skillz/add-company",
    experienceDetail: "/skillz/experience-detail",
    changeExperience: "/skillz/experience-edit",
    editSoftSkill: "/skillz/edit-soft-skill",
    editHardSkill: "/skillz/edit-hard-skill",
    editCompany: "/skillz/edit-company",
    addSkillYouNeed: "/skillz/add-skill-you-need",
  },
  dashboard: {
    dasboardPage: "/dashboard",
    organisation: "/dashboard/organisation",
    skills: "/dashboard/skills",
    experiences: "/dashboard/experiences",
    goals: "/dashboard/goals",
  },
};

export default routes;
