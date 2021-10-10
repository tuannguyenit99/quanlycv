var initallState ={
    by : 'name',
    value : 1
}

var Reducer =(state =initallState, action) => {
  
    if(action.type==='SORT')
    {
        var {by,value} =action.sort;
       

         return {
            
                 by ,
                 value
             
         }
    }



    return state ;
}
export default  Reducer;