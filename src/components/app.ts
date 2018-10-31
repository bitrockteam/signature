
import { html, render, TemplateResult } from 'lit-html';
import { form } from './form';
import { escapeHtml } from '../libs/escape';

const root :Element = document.querySelector('#root');

const data :State = {
  firstname: '',
  lastname: '',
  role: '',
  email: '',
  phone: '',
  company: 'Bitrock'
}

const app = () :TemplateResult => html`
  <main class="container">
    <h1>Email signature builder</h1>
    ${form(data)}
  </main>
`;

const _render = () :void => {
  render(app(), root);
  const code :Element = document.querySelector('pre code');
  const preview :HTMLDivElement = document.querySelector('#preview div');
  code.innerHTML = escapeHtml(preview.innerHTML);
}

document.body.addEventListener('update-data', (evt :CustomEvent) => {
  const det :FieldData = evt.detail;
  data[det.key] = det.value;
  // console.log(evt.detail, data);
  _render();
});

_render();
