export default actions => state =>
    actions.some(action => state.loading[action]);
