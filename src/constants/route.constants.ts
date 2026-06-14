export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    PRODUCT_LIST: '/products',
    PRODUCT_DETAIL: '/products/:id',
    PRODUCT_ADD: '/products/add',
}


export const PAGES = [
    {
        name: 'Home',
        URL: ROUTES.HOME,
    },
    {
        name: 'Login',
        URL: ROUTES.LOGIN,
    },
    {
        name: 'Products',
        URL: ROUTES.PRODUCT_LIST,
    }
    ,
    {
        name: 'Add product',
        URL: ROUTES.PRODUCT_ADD,
    }
]