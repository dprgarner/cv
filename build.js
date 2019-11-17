const fs = require('fs').promises;

const { renderHtml, renderPdf } = require('./render');

async function build() {
  await fs.mkdir('./dist', { recursive: true });
  const [html, pdfHtml] = await Promise.all([
    renderHtml(),
    renderHtml({ isPdf: true }),
  ]);
  return Promise.all([
    fs.writeFile('./dist/index.html', html, 'utf8'),
    renderPdf(pdfHtml, './dist/cv.pdf'),
  ]);
}

build().catch(e => {
  console.error(e);
  process.exit(1);
});
