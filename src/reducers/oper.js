const operReducerDefaultState = {
  pre: "",
  now: "",
  add: "",
  trigger: false
};
const operReducer = (state = operReducerDefaultState, action) => {
  let result, evalResult, need, trigger;
  switch (action.type) {
    case "NORMAL_NUMBER":
      if (state.trigger === false) {
        result = state.now + action.oper.add;
        need = { now: result };
        return { ...state, ...need };
      } else {
        trigger = false;
        result = action.oper.add;
        need = { now: result, trigger };
        return { ...state, ...need };
      }
    case "NORMAL_SIGN":
      if (state.trigger === false) {
        result = state.now + action.oper.add;
        need = { now: result };
        return { ...state, ...need };
      } else {
        trigger = false;
        result = state.now + action.oper.add;
        need = { now: result, trigger };
        return { ...state, ...need };
      }
    case "EQUAL":
      evalResult = eval(state.now);
      trigger = true;
      need = { pre: state.now + "=", now: evalResult, trigger };

      return { ...state, ...need };
    case "CLEAR":
      return { ...operReducerDefaultState };
    default:
      return state;
  }
};

export default operReducer;
