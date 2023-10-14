import * as yup from "yup"

const useAuthFormScheme = () => {
    const formScheme = yup.object({
        login: yup.string().required('Campo é obrigatório'),
        password: yup.string().required('Campo é obrigatório').min(5, 'Senha deve conter no mínimo 5 caracteres')
    }).required()

    return formScheme
}

export default useAuthFormScheme;
