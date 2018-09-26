
import { html } from 'lit-html';

const phone = num => html`<div style="color:rgb(0,0,0);line-height:normal;font-family:Helvetica;font-size:11px">${num}</div>`;

const checkPhone = data => data.length ? phone(data) : '';

export const signature = data => html`
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
                    <font color="#626b72"><b style="font-size:13px"><span style="font-size:12px"><b style="color:rgb(179,67,37)">BITROCK</b><span
                            style="color:rgb(179,67,37)">&nbsp;</span><b style="color:rgb(179,67,37)">S.r.l.</b>&nbsp;</span></b></font>
                  </div>
                  <div style="line-height:normal;font-size:10px"><b style="font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">
                      <font color="#666666"><a href="https://maps.google.com/?q=Milano+%E2%80%93+Via+Borsieri+41&amp;entry=gmail&amp;source=g"
                          style="color:rgb(17,85,204)" target="_blank">Milano</a></font>
                    </b>
                    <font color="#444444" style="font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">&nbsp;<a
                        href="https://maps.google.com/?q=Milano+%E2%80%93+Via+Borsieri+41&amp;entry=gmail&amp;source=g"
                        style="color:rgb(17,85,204)" target="_blank">– Via Borsieri 41</a></font>
                  </div>
                  <div style="line-height:normal;font-size:10px"><b style="color:rgb(68,68,68);font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">
                      <font color="#666666"><a href="https://maps.google.com/?q=Treviso+%E2%80%93+Viale+della+Repubblica+156&amp;entry=gmail&amp;source=g"
                          style="color:rgb(17,85,204)" target="_blank">Treviso</a></font>
                    </b>
                    <font color="#444444" style="color:rgb(68,68,68);font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">&nbsp;<a
                        href="https://maps.google.com/?q=Treviso+%E2%80%93+Viale+della+Repubblica+156&amp;entry=gmail&amp;source=g"
                        style="color:rgb(17,85,204)" target="_blank">– Viale della Repubblica 156</a>/A</font>
                  </div>
                  <div style="line-height:normal;font-family:&quot;Calibri Light&quot;,sans-serif;color:rgb(68,68,68);font-size:11.3333px"><a
                      href="http://bitrock.it/" style="color:rgb(17,85,204)" target="_blank">bitrock.it</a></div>
                </div>
              </div>
              <div dir="ltr">
                <div><br></div>
                <div><img src="https://ci4.googleusercontent.com/proxy/2786WCPr7zOQ1L-zDGIjbCtVSg8xzUxgmqa5_qemXm5DVBw93uT2hMNeUZDJytIMbzHq7NLSpm_tDARSqL_4im9wxqV-LTNUZ2oeKYz8-nSHxv4geIuB7AUGjFxg6TJ9tV78N8EE9QWUzjqPJwK1xhVQ0Q=s0-d-e1-ft#https://drive.google.com/a/bitrock.it/uc?id=1qeEnD7yFodvwM72J49die1GvvqP9wS-N&amp;export=download"
                    width="96" height="24"><br></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;