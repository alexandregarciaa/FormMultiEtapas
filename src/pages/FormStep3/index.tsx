import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const history = useNavigate();
    const { state, dispatch} = useForm();

    useEffect(()=> {
        if( state.name === '') {
            history('/');
        } else {
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            history('/step4')
        } else {
            alert("Preencher os dados");
        }
    }

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload:e.target.value
        });
    }
    const handleGithubChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload:e.target.value
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 3/4</p> 
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha seus dados para entrar em contato.</p>

                <hr/>
                <label>
                    Qual seu e-mail?
                    <input 
                        type='email'
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu github?
                    <input 
                        type='url'
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Pr??ximo</button>
            </C.Container>
        </Theme>
    );
}