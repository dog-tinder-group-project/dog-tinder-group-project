import axios from 'axios';

const initialState = {
    user: {},
    messages: [],
    matches: [],
    dog: {},
    dogsToDisplay: []
}

const GET_USER = 'GET_USER';
const GET_MESSAGES = 'GET_MESSAGES';
const UPDATE_MESSAGES = 'UPDATE_MESSAGES';
const SUBMIT_NEW_DOG = 'SUBMIT_NEW_DOG';
const ADD_PROFILE_IMAGE = 'ADD_PROFILE_IMAGE';
const ADD_IMAGE = 'ADD_IMAGE';
const SUBMIT_DESCRIPTION = 'SUBMIT_DESCRIPTION';
const UPDATE_RADIUS = 'UPDATE_RADIUS';
const GET_DOG = 'GET_DOG';
const UPDATE_AGE = 'UPDATE_AGE';
const UPDATE_INTERESTED_IN = 'UPDATE_INTERESTED_IN';
const UPDATE_REASON = 'UPDATE_REASON';
const UPDATE_RANGE = 'UPDATE_RANGE';

export function getUser(user) {
    console.log(user)
    return {
        type: GET_USER,
        payload: user
    }
}

export function getMessages(userOne, userTwo) {
    const messages = axios.get(`/api/messages/${userOne}/${userTwo}`).then(res => {
        return res.data;
    })

    return {
        type: GET_MESSAGES,
        payload: messages
    }
}

export function updateMessages(updatedMessages) {
    return {
        type: UPDATE_MESSAGES,
        payload: updatedMessages
    }
}

export function submitNewDog(obj) {
    const dog = axios.post('/api/submitNewDog', obj).then(res => {
        return res.data[0]
    })

    return {
        type: SUBMIT_NEW_DOG,
        payload: dog
    }
}

export function addProfileImage(id, url, location) {
    const dog = axios.put(`/api/profileImage/${id}`, { url, location }).then(res => {
        return res.data[0]
    })

    return {
        type: ADD_PROFILE_IMAGE,
        payload: dog
    }
}

export function addImage(id, number, url) {
    const dog = axios.put(`/api/image/${id}`, { number, url }).then(res => {
        return res.data[0]
    })

    return {
        type: ADD_IMAGE,
        payload: dog
    }
}

export function submitDescription(id, desc) {
    const dog = axios.put(`/api/description/${id}`, { desc }).then(res => {
        return res.data[0]
    })

    return {
        type: SUBMIT_DESCRIPTION,
        payload: dog
    }
}

export function updateRadius(id, radius) {
    const dog = axios.put(`/api/updateRadius/${id}`, { radius }).then(res => {
        return res.data[0]
    })

    return {
        type: UPDATE_RADIUS,
        payload: dog
    }
}

export function getDog(dog) {
    console.log(dog)
    return {
        type: GET_DOG,
        payload: dog
    }
}

export function updateRange(id, range) {
    const dog = axios.put(`/api/updateRange/${id}`, { range }).then(res => {
        return res.data[0]
    })

    return {
        type: UPDATE_RANGE,
        payload: dog
    }
}

export function updateInterestedIn(id, selectedType) {
    const dog = axios.put(`/api/updateInterestedIn/${id}`, { selectedType }).then(res => {
        return res.data[0]
    })

    return {
        type: UPDATE_INTERESTED_IN,
        payload: dog
    }
}

export function updateReason(id, reason) {
    const dog = axios.put(`/api/updateReason/${id}`, { reason }).then(res => {
        return res.data[0]
    })

    return {
        type: UPDATE_REASON,
        payload: dog
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES + '_FULFILLED':
            return Object.assign({}, state, { messages: action.payload });
        case SUBMIT_NEW_DOG + '_FULFILLED':
            return Object.assign({}, state, { dog: action.payload });
        case ADD_PROFILE_IMAGE + '_FULFILLED':
            return Object.assign({}, state, { dog: action.payload });
        case ADD_IMAGE + '_FULFILLED':
            return Object.assign({}, state, { dog: action.payload });
        case SUBMIT_DESCRIPTION + '_FULFILLED':
            return Object.assign({}, state, { dog: action.payload });
        case UPDATE_RADIUS + '_FULFILLED':
            return Object.assign({}, state, { dog: action.payload });
        case UPDATE_RANGE + '_FULFILLED':
            return Object.assign({}, state, { dog: action.payload });
        case UPDATE_REASON + '_FULFILLED':
            return Object.assign({}, state, { dog: action.payload });
        case UPDATE_MESSAGES:
            return Object.assign({}, state, { messages: action.payload });
        case GET_USER:
            return Object.assign({}, state, { user: action.payload });
        case GET_DOG:
            return Object.assign({}, state, { dog: action.payload });
        default:
        return state;
    }
}