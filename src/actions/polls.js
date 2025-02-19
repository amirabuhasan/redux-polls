import { savePoll } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

const addPoll = (poll) => {
    return {
        type: ADD_POLL,
        poll,
    }
};

export const handleAddPoll = (poll) => {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return savePoll({
            ...poll,
            author: authedUser
        })
            .then(poll => dispatch(addPoll(poll)))
            .then(() => dispatch(hideLoading()))
    }
};

export const receivePolls = (polls) => {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
};