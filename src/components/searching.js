export function initSearching(searchField) {
  return (query, state, action) => {
    // result заменили на query
    return state[searchField]
      ? Object.assign({}, query, {
          // проверяем, что в поле поиска было что-то введено
          search: state[searchField], // устанавливаем в query параметр
        })
      : query; // если поле с поиском пустое, просто возвращаем query без изменений
  };
}
