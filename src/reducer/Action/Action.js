import axios from 'axios';

const postLoading = () => {
    return {
        type: "POST_LOADING"
    }
}

const postSuccess = (data) => {
    return {
        type: "POST_SUCCESS",
        data: data
    }
}

const postError = (err) => {
    return {
        type: "POST_ERROR",
        err: err
    }
}

export const GetData = () => {
    return (dispatch) => {
        dispatch(postLoading())
        axios.get('http://www.mocky.io/v2/5cd04a20320000442200fc10')
        .then((response) => {
            dispatch(postSuccess(response.data))
        })
        .catch((err) => {
            dispatch(postError(err))
        })
    }
}