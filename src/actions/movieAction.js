export const FAVORI_ADD = "FAVORI_ADD";
export const FAVORI_DELETE = "FAVORI_DELETE";

export const favoriAdd = (Favs) => ({
  type: FAVORI_ADD,
  payload: Favs,
});

export const favoriDelete = (id) => ({
  type: FAVORI_DELETE,
  payload: id,
});
