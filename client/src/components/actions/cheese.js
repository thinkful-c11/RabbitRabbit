//fetchCheesesRequest, fetchCheesesSuccess and fetchCheesesError.
const FETCH_CHEESES_REQUEST='FETCH_CHEESES_REQUEST';
const fetchCheesesRequest=()=>({
  type:FETCH_CHEESES_REQUEST,
});
const FETCH_CHEESES_SUCCESS='FETCH_CHEESES_SUCCESS';
const fetchCheesesSuccess=cheese=>({
  type:FETCH_CHEESES_SUCCESS,
  cheese
});
const FETCH_CHEESES_ERROR='FETCH_CHEESES_ERROR';
const fetchCheesesError=error=>({
  type:FETCH_CHEESES_ERROR,
  error
});
export const fetchCheeses=()=>dispatch=>{
  dispatch(fetchCheesesRequest());
  fetch('/api/cheeses').then(res=>{
    if(!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(cheese=>{
    dispatch(fetchCheesesSuccess(cheese));
  }).catch(err=>{
    dispatch(fetchCheesesError(err));
  });
};
