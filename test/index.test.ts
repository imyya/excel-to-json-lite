import {describe, it, expect} from 'vitest'
import * as fs from 'node:fs'
import { parseExcelToJson } from '../src'
import path from 'node:path'

describe('Parse excel to json',()=>{
it('Parse un fichier excel valide', async()=>{
    const filePath = path.join(import.meta.dirname,'fixtures', 'test_employes.xlsx')
    const data = fs.readFileSync(filePath)
   // const biteArray = new Uint8Array(data)
    const file = new File([data],"employes.xlsx")
    expect(await parseExcelToJson(file)).toEqual([
  {
    "nom": "Mya Aidara",
    "poste": "Développeuse",
    "salaire": 450000,
    "dateEmbauche": 45000,
    "actif": true
  },
  {
    "nom": "Awa Ndiaye",
    "poste": "Comptable",
    "salaire": 380000,
    "dateEmbauche": 44440,
    "actif": true
  },
  {
    "nom": "Ibrahima Sow",
    "poste": "Chef de projet",
    "salaire": 620000,
    "dateEmbauche": 43485,
    "actif": false
  },
  {
    "nom": "Fatou Diop",
    "poste": "RH",
    "salaire": 410000,
    "dateEmbauche": 44722,
    "actif": true
  }
])
})
})

