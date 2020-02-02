export const APP_ROUTES = {
    rxjs: { name: 'RXJS', url: 'rxjs' },
    rxjs2: { name: 'RXJS2', url: 'rxjs2' },
    rxjs3: { name: 'RXJS3', url: 'rxjs3' },
}

export const APP_ROUTES_TO_SIDEBAR = [
    { name: APP_ROUTES.rxjs.name, url: '/' + APP_ROUTES.rxjs.url },
    { name: APP_ROUTES.rxjs2.name, url: '/' + APP_ROUTES.rxjs2.url },
    { name: APP_ROUTES.rxjs3.name, url: '/' + APP_ROUTES.rxjs3.url }
]