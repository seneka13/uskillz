import { CHANGE_FIELDS, CLEAR_FIELDS } from "../constantsType";

const initialState = {
  login: {
    email: "",
    password: "",
  },
  signup: {
    username: "",
    email: "",
    password: "",
  },
  reset: {
    email: "",
    newPass: "",
    newPassConfirm: "",
  },
  university: {
    university: "",
    degree: "",
    startDate: 0,
    endDate: 0,
  },
  pilotOrganization: {
    organization: "",
    team: "",
    startDate: 0,
    endDate: 0,
  },

  accountDetail: {
    username: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  },

  diversityData: {
    gender: "",
    ethnicity: "",
    sexual: "",
    birthday: "",
  },

  skillsSearch: {
    softSkills: "",
    hardSkills: "",
  },

  addExperiences: {
    expName: "",
    cvSummary: "",
    company: "",
    industry: "",
    expType: "",
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    softSkills: "",
    selectedSoftSkills: [],
    selectNeedSoftSkill: [],
    hardSkills: "",
    selectedHardSkills: [],
    selectNeedHardSkill: [],
    result: "",
    whatIDid: "",
    extraComments: "",
  },

  editExperiences: {
    updateUrl: "",
    expName: "",
    cvSummary: "",
    company: "",
    industry: "",
    expType: "",
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    softSkills: "",
    selectedSoftSkills: [],
    selectNeedSoftSkill: [],
    hardSkills: "",
    selectedHardSkills: [],
    selectNeedHardSkill: [],
    result: "",
    whatIDid: "",
    extraComments: "",
  },
  organisationTeams: {
    teamName: "",
    teamSelect: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELDS:
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [action.fieldName]: action.value,
        },
      };
    case CLEAR_FIELDS:
      return {
        ...state,
        login: initialState.login,
        signup: initialState.signup,
        university: initialState.university,
        accountDetail: {
          ...state.accountDetail,
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        },
        addExperiences: initialState.addExperiences,
      };
    default:
      return state;
  }
};

export default reducer;
