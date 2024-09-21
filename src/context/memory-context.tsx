import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

export type Player = {
    score: number,
    id: number
}

export type Players = Array<Player>

export type GameActive = boolean;

export type GameState = {
    theme : "Numbers" | "Icons",
    numPlayers: number,
    players: Players,
    gridSize: number,
    gameState: "initialising" | "active" | "finish",
    turn: number,
    openedMemoryCards: Array<string>,
    moves: number,
    time: number,
    modalOpen: boolean
}


export type MemoryContextProviderProps = {
    children: ReactNode
}

export type Action = 
    {type: "SET_THEME", payload: "Numbers" | "Icons" } |
    {type: "SET_NUM_PLAYERS", payload: number} |
    {type: "SET_GRIDSIZE", payload: number} |
    {type: "START_GAME"} |
    {type: "SET_SCORE_PLAYER", payload: number} |
    {type: "PUSH_TO_OPENED_CARDS", payload: string} |
    {type: "NEXT_TURN"} |
    {type: "FINISH_GAME"} |
    {type: "RESTART"} |
    {type: "NEW_GAME"} |
    {type: "INCEARSE_MOVES"} |
    {type: "INCREASE_TIME"} |
    {type: "OPEN_CLOSE_MODAL"}
    


export type MemoryContextValue = GameState & {dispatch: Dispatch<Action>}

const initialState : GameState = {
    theme: "Numbers",
    numPlayers: 1,
    players: [{
        id: 1,
        score: 0, 
    }],
    gridSize: 4,
    gameState: "initialising",
    turn: 1,
    openedMemoryCards: [],
    moves: 0,
    time: 0,
    modalOpen: false
}

export const MemoryContext = createContext<MemoryContextValue | null>(null);

function memoryReducer(state: GameState, action: Action): GameState{

    switch(action.type){
        case "SET_THEME":
            return {
                ...state, theme: action.payload
            }
        case "SET_NUM_PLAYERS":
            return {
                ...state, numPlayers: action.payload,
                players: Array.from({length: action.payload}, (_, i) => ({
                    id: i + 1,
                    score: 0,
                    isTurn: false
                }))
            }
        case "SET_GRIDSIZE":
            return {
                ...state, gridSize: action.payload
            }
        case "START_GAME":
            return {
                ...state, gameState: "active"
            }
        case "SET_SCORE_PLAYER":
            return {
                ...state, 
                players: state.players.map((player) => {
                    if(player.id === action.payload){
                        return {...player, score : player.score + 1}
                    } else {
                        return player
                    }
                })   
            }
        case "PUSH_TO_OPENED_CARDS":
            return {
                ...state,
                openedMemoryCards: [...state.openedMemoryCards, action.payload]
            }
        case "NEXT_TURN":
            if(state.numPlayers !== 1){
                return {
                    ...state, 
                    turn: state.turn === state.numPlayers ? 1 : state.turn + 1
                }
            }
            else {
                return state
            }
        case "FINISH_GAME":
            return {
                ...state,
                gameState: "finish"
            }
        
        case "RESTART":
            return {
                ...state,
                players: state.players.map((player) => {
                    return {...player, score: 0}
                }),
                openedMemoryCards: [],
                gameState: "active"
            }
        case "NEW_GAME":
            return  initialState;
        
        case "INCEARSE_MOVES":
            return {
                ...state,
                moves: state.moves + 1
            }
        case "INCREASE_TIME":
            return {
                ...state,
                time: state.time + 1
            }
        case "OPEN_CLOSE_MODAL":
            return {
                ...state,
                modalOpen: !state.modalOpen
            }       
        default:
            return state;
    }

}

export default function MemoryContextProvider({children}: MemoryContextProviderProps){

    const [{ theme, numPlayers, gridSize, 
        gameState, players, turn, openedMemoryCards, moves, time, modalOpen}, dispatch] = useReducer(memoryReducer, initialState);

    const context : MemoryContextValue = {
        theme,
        numPlayers,
        players,
        gridSize,
        gameState,
        turn,
        openedMemoryCards,
        dispatch,
        moves,
        time,
        modalOpen
    }

    return (
        <MemoryContext.Provider value={context}>
            {children}
        </MemoryContext.Provider>
    )
    
}

export function useMemoryContext(){
    const context = useContext(MemoryContext);
    if(context === undefined){
        throw new Error("MemoryContext was used outside the MemoryProvider")
    }
    if(context === null){
        throw new Error("Something went wrong")
    }
    return context;

}