let INITIAL_STATE={
dataList:[]
}
export default (state=INITIAL_STATE,action) => {
  switch(action.type){
          case 'LOAD_FIREBASE_DATA':
            return {...state,
              dataList:action.payload
            }
      default:
        return state;
  }
}
