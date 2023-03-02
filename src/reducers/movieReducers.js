import { FAVORI_ADD, FAVORI_DELETE } from "../actions/movieAction";

const initialFavMovies = {
  favoriMovies: JSON.parse(localStorage.getItem("favoriMovies")) || [],
};

export function reducer(state = initialFavMovies, action) {
  switch (action.type) {
    case FAVORI_ADD: {
      return {
        ...state,
        favoriMovies: [...state.favoriMovies, action.payload],
      };
    }
    case FAVORI_DELETE: {
      return {
        ...state,
        favoriMovies: state.favoriMovies.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}
