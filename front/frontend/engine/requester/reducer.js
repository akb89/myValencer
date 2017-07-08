import Messages from './messages';

function reducer(state, action) {
    const type = action.type;
    const entity = action.entity;
    switch (type) {
    case Messages.REQUESTING:
        return { isLoading: true, entity, type };
    case Messages.REQUEST_GET_SUCCESS:
        return { isLoading: false,
            entity,
            type,
            objects: action.response,
        };
    case Messages.REQUEST_SUCCESS:
        return { isLoading: false,
            entity,
            type,
            message: action.response,
        };
    case Messages.REQUEST_FAILED:
        return { isLoading: false,
            entity,
            type,
            error: action.response,
        };
    default:
        return state;
    }
}

export default reducer;
