import Block from '../../template/block'
import template from 'bundle-text:./chat.hbs'

import './chat.css'

export class ChatPage extends Block {
    constructor() {
        super()
    }

    render(): string {
        return template;
    }
}
