
import { html, render } from 'lit-html';
import { form } from './form';
import { escapeHtml } from './../libs/escape';

const root = document.querySelector('#root');

const data = {
  firstname: '',
  lastname: '',
  role: '',
  email: '',
  phone: '',
  company: 'Bitrock'
}

const app = () => html`
  <main class="container">
    <h1>Email signature builder</h1>
    ${form(data)}
  </main>
`;

const _render = () => {
  render(app(), root);
  const code = document.querySelector('pre code');
  const preview = document.querySelector('#preview div');
  code.innerHTML = escapeHtml(preview.innerHTML);
}

document.body.addEventListener('update-data', evt => {
  const det = evt.detail;
  data[det.key] = det.value;
  _render();
  console.log(evt.detail);
});

_render();
