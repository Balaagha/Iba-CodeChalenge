// ACTION TYPES
const SET_TRANSACTIONS_DATA = "SET_TRANSACTIONS_DATA";

export const MODULE_NAME = "transactions";
export const getTransactionsAll = (state) => state[MODULE_NAME].data;

// REDUCER
const initialState = { data:[
    {id:`${Math.random()}${Date.now()}`,name:'Ali Aliyev',image:'img1',count:1001,transactionDetail:{date:"1596096049789",type:'Debt',payMethod:'Credit'}},
    {id:`${Math.random()}${Date.now()}`,name:'Sara Aliyeva',image:'img1',count:1200,transactionDetail:{date:"1596096049789",type:'Debt',payMethod:'Credit'}},
    {id:`${Math.random()}${Date.now()}`,name:'Ada LoveLace',image:'img1',count:1300,transactionDetail:{date:"1596096049789",type:'Debt',payMethod:'Credit'}},
    {id:`${Math.random()}${Date.now()}`,name:'Mark Hopper',image:'img1',count:720,transactionDetail:{date:"1596096049789",type:'Debt',payMethod:'Credit'}},
    {id:`${Math.random()}${Date.now()}`,name:'Margaret Hamelton',image:'img1',count:420,transactionDetail:{date:"1596096049789",type:'Debt',payMethod:'Credit'}},
] };
export function reducer(state=initialState,{type,payload}){
    switch(type){
        case SET_TRANSACTIONS_DATA:
            return {...state,...payload};
        default: return state;
    }
}

//ACTION CREATOR
export const setTransactionsData = payload => ({type:SET_TRANSACTIONS_DATA,payload});

//MIDLEWARE

