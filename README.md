# @imyya/excel-to-json-lite

Convert an Excel file ('.xlsx') into an array of JSON objects, from a browser `File` object (built on top of [xlsx (SheetJs)]).

## Installation

```bash 
npm install @imyya/excel-to-json-lite
```

## Usage

```ts
import {parseExcelToJson} from '@imyya/excel-to-json-lite';

const input = document.querySelection('input[type="file"]');
const file = input.files[0];

const data = await parseExcelToJson(file);
console.log(data);

Given an Excel file like:

| Name  | Job       | Salary |
| ---- | ----------- | ------- |
| Diop | Développeur | 450000  |:

```json
[
  {
    "Name": "Mya Aidara",
    "Job": "Developper",
    "Salary": 450000,

  }
]
```

## API

### `parseExcelToJson(file: File): Promise<Record<string, unknown>[]>`

Reads the first sheet of the provided Excel workbook and returns its content as an array of objects, one entry per
 row (column headers become the keys).


- **file** — a `File` object, e.g. from an `<input type="file">` element.
- **Returns** — a `Promise` resolving to an array of objects (one per data row, keyed by the header row).
- **Throws** — if the file contains no sheets or the first sheet can't be read.

## Notes

- Browser only — relies on the `File` API (`file.arrayBuffer()`). Not intended for Node.js.
- Only the first sheet of the workbook is read.

## License

MIT