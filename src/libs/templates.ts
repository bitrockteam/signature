import { html, TemplateResult } from 'lit-html';
import { companies } from './companies';

const confidential = () :TemplateResult =>
  html`<div style="font-size: 12px; line-height: 16px;"><p style="font-size: 12px; line-height: 16px; color: #999999;"><b style="font-weight: bold;">CONFIDENTIALITY:</b> This message contains confidential information intended only for the use of the addressee. It’s
intended that any unauthorized use, dissemination or disclosure of this message for purpose that does not comply with
its purpose is prohibited. If you received this message in error, or are not the intended recipient, please delete it
and any copies from your systems and immediately notify. Thank you.</p>

<p style="font-size: 12px; line-height: 16px; color: #999999;"><b style="font-weight: bold;">AVVISO DI RISERVATEZZA:</b>Le informazioni contenute in questo messaggio sono strettamente riservate ed esclusivamente
indirizzate al destinatario indicato (oppure alla persona responsabile di rimetterlo al destinatario). Resta inteso che
qualsiasi uso, riproduzione o divulgazione di questo messaggio a fini diversi da quelli oggetto della presente email è
vietato. Nel caso in cui aveste ricevuto questa mail per errore, vogliate avvertire il mittente al più presto e subito
dopo distruggerla.</p></div>`;

const phone = (num :string) :TemplateResult => 
  html`<div style="line-height: 16px;"><a href="tel:${num}" target="_blank" style="font-size: 12px; line-height: 16px; color: #1155cc;">${num}</a></div>`;

const checkPhone = (data :string) :string|TemplateResult => 
  data.length ? phone(data) : '';

const website = (company :string) :TemplateResult => {
  const current = companies.filter((e :Company) :boolean => 
    e.label === company)[0];
  return html`
  <div style="font-size: 12px; line-height: 16px;">
    <a href=${current.url} target="_blank" style="color: #1155cc;">${current.url}</a>
  </div>`
}

const treviso = (company :string) :string|TemplateResult => {
  return company !== companies[2].label ? 
    html`
    <div style="font-size: 12px; line-height: 16px;">
      <a href="https://www.google.com/maps/place/Viale+della+Repubblica,+156,+31100+Treviso+TV" target="_blank" style="color: #1155cc;"><b style="font-weight: bold;">Treviso</b> – Viale della Repubblica 156/A</a>
    </div>` : '';
}

const logo = (company :string) :TemplateResult => {
  const filename :string = company ? company.toLowerCase() : 'bitrock';
  return html`
  <div>
    <img src="https://github.com/bitrockteam/signature/blob/master/logos/${filename}.png?raw=true" height="32px" nosend="1">
  </div>`;
}

export const signature = (data :State) :TemplateResult => html`
<div class="gmail_signature" data-smartmail="gmail_signature">
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; font-size: 16px; line-height: 24px; font-weight: normal; color: #1F1F1F;">
  <div>
    <b style="color: #5C5C5C; font-weight: bold;">${data.firstname}</b>&nbsp;<b style="color: #3D3D3D; font-weight: bold;">${data.lastname}</b>
  </div>
  <div style="font-size: 12px; line-height: 16px;"><b style="color: #7A7A7A; font-weight: bold;">${data.role}</b></div>
  <div style="line-height: 16px;"><br></div>
  <div>
    <div style="font-size: 12px; line-height: 16px;;">
      <a href="mailto:${data.email}" target="_blank" style="color: #1155CC;">${data.email}</a>
    </div>
    ${checkPhone(data.phone)}
  </div>
  <div style="line-height: 16px;"><br></div>
  <div style="font-size: 14px; line-height: 20px;">
    <b style="color: #3D3D3D; font-weight: bold;">${data.company.toUpperCase()}</b>&nbsp;<b style="color: #3D3D3D; font-weight: bold;">s.r.l.</b>
  </div>
  <div style="font-size: 12px; line-height: 16px;">
    <a href="https://www.google.com/maps/place/Via+Pietro+Borsieri,+41,+20159+Milano+MI" target="_blank" style="color: #1155cc;"><b style="font-weight: bold;">Milano</b> – Via Borsieri ${data.company === 'Radicalbit' ? '41' : '41'}</a>
  </div>
  ${treviso(data.company)}
  ${website(data.company)}
  <div style="line-height: 16px;"><br></div>
  ${logo(data.company)}
  <div style="line-height: 16px;"><br></div>
  ${confidential()}
</div>
</div>`;