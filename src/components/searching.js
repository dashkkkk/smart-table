import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // #5.1 — Настройка компаратора для поиска
    const compare = createComparison({
        skipEmptyTargetValues: true
    }, [
        rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)
    ]);

    return (data, state, action) => {
        // #5.2 — Применение поиска
        if (!state[searchField]) return data; 
        
        return data.filter(row => {
            return compare(row, state[searchField]);
        });
    };
}