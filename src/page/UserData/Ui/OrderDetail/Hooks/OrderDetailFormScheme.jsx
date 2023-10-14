import * as yup from "yup"

const orderDetailFormScheme = () => {
    const addressScheme = yup.object({
        street: yup.string().required('Campo obrigatório'),
        number: yup.string().required('Campo obrigatório'),
        neighborhood: yup.string().required('Campo obrigatório'),
        city: yup.string().required('Campo obrigatório'),
        state: yup.string().required('Campo obrigatório'),
        zip: yup.string().required('Campo obrigatório'),
    }).required()

    const formScheme = yup.object({
        id: yup.string().required(),
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
        password: yup.string().required('Campo obrigatório').min(5, 'Senha deve conter no mínimo 5 caracteres'),
        phone: yup.string().required('Campo obrigatório'),
        addressList: addressScheme,
    }).required()

    return formScheme
}

export default orderDetailFormScheme;