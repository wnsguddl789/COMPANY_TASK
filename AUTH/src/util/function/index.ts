export const isUndefined = (target: any) => {
  if (
    typeof target === undefined ||
    typeof target === 'undefined' ||
    target === 'undefined' ||
    target === undefined
  )
    return true;
  else return false;
};

export const saveSessionStorage = (target: any) => {
  if (sessionStorage.getItem(`${target}`)) {
    return;
  } else {
    sessionStorage.setItem(`${target}`, target);
  }
};
