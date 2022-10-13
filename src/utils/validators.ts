//TODO: перенести в const.js
export enum InputType {
    login = 'login',
    password = 'password',
    name = 'name',
    email = 'email',
    phone = 'phone',
    message = 'message'
}

//TODO: Сделать более понятные ошибочки
const handleCheckLogin = (value: string) => (value.length < 3 || value.length > 20 || /^\d+$/.test(value) || !(/^[a-zA-Z1\d\-_]+$/.test(value)))

const handleCheckPassword = (value: string) => !(/^.{8,40}$/.test(value)) || !(/^.*[A-Z\d]+.*$/.test(value))

const handleCheckName = (value: string) => !(/^[а-яА-Я][a-zA-Z\-]*$/.test(value))

const handleCheckEmail = (value: string) => value.length < 1 || !(/^[\w\-]+@[\w\-]+\.[\w\-]+$/.test(value))

const handleCheckPhone = (value: string) => !(/^[+\d]\d{9,15}$/.test(value))

const handleCheckMessage = (value: string) => value.length < 1

const handleCheckInputType = {
    [InputType.login]: handleCheckLogin,
    [InputType.password]: handleCheckPassword,
    [InputType.name]: handleCheckName,
    [InputType.email]: handleCheckEmail,
    [InputType.phone]: handleCheckPhone,
    [InputType.message]: handleCheckMessage
}

const errorInputType = {
    [InputType.login]: 'Некорректный логин',
    [InputType.password]: 'Некорректный пароль',
    [InputType.name]: 'Некорректное написание ФИО',
    [InputType.email]: 'Некорректный email',
    [InputType.phone]: 'Некорректный телефон',
    [InputType.message]: 'Некорректное сообщение'
}

export function checkInputValue(type: InputType, value: string): string {
    if (handleCheckInputType?.[type]?.(value)) {
         return errorInputType[type]
    }

    //TODO: Убрать тектсовки в отдельный файл
    return ''
}
