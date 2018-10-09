import { html } from 'lit-html';
import { signature } from './../libs/templates';
import { companies } from './../libs/companies'

const update = e => {
  const event = new CustomEvent("update-data", {
    detail: {
      key: e.target.name,
      value: e.target.value
    }
  });
  document.body.dispatchEvent(event);
};

export const form = data => html`
<div class="grid grid--3">
  <form class="grid--column-form">
    <div class="row">
      <label for="firstname">First name:</label>
      <input class="twelve columns" type="text" name="firstname" 
        @keyup=${e => update(e)}>
    </div>
    <div class="row">
      <label for="lastname">Last name:</label>
      <input class="twelve columns" type="text" name="lastname" 
        @keyup=${e => update(e)}>
    </div>
    <div class="row">
      <label for="role">Role:</label>
      <input class="twelve columns" type="text" name="role"
        @keyup=${e => update(e)}>
    </div>
    <div class="row">
      <label for="email">Email:</label>
      <input class="twelve columns" type="email" name="email"
        @keyup=${e => update(e)}>
    </div>
    <div class="row">
      <label for="phone">Phone number:</label>
      <input class="twelve columns" type="text" name="phone"
        @keyup=${e => update(e)}>
    </div>
    <div class="row">
      <label for="company">Company:</label>
      <div class="options">
        ${ companies.map(c => html`
          <span><input type="radio" value=${c.label} name="company"
            ?checked=${c.label === data.company}
            @change=${e => update(e)}
          > ${c.label}</span>
        `) }
      </div>
    </div>
  </form>
  <div id="preview" class="grid--column-preview">
    <h4 class="hidden">Preview</h4>
    ${signature(data)}
  </div>
</div>
  <div id="code">
    <h4>HTML Code (for copy & paste)</h4>
    <pre>
      <code></code>
    </pre>
  </code>
`;