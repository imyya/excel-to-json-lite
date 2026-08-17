import * as XLSX from 'xlsx';
export async function parseExcelToJson(file:File) : Promise<Record<string,unknown>[]>{
    
    //recuperer le contenu binaire du fichier
    const buffer = await file.arrayBuffer()
    const byteArray = new Uint8Array(buffer)
    const workbook = XLSX.read(byteArray,{type:'array'})
    const firstSheetName = workbook.SheetNames[0]
    if(!firstSheetName) throw new Error("No sheet in this file")
    const firstWorksheet = workbook.Sheets[firstSheetName]
    if(!firstWorksheet) throw new Error("No worksheet in this file")
    const json: Record<string,unknown>[] = XLSX.utils.sheet_to_json(firstWorksheet)
    return json
}