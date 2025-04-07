import { useMutation } from "@tanstack/react-query"
import { handleLogin, handleRegister } from "../api/api-handlers/auth-handler"


export const useLogin = () => {
    return useMutation({
        mutationFn: handleLogin, onMutate: () => { },
        onSuccess: (data, variable, context) => {
            console.log("data from login", JSON.stringify(data, null, 3))
        },
        onError: () => { }
    })
}

export const useRegister = () => {
    return useMutation({
        mutationFn: handleRegister, onMutate: () => { },
        onSuccess: (data, variable, context) => {
            console.log("data from register", JSON.stringify(data, null, 3))
        },
        onError: () => { }
    })
}