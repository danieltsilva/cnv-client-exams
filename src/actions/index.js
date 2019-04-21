import framework from '../apis/framework';
import history from '../history';
import {
    CREATE_QUESTION,
    FETCH_QUESTIONS,
    FETCH_QUESTION,
    DELETE_QUESTION,
    EDIT_QUESTION,
} from './types';

export const createQuestion = formValues => async (dispatch) => { //TODO , getState 
    //const { userId } = getState().auth;
    const response = await framework.post('/api/question', { ...formValues }); //TODO Add UserId with login

    dispatch({ type: CREATE_QUESTION, payload: response.data });
    history.push('/');
};

export const fetchQuestions = () => async dispatch => {
    const response = await framework.get('/api/questions');

    dispatch({ type: FETCH_QUESTIONS, payload: response.data });
};

export const fetchQuestion = id => async dispatch => {
    const response = await framework.get(`/api/question/${id}`);

    dispatch({ type: FETCH_QUESTION, payload: response.data });
};