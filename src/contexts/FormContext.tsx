//Context, Reducer, Provider, Hook  
import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number,
    name:string,
    level:0 | 1,
    email:string,
    github:string
}
type Action = {
    type: FormActions;
    payload: any;
}
type ContextType = {
    state: State;
    dispatch:(action:Action) => void;
}
type FormProviderProps = {
    children: ReactNode
}
export const InitialDate: State = {
    currentStep: 0,
    name:'',
    level:0,
    email:'',
    github:''
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer 
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGitHub,
    setReset
}

const FormReducer = (state: State, action:Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return{...state, email: action.payload};
        case FormActions.setGitHub:
            return{...state, github: action.payload}; 
        case FormActions.setReset:
            let cloneState= {...state};
            cloneState=action.payload;
            return cloneState;
        default:
            return state;                  
    }
}

//Provider  
export const FormProvider = ({children}:FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, InitialDate);
    const value = { state, dispatch };

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

//Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
       throw new Error('useForm precisa ser usado dentro do FormProvider'); 
    }
    return context;
}