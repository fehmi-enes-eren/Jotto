import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("return false when the previous state is undefined", ()=>{
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test("return previous state when the action type is unkown", ()=>{
    const newState = successReducer(false, {type: "unkown"});
    expect(newState).toBe(false);  
});

test("return true for action type 'CORRECT_GUESS'",()=>{
    const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});