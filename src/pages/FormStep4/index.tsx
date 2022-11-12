import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions, InitialDate } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep4 = () => {
    const history = useNavigate();
    const { state, dispatch} = useForm();

    useEffect(()=> {
        if( state.name === "") {
            history('/');
        } else {
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '' || state.email === '' || state.github === '') {
            console.log(state);
            alert("Cadastro efetuado com sucesso!");
            dispatch({
                type: FormActions.setReset,
                payload: InitialDate
            });
            history('/');
        } 
    }

    const setLevel = (level:number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 4/4</p> 
                <h1>Quase pronto {state.name}.</h1>
                <p>Verifique se seus dados estão preenchidos corretamente.</p>

                <hr/>

                <SelectOption
                    title={state.level === 0 ? "Sou iniciante" : "Sou Programador"}
                    description={state.level === 0 ? "Comecei a programar há menos de 2 anos" : "Já programo há 2 anos ou mais"}
                    icon={state.level === 0 ? "🥳" : "😎"}
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <div className='Info-area'>
                    <div className='Info-name'>E-mail:</div>
                    <div className='Info-content'>{state.email}</div>
                </div>
                <div className='Info-area'>
                    <div className='Info-name'>Git-Hub</div>
                    <div className='Info-content'>{state.github}</div>
                </div>

                <Link to="/step3" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}