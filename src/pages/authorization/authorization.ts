import Block from '../../template/block'
import template from 'bundle-text:./authorization.hbs'
import { checkInputValue, InputType } from '../../utils/mask'

export class AuthorizationPage extends Block {
    constructor() {
        super()

        this.setProps({
            onSubmit: (e: any): void => {
                e.preventDefault()
                if (this.props.check()) {
                    const data = {}
                    Object.entries(this.refs).forEach((inputRef) => {
                        data[inputRef[0] as string] = (inputRef[1] as HTMLInputElement).value
                    })
                    console.log(data)
                }
            },
            check: (): boolean => {
                let error = ''
                Object.entries(this.refs).forEach((inputRef) => {
                    const input = inputRef[1] as HTMLInputElement
                    error = checkInputValue(input.type as InputType, input.value)
                })

                if (error)
                    return false
                return true
            }
        })
    }

    render(): string {
        return template;
    }
}
