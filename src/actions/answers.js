import { savePollAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_ANSWER = 'ADD_ANSWER';

const addAnswer = ({ authedUser, id, answer }) => {
    return {
        type: ADD_ANSWER,
        authedUser,
        id,
        answer
    }
};

export const handleAddAnswer = (answerData) => {
    return (dispatch) => {
        dispatch(showLoading());
        return savePollAnswer(answerData)
            .then(() => dispatch(addAnswer(answerData)))
            .then(() => dispatch(hideLoading()));
    }
};