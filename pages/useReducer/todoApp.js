import React, { useReducer } from 'react'

// useReducer
// 1. init state
// 2. actions
// 3. reducer
// 4. dispatch

// init state
const initState = {
    job: '',
    jobs: []
}

// action
const SET_JOB = 'set_Job'
const ADD_JOB = 'add_Job'
const DELETE_JOB = 'delete_Job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    console.log(payload);
    return {
        type: DELETE_JOB,
        payload
    }
}
// reducer
const reducer = (state, action) => {

    // console.log(action);
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
            }
        case ADD_JOB:
            return {
                ...state,

                jobs: [...state.jobs, action.payload],
            }
        case DELETE_JOB:
            const newJob = [...state.jobs]
            newJob.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJob,
            }
        default:
            break;
    }
}

const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
    }
    // console.log(job);
    return (
        <div>
            <h3>todo</h3>
            <input value={job}
                onChange={e => dispatch(setJob(e.target.value))} />
            <button onClick={() => handleSubmit()}>add</button>
            <h3>danh sach</h3>
            <ul>
                {jobs.map((job, index) => {
                    return <li key={index}>{job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span></li>
                })}
            </ul>
        </div>
    )
}

export default TodoApp