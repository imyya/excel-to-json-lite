import { parseExcelToJson } from "../src";

const input = document.getElementById("myFile") as HTMLInputElement;

input.addEventListener('change',async()=>{
    if(!input.files || !input.files[0]) return
    const file = input.files[0]
    try{
        console.log(await parseExcelToJson(file))
    }catch(e){
        console.error(e)
    }
} )