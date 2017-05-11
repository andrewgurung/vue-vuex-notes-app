// Actions are functions called by components to dispatch mutations
// Actions receive the store as the first argument 

// Mutations MUST be synchronous
// To make AJAX request, we use 'actions' that are asynchronous by nature
/*
export const addNote = function (store) {
    var dispatch = store.dispatch
    dispatch('ADD_NOTE')
}
*/

export const addNote = ({ dispatch }) => {
  dispatch('ADD_NOTE')
}


// Shorthand using ES2015 argument destructuring
export const editNote = ({ dispatch }, e) => {
    dispatch('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ dispatch }) => {
    dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
    dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}