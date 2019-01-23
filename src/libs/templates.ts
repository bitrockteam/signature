
import { html, TemplateResult } from 'lit-html';
import { companies } from './companies';

const confidential = () :TemplateResult =>
  html`<p><b>CONFIDENTIALITY:</b> This message contains confidential information intended only for the use of the addressee. It’s
intended that any unauthorized use, dissemination or disclosure of this message for purpose that does not comply with
its purpose is prohibited. If you received this message in error, or are not the intended recipient, please delete it
and any copies from your systems and immediately notify. Thank you.</p>

<p><b>AVVISO DI RISERVATEZZA:</b>Le informazioni contenute in questo messaggio sono strettamente riservate ed esclusivamente
indirizzate al destinatario indicato (oppure alla persona responsabile di rimetterlo al destinatario). Resta inteso che
qualsiasi uso, riproduzione o divulgazione di questo messaggio a fini diversi da quelli oggetto della presente email è
vietato. Nel caso in cui aveste ricevuto questa mail per errore, vogliate avvertire il mittente al più presto e subito
dopo distruggerla.</p>`;

const phone = (num :string) :TemplateResult => 
  html`<div style="color:rgb(0,0,0);line-height:normal;font-family:Helvetica;font-size:11px">${num}</div>`;

const checkPhone = (data :string) :string|TemplateResult => 
  data.length ? phone(data) : '';

const website = (company :string) :TemplateResult => {
  const current = companies.filter((e :Company) :boolean => 
    e.label === company)[0];
  return html`<div style="line-height:normal;font-family:&quot;Calibri Light&quot;,sans-serif;color:rgb(68,68,68);font-size:11.3333px"><a
                href=${current.url} style="color:rgb(17,85,204)" target="_blank">${current.url}</a></div>`
}

const treviso = (company :string) :string|TemplateResult => {
  return company !== companies[2].label ? 
    html`<div style="line-height:normal;font-size:10px"><b style="color:rgb(68,68,68);font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">
          <font color="#666666"><a href="https://maps.google.com/?q=Treviso+%E2%80%93+Viale+della+Repubblica+156&amp;entry=gmail&amp;source=g"
              style="color:rgb(17,85,204)" target="_blank">Treviso</a></font>
        </b>
        <font color="#444444" style="color:rgb(68,68,68);font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">&nbsp;<a
            href="https://maps.google.com/?q=Treviso+%E2%80%93+Viale+della+Repubblica+156&amp;entry=gmail&amp;source=g"
            style="color:rgb(17,85,204)" target="_blank">– Viale della Repubblica 156/A</a></font>
      </div>` : '';
}

const logo = (company :string) :TemplateResult => {
  const filename :string = company ? company.toLowerCase() : 'bitrock';
  return html`<div>
    <img src="https://github.com/bitrockteam/signature/blob/master/logos/${filename}.png?raw=true"
      height="24"><br>
    </div>`;
}

export const signature = (data :State) :TemplateResult => html`
<div class="gmail_signature" data-smartmail="gmail_signature">
  <div dir="ltr">
    <div>
      <div dir="ltr">
        <div>
          <div dir="ltr">
            <div>
              <div dir="ltr">
                <div style="line-height:normal">
                  <font color="#626b72" face="Calibri, sans-serif"><span style="font-size:16px"><b>${data.firstname}&nbsp;</b></span></font><b
                    style="color:rgb(44,57,64);font-size:11pt;font-family:Calibri,sans-serif"><span lang="EN-US" style="font-size:12pt">${data.lastname}</span></b>
                </div>
                <div style="line-height:normal;font-family:Helvetica;font-size:11px">
                  <font color="#75787b"><b>${data.role}</b></font>
                </div>
              </div>
              <div dir="ltr"><b><br></b></div>
              <div dir="ltr">
                <div style="color:rgb(0,0,0);line-height:normal;font-family:Helvetica;font-size:11px"><a href="mailto:${data.email}"
                    target="_blank">
                    <font color="#1155cc">${data.email}</font>
                  </a></div>
                ${checkPhone(data.phone)}
                <div style="color:rgb(0,0,0);line-height:normal;font-family:Helvetica;font-size:11px"><br></div>
                <div style="color:rgb(0,0,0);line-height:normal;font-family:Helvetica;font-size:11px">
                  <div style="font-size:12px;line-height:normal">
                    <font color="#626b72"><b style="font-size:13px"><span style="font-size:12px"><b style="color:rgb(179,67,37)">${data.company.toUpperCase()}</b><span
                            style="color:rgb(179,67,37)">&nbsp;</span><b style="color:rgb(179,67,37)">S.r.l.</b>&nbsp;</span></b></font>
                  </div>
                  <div style="line-height:normal;font-size:10px"><b style="font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">
                      <font color="#666666"><a href="https://maps.google.com/?q=Milano+%E2%80%93+Via+Borsieri+41&amp;entry=gmail&amp;source=g"
                          style="color:rgb(17,85,204)" target="_blank">Milano</a></font>
                    </b>
                    <font color="#444444" style="font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">&nbsp;<a
                        href="https://maps.google.com/?q=Milano+%E2%80%93+Via+Borsieri+41&amp;entry=gmail&amp;source=g"
                        style="color:rgb(17,85,204)" target="_blank">– Via Borsieri ${data.company === 'Radicalbit' ? '41' : '41'}</a></font>
                  </div>
                  ${treviso(data.company)}
                  ${website(data.company)}
                </div>
              </div>
              <div dir="ltr">
                <div><br></div>
                ${logo(data.company)}
              </div>
              <div dir="ltr" class="confidential">
                ${confidential()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;