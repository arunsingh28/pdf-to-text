var pdfreader = require("pdfreader");

const nbCols = 1;
const cellPadding = 50; // each cell is padded to fit 40 characters
const columnQuantitizer = (item) => parseFloat(item.x) >= 20;

const padColumns = (array, nb) =>
    Array.apply(null, { length: nb }).map((val, i) => array[i] || []);
// .. because map() skips undefined elements

const mergeCells = (cells) =>
    // console.log('cells',cells)
    (cells || [])
        .map((cell) => cell.text)
        .join("") // merge cells
        // .trim('')
// .substr(0, cellPadding)
// .padEnd(cellPadding, " "); // padding

const renderMatrix = (matrix) =>
    (matrix || [])
        .map((row, y) => padColumns(row, nbCols).map(mergeCells).join(" | "))
        .join("\n");

var table = new pdfreader.TableParser();


new pdfreader.PdfReader().parseFileItems('test.pdf', function (err, item) {
    // console.log(item)ss
    if (!item || item.page) {
        // console.log(item)

        // end of file, or text
        console.log(renderMatrix(table.getMatrix()));
        // console.log("PAGE:", item.page);
        table = new pdfreader.TableParser(); // new/clear table for next text
        // console.log(table)
    } else if (item.text) {
        // accumulate text items into rows object, per line
        table.processItem(item, columnQuantitizer(item));
    }
});