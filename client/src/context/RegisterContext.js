import {createContext} from 'react'

function noop(){}
export const RegisterContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isRegistered: false
})

