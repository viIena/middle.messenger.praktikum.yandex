import Block from '../../template/block'
import template from 'bundle-text:./headline.hbs'

import './headline.css'

interface HeadlineProps {
    text: string;
  }

export class Header extends Block {
    constructor({ text }: HeadlineProps) {
        super({ text });
    }

    protected render(): string {
        return template;
    }
}
