import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";

describe("guessWord action dispatcher", ()=>{
    const secretWord = "party";
    const unsuccesfullGuess = "train";
    describe("no guessed word previously", ()=> {
        let store;
        const initialState = { secretWord };
        beforeEach(()=>{
            store = storeFactory(initialState)
        })
        test("updates state correctly for unsuccesfull guess", ()=>{
            store.dispatch(guessWord(unsuccesfullGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccesfullGuess,
                    letterMatchCount: 3
                }]
            };
            expect(newState).toEqual(expectedState);

        });
        test("updates state correctly for succesfull guess", ()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedState);
        });
    });
    describe("some guessed word previously", ()=> {
        const guessedWords = [{ guessWord: "agile", letterMatchCount: 1}];
        const initialState = { guessedWords, secretWord};
        let store;
        beforeEach(()=>{
            store = storeFactory(initialState)
        });
        test("updates state correctly for unsuccesfull guess", ()=>{
            store.dispatch(guessWord(unsuccesfullGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: unsuccesfullGuess, letterMatchCount: 3}
                ]
            };
            expect(newState).toEqual(expectedState);
        });
        test("updates state correctly for succesfull guess", ()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectesState = {
                secretWord, 
                success: true,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: secretWord, letterMatchCount: 5}
                ]
            };
            expect(newState).toEqual(expectesState);
        });
    });
});