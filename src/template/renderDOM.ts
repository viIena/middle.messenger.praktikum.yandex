import Block from './Block';

export default function renderDOM(block: Block, cssSelector: string) {
  const root = document.querySelector(cssSelector);

  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}
