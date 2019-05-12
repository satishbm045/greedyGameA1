
export const dataReducer = (userData = { 
        loading: false, 
        posts: null, 
        error: null 
    }, action) => {

    switch (action.type) {
        case "POST_LOADING": return {...userData, loading: true}
        case "POST_SUCCESS": return {...userData, loading: false, posts: action.data}
        case "POST_ERROR": return {...userData, loading: false, error: action.err}
        default: return userData;
    }

}
