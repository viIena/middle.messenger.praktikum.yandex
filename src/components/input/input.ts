import { InputType } from '../../utils/validators';
import Block from '../../template/block';
import template from 'bundle-text:./input.hbs'

interface InputProps {
    onInput?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
    type?: InputType;
    placeholder?: string;
    value?: string;
    error?: string;
}

export class Input extends Block {
    constructor({onBlur, onInput, onFocus, ...props}: InputProps) {
        super({...props, events: {input: onInput, focus: onFocus, blur: onBlur}});
      }

  protected render(): string {
    return template;
  }
}
