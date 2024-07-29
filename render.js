const fs = require('fs').promises;

const fm = require('front-matter');
const marked = require('marked');
const Handlebars = require('handlebars');
const puppeteer = require('puppeteer');

const CV_SOURCE = './src/cv.md';
const CV_TEMPLATE = './src/template.hb';
const CV_STYLES = './src/styles.css';
const ROOT = 'https://dprgarner.github.io/cv';

async function renderHtml({ livereloadPort = null, isPdf = false } = {}) {
  const { attributes, body } = fm(await fs.readFile(CV_SOURCE, 'utf8'));
  const markdown = marked(body);
  const description = marked(attributes.description);
  const context = { ...attributes, markdown, description };

  if (livereloadPort) {
    const livereloadHost = 'localhost';
    context.livereload = `
      <script src="http://${livereloadHost}:${livereloadPort}/livereload.js?snipver=1"></script>
    `;
  }
  const template = Handlebars.compile(await fs.readFile(CV_TEMPLATE, 'utf8'));
  context.styles = await fs.readFile(CV_STYLES);
  context.cvHtmlPath = `${ROOT}`;
  context.cvPdfPath = `${ROOT}/cv.pdf`;
  context.pdf = isPdf;

  const html = template(context);
  return html.replace(/–/g, '&ndash;').replace(/’/g, '&rsquo;');
}
exports.renderHtml = renderHtml;

async function renderPdf(html, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  await page.evaluateHandle('document.fonts.ready');
  await page.emulateMedia('print');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
  });
  await browser.close();
}
exports.renderPdf = renderPdf;
