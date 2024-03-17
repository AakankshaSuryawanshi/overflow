import * as api from '../api'

export const fetchAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllUsers()
        dispatch({ type: 'FETCH_USERS', Payload: data})
    } catch (error) {
        console.log(error)
    }
}