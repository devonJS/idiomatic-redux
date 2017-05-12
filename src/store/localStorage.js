export const loadState = () => {
  // getItem method can fail, use try catch statement
  try {
    const localState = localStorage.getItem('state');
    if(localState === null) return undefined;
    
    return JSON.parse(localState)
  } catch(err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const saveState = JSON.stringify(state);
    localStorage.setItem('state', saveState);
  } catch(err) {
    console.log(err);
  }
}