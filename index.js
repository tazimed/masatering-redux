import { legacy_createStore as createtore } from "redux";

console.log("from index.js");

const BUY_CAKE = "BUY_CAKE";
const RESTORE_CAKE = "RESTORE_CAKE";

function buycake() {
    return {
        type: BUY_CAKE,
        quantity: 1,
    };
}

function restoreCakes(Qty = 1){
    return{
        type:RESTORE_CAKE ,
        quantity : Qty
    }
    
}

const initialState = {
    nbrOfCakes: 10,
};

function reducerCake(state = initialState, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                nbrOfCakes: state.nbrOfCakes - 1, 
            };
        case RESTORE_CAKE :
            return{
                ...state,
                nbrOfCakes:state.nbrOfCakes+action.quantity
            }
        default:
            return state;
    }
}


const storeCake = createtore(reducerCake)

//2nd responsibility of store
// acces to the state via getState()
console.log("inital state ",storeCake.getState())

//3rd responsibility of store
// dispatch the state via subscribe(()=>{})

const unsubscribe = storeCake.subscribe(()=>{console.log("update state",storeCake.getState())})

//3rd responsibility of store
// dispatch the state via dispatch(function())

storeCake.dispatch(buycake());
storeCake.dispatch(buycake());
storeCake.dispatch(buycake());

//restoring 1 (the default value) cake 
storeCake.dispatch(restoreCakes());


//restoring 3 (the default value) cake 
storeCake.dispatch(restoreCakes(3));

unsubscribe();







