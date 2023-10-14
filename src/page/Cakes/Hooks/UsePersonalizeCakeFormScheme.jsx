import * as yup from "yup"

const usePersonalizeCakeFormFormScheme = () => {
    const formScheme = yup.object({
        recheio: yup.string().required('Campo obrigatório'),
        cobertura: yup.string().required('Campo obrigatório'),
        tamanho: yup.string().required('Campo obrigatório'),
        sabor: yup.string().required('Campo obrigatório'),

    }).required()

    return formScheme
}

export default usePersonalizeCakeFormFormScheme;