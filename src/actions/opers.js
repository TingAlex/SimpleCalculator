export const normalNumberPress = (
  pre = "",
  now = "",
  add = "",
  trigger = false
) => ({
  type: "NORMAL_NUMBER",
  oper: {
    pre,
    now,
    add,
    trigger
  }
});

export const normalSignPress = (
  pre = "",
  now = "",
  add = "",
  trigger = false
) => ({
  type: "NORMAL_SIGN",
  oper: {
    pre,
    now,
    add,
    trigger
  }
});

export const equalPress = (
  pre = "",
  now = "",
  add = "",
  trigger = false
) => ({
  type: "EQUAL",
  oper: {
    pre,
    now,
    add,
    trigger
  }
});

export const clearPress = (
  pre = "",
  now = "",
  add = "",
  trigger = false
) => ({
  type: "CLEAR",
  oper: {
    pre,
    now,
    add,
    trigger
  }
});
