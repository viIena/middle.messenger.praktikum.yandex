import Block from '../../template/block'
import template from 'bundle-text:./authorization.hbs'
import { checkInputValue, InputType } from '../../utils/validators'

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
                Object.values(this.refs).forEach((inputRef) => {
                    const input = inputRef as HTMLInputElement
                    error = checkInputValue(input.type as InputType, input.value)
                })

                return error === ''
            }
        })
    }

    render(): string {
        return template;
    }
}
