var initialState = {
    username: 'defaultUsername',
    password: 'defaultPassword'
};

export default function reducer1(state = initialState, action){
    switch(action.type){
        case 'UpdateUsername':
            return Object.assign({},state,{username: action.payload.username});
        case 'UpdatePassword':
            return Object.assign({},state,{password: action.payload.password});
        case 'UpdateUserAndPassword':
            return Object.assign({},state,{
                password: action.payload.password,
                username: action.payload.username

            });
        case 'ClearLoginInfo':
            return Object.assign({},state,{
                password: '',
                username: ''
            });
    default:
        return state;    
    }
}