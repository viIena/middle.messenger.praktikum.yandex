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
const handleCheckLogin = (value: string) => {
    if (value.length < 3 || value.length > 20 || /^\d+$/.test(value)
    || !(/^[a-zA-Z1\d\-_]+$/.test(value))) {
        return 'Некорректный логин'
    }
}

const handleCheckPassword = (value: string) => {
    if (!(/^.{8,40}$/.test(value)) || !(/^.*[A-Z\d]+.*$/.test(value))) {
        return 'Некорректный пароль'
    }
}

const handleCheckName = (value: string) => {
    if (!(/^[а-яА-Я][a-zA-Z\-]*$/.test(value))) {
        return 'Некорректное написание ФИО'
    }
}

const handleCheckEmail = (value: string) => {
    if (value.length < 1 || !(/^[\w\-]+@[\w\-]+\.[\w\-]+$/.test(value))) {
        return 'Некорректный email'
    }
}

const handleCheckPhone = (value: string) => {
    if (!(/^[+\d]\d{9,15}$/.test(value))) {
        return 'Некорректный телефон'
    }
}

const handleCheckMessage = (value: string) => {
    if (value.length < 1) {
        return 'Некорректное сообщение'
    }
}

const handleCheckInputType = {
    [InputType.login]: handleCheckLogin,
    [InputType.password]: handleCheckPassword,
    [InputType.name]: handleCheckName,
    [InputType.email]: handleCheckEmail,
    [InputType.phone]: handleCheckPhone,
    [InputType.message]: handleCheckMessage
}

export function checkInputValue(type: InputType, value: string): string {
    if (InputType[type]) {
         return handleCheckInputType[type]?.(value) || ''
    }

    //TODO: Убрать тектсовки в отдельный файл
    return 'Некорректное определение типа поля'
}
