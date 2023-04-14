import "./style.css";
import { jsPDF } from "jspdf";

function getFirstMetricValue() {
  const valueField = data.series[0]?.fields[1];
  if (valueField) {
    const length = valueField.values.length;
    return valueField.values.get(length - 1);
  }
  return "No data";
}

function createPdf() {
  const doc = new jsPDF();

  doc.text("Hello from HTMLGraphics!", 10, 10);
  doc.text(`First metric value: ${getFirstMetricValue()}`, 10, 20);
  doc.save("htmlgraphics.pdf");
}

const button = htmlNode.querySelector("button");

if (button === null) {
  throw new Error("Button doesn't exist");
}

button.addEventListener("click", createPdf);
