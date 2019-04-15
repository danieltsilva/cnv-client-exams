import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import questionsReducer from './questionsReducer';

export default combineReducers({
  form: formReducer,
  questions: questionsReducer
});
