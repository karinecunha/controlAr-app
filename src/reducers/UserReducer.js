export const initialState = {
    id: '',
    type: '',
    name: '',
    email: ''
};

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setInfoUser': 
            return { ...state, id: action.payload.id, type: action.payload.type, name: action.payload.name, email: action.payload.email};
        break;
        default:
            return state;
    }
}