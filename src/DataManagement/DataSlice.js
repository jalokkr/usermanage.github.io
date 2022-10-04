import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: [
        {
            userName: 'Aditya',
            registerDate: '4-10-2022',
            status: false
        }, 
        {
            userName: 'Alok',
            registerDate: '4-10-2022',
            status: false
        },
        {
            userName: 'Rohit',
            registerDate: '4-10-2022',
            status: false
        },
        {
            userName: 'Vishal',
            registerDate: '4-10-2022',
            status: false
        },
        {
            userName: 'Vijay',
            registerDate: '4-10-2022',
            status: false
        },
    ],
    reducers: {
        changeStatus(state, actions) {
            state[actions.payload].status = !state[actions.payload].status;
        },
        addUser(state, actions) {
            state.push(actions.payload);
        },
        deleteUser(state, actions) {
            return [...state.slice(0, actions.payload), ...state.slice(actions.payload + 1)];
        }
    }
})

export const { changeStatus, addUser, deleteUser } = dataSlice.actions;
export default dataSlice.reducer;