import "./style.css";
import { jsPDF } from "jspdf";

function createPdf() {
  const doc = new jsPDF();
  const printable: HTMLElement | null = htmlNode.getElementById("printable");
  if (printable === null) throw new Error("No printable section");
  doc.html(printable);
  doc.save("htmlgraphics.pdf");
}

const button = htmlNode.querySelector("button");

if (button === null) {
  throw new Error("Button doesn't exist");
}

button.addEventListener("click", createPdf);
