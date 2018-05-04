export const typeGenerator = (name, type) =>
    `${name !== "" ? `${name}/` : ""}${type}`;

export const actionHandlerGenerator = (name, actionHandler) =>
    Object.keys(actionHandler).reduce((result, key) => {
        const actionType = typeGenerator(name, key);
        result[actionType] = actionHandler[key];
        return result;
    }, {});

export const reducerGenerator = (
    name = "",
    defaultActionHandler,
    initialState
) => {
        const actionHandler = actionHandlerGenerator(name, defaultActionHandler);
        
        return (state = initialState, action) =>
            actionHandler[action.type]
                ? actionHandler[action.type](state, action)
                : state;
    };

export const actionCreatorGenerator = (name, actionCreators, params) =>
    Object.keys(actionCreators).reduce((result, key) => {
        result[key] = actionCreators[key](name, params);
        return result;
    }, {});
