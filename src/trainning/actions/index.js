 import * as types  from '../constains/actiontype';
 


export const status =() => {
    return {
        type : types.TOGGLE_STATUS
    }
}
export const sort =(sort) =>{
    return {
        type: types.SORT,
        sort
    }
}