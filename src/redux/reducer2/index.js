var initialState = {
    appTitle: 'first react webpage, by mcy'
};

export default function reducer1(state = initialState, action){
    switch(action.type){
        case 'UpdateTitle':
            return Object.assign({},state,{appTitle: action.payload.appTitle});
      
    default:
        return state;    
    }
}