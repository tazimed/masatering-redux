import { legacy_createStore as createtore } from "redux";

console.log("from index.js");

const BUY_CAKE = "BUY_CAKE";

function buycake() {
    return {
        type: BUY_CAKE,
        quantity: 1,
    };
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
        default:
            return state;
    }
}


const storeCake = createtore(reducerCake)

//2nd responsibility of store
// acces to the state via getState()
console.log("inital state ",storeCake.getState())


//3rd responsibility of store
// dispatch the state via dispatch(()=>{})

storeCake.dispatch(()=>{console.log("updated state",storeCake.getState())})


