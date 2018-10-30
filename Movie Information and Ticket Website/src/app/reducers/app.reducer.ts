export function productsList(state = [], {type, payload}) {
  switch (type) {
        case 'LOAD_SUCCEEDED':
            return [...state, type];
        case 'SEARCH_productsS': 
            return [...state, type];
        case 'FILTER_productsS':
            return [...state, type];
        case 'SEE_A_products':
            return [...state, type];
        default: 
            return state;
    }
}
