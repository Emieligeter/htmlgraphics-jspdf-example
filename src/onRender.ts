const fields = data.series[0]?.fields ?? [];

const titleH = document.createElement("th");
titleH.style.width = "50%";
titleH.innerHTML = "<div>Ticket</div><div>Kundenzuordnung</div>";

const rows = [
  createEl("th", "#"),
  createEl("th", "Eingang", "Update"),
  titleH,
  createEl("th", "Status", "Gruppe"),
  createEl("th", "Aufwand/h"),
];
for (let i = 0; i < fields[0]?.values.length; i++) {
  const row = document.createElement("tr");

  const number = fields[0].values.get(i);
  const createdAt = fields[2].values.get(i);
  const updatedAt = fields[3].values.get(i);
  const title = fields[4].values.get(i);
  const owner = fields[5].values.get(i);
  const status = fields[6].values.get(i);
  const type = fields[7].values.get(i);
  const aufwand = fields[8].values.get(i);

  const link = document.createElement("a");
  link.href = `https://grafana.bmsoft.de/d/aYSG8SBVk/one-ticket-overview?orgId=1&var-Ticket=${number}&var-Article_id=0&var-Zammad=Zammad%20production`;
  link.target = "_blank";
  link.append(createEl("td", number));
  row.append(link);
  row.append(createEl("td", createdAt, updatedAt));
  row.append(createEl("td", title, owner));
  row.append(createEl("td", status, type));
  row.append(createEl("td", aufwand.toString().replace(".", ",")));
  rows.push(row);
}

const totalRow = document.createElement("tr");
totalRow.append(createEl("td"));
totalRow.append(createEl("td"));
totalRow.append(createEl("td"));

const totalTitle = createEl("td", "Summe/h");
totalTitle.style.fontWeight = "bold";
totalRow.append(totalTitle);

let sum = 0;
for (let i = 0; i < fields[8]?.values.length; i++) {
  sum += fields[8].values.get(i);
}
const total = createEl("td", sum.toString().replace(".", ","));
total.style.fontWeight = "bold";
totalRow.append(total);
rows.push(totalRow);
htmlNode.getElementById("table")?.replaceChildren(...rows);

function createEl(el: string, ...tdData: string[]) {
  const td = document.createElement(el);
  let inner = "";
  for (let i = 0; i < tdData.length; i++) {
    inner += `<div>${tdData[i]}</div>`;
  }
  td.innerHTML = inner;
  return td;
}
function getVariable(varName: string) {
  return htmlNode.getTemplateSrv().getVariables()
    .filter(v:any => v.name === varName)
    .map(v => v.current)[0]
}
const h1 = htmlNode.getElementById("customer")
if(h1 === null) throw new Error('h1 not found')
h1.innerHTML = `${getVariable('Customer').text} ${getVariable('Year').text}/${getVariable('Month').value}`
