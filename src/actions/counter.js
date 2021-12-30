import { counter as counterTypes } from '../constants/actionTypes';


export const incrementarContador = () => async(dispatch) => {
    console.log('Entrando a inrementar dispatch');
    dispatch({
        type: counterTypes.INCREMENTAR
    })
}

export const decrementarContador = () => async(dispatch) => {
    console.log('Entrando a inrementar dispatch');
     dispatch({
        type: counterTypes.DECREMENTAR
    })
}

export default {
    incrementarContador,
    decrementarContador
}