# Example on how to use jsPDF inside HTMLGraphics

![jsPDF in HTMLGraphics](https://github.com/ZuperZee/htmlgraphics-jspdf-example/blob/main/img/jspdf-in-htmlgraphics.png)

## Steps to create the same example

1. Copy the [htmlgraphics-html-bundler-template](https://github.com/gapitio/htmlgraphics-html-bundler-template)

   - Either by clicking the "use this template button"
   - or with the command

   ```bash
   npx degit https://github.com/gapitio/htmlgraphics-html-bundler-template htmlgraphics-jspdf-example
   ```

2. Install the [jspdf package](https://www.npmjs.com/package/jspdf) with the command

   ```bash
   npm install jspdf
   ```

3. Modify the `rollup.config.js` file as it needs the `inlineDynamicImports` enabled.

   Insert `inlineDynamicImports: true` to the output section for onInit.ts inside `rollup.config.js` on line 16.

4. Add the following code to `src/onInit.ts`

   ```js
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
   ```

5. Add the following code to `src/html.html`

   ```html
   <div>
     <button>Download PDF</button>
   </div>
   ```

6. Run `npm run build`

7. Copy the content from `dist/panel-options.json` to the HTMLGraphics panel inside Grafana.
