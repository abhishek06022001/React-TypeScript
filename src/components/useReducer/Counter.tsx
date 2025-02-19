import { useReducer } from "react";

const initialState = { count: 0 };
type CounterState = {
    count: number
}
// only define the structure 
type ActionState = {
    type: 'increment' | 'decrement' | 'reset', payload?: number
}
type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}
type ResetAction = {
    type: 'reset',

}
type CounterAction = ResetAction | UpdateAction;
function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Count: {state.count}
            <button
                onClick={() => dispatch({ type: 'increment', payload: 10 })}
            >
                Increment
            </button>
            <button
                onClick={() => dispatch({ type: 'decrement', payload: 10 })}
            >
                Decrement
            </button>
            <button
                onClick={() => dispatch({ type: 'reset' })}
            >
                reset
            </button>
        </div>
    )
}

export default Counter