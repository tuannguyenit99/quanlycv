var initallState =false;
    





var Reducer =(state =initallState, action) => {
    if(action.type==='TOGGLE_STATUS')
    {
        state =!state ;
    }
    
   



    return state ;
}
export default  Reducer;