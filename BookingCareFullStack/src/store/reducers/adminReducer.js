import actionTypes from '../actions/actionTypes';


const initialState = {
    genders:[],
    roles: [],
    position: [],
    users: [],
    topDoctors:[],
    allDoctors: [],
    allScheduleTime: [],
    allRequiredDoctorInfo: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START: 
        let copyState =  {...state}
            console.log('check fetch Gender Start: ', action)
            return {
                ...copyState
            }

        case actionTypes.FETCH_GENDER_SUCCESS: 
            state.genders = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_FAILED: 
            state.genders=[]
            return {
                ...state
            }

        case actionTypes.FETCH_POSITION_SUCCESS: 
            state.position = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_FAILED: 
            state.position=[]
            return {
                ...state
            }

        case actionTypes.FETCH_ROLE_SUCCESS: 
            state.roles = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAILED: 
            state.roles=[]
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS: 
            state.users= action.users;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_FAILED: 
            state.users=[]
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTOR_SUCCESS: 
            state.topDoctors= action.dataDoctors;
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTOR_FAILED: 
            state.topDoctors=[];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DOCTOR_SUCCESS: 
            state.allDoctors= action.dataDr;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DOCTOR_FAILED: 
            state.allDoctors=[];
            return {
                ...state
            }

        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS: 
            state.allScheduleTime = action.dataTime;
            return {
                ...state
            }
        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED: 
            state.allScheduleTime=[];
            return {
                ...state
            }
        case actionTypes.FETCH_REQUIRED_DOCTOR_INFO_SUCCESS: 
            state.allRequiredDoctorInfo = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_REQUIRED_DOCTOR_INFO_FAILED: 
            state.allRequiredDoctorInfo=[];
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;