import { storeObj } from '../../index';

export function UpdateUsername(newUsername){
   
    storeObj.dispatch({
        type: 'UpdateUsername',
        payload: {
            username: newUsername
        }
    });
}

export function UpdatePassword(newPassword){
   
    storeObj.dispatch({
        type: 'UpdatePassword',
        payload: {
            password: newPassword
        }
    });
}

export function UpdateUserAndPassword(user,pass){
   
    storeObj.dispatch({
        type: 'UpdateUserAndPassword',
        payload: {
            password: pass,
            username: user
        }
    });
}

export function ClearLoginInfo(){
   
    storeObj.dispatch({
        type: 'UpdateUserAndPassword',
        payload: {
            password: '',
            username: ''
        }
    });
}