!function(){"use strict";const e=data.series[0]?.fields??[],t=document.createElement("th");t.style.width="50%",t.innerHTML="<div>Ticket</div><div>Kundenzuordnung</div>";const n=[p("th","#"),p("th","Eingang","Update"),t,p("th","Status","Gruppe"),p("th","Aufwand/h")];for(let t=0;t<e[0]?.values.length;t++){const a=document.createElement("tr"),d=e[0].values.get(t),l=e[2].values.get(t),r=e[3].values.get(t),o=e[4].values.get(t),s=e[5].values.get(t),u=e[6].values.get(t),c=e[7].values.get(t),i=e[8].values.get(t),g=document.createElement("a");g.href=`https://grafana.bmsoft.de/d/aYSG8SBVk/one-ticket-overview?orgId=1&var-Ticket=${d}&var-Article_id=0&var-Zammad=Zammad%20production`,g.target="_blank",g.append(p("td",d)),a.append(g),a.append(p("td",l,r)),a.append(p("td",o,s)),a.append(p("td",u,c)),a.append(p("td",i.toString().replace(".",","))),n.push(a)}const a=document.createElement("tr");a.append(p("td")),a.append(p("td")),a.append(p("td"));const d=p("td","Summe/h");d.style.fontWeight="bold",a.append(d);let l=0;for(let t=0;t<e[8]?.values.length;t++)l+=e[8].values.get(t);const r=p("td",l.toString().replace(".",","));function p(e,...t){const n=document.createElement(e);let a="";for(let e=0;e<t.length;e++)a+=`<div>${t[e]}</div>`;return n.innerHTML=a,n}r.style.fontWeight="bold",a.append(r),n.push(a),htmlNode.getElementById("table")?.replaceChildren(...n)}();
