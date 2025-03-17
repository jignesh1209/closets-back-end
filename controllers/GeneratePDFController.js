
const fs = require('fs');
const path = require("path");
const PuppeteerHTMLPDF = require("puppeteer-html-pdf");
const handlebars = require("handlebars");

class GeneratePDFController {
    static async GeneratePDF(req,res) {
        const htmlPDF = new PuppeteerHTMLPDF();

        htmlPDF.setOptions({ format: "A4", headless: true });
        const templateHtml = await htmlPDF.readFile(path.join(process.cwd() + "/views/agreement.html"), "utf8");

        var template = handlebars.compile(templateHtml);
        const data = {
            job_id: req.body.jobId,
            client_name: req.body.clientName
        };
        var html = template(data);
        // try {
        //     const pdfBuffer = await htmlPDF.create(html);
        //     const filePath = `./../temp/sample.pdf`;
        //     const file = await htmlPDF.writeFile(pdfBuffer, filePath);
        //     //res.send("https://research.google.com/pubs/archive/44678.pdf");
            

        //   } catch (error) {
        //     console.log("PuppeteerHTMLPDF error", error);
        //   }
        //res.send("https://research.google.com/pubs/archive/44678.pdf");
        return res.send(html);
      
    }
}

module.exports = GeneratePDFController