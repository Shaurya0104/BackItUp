import { extractWitness, WASM_URL, ZKEY_URL, exportCallDataGroth16, splitToWords,} from 'anon-aadhaar-pcd'
import fs from 'fs';
import axios from 'axios'

export async function fetchKey(keyURL){
  const keyData = await (
    await axios.get(keyURL, {
      responseType: 'arraybuffer',
    })
  ).data
  return keyData
}

const hi = async () => {
  const testFile = './beneficiary.pdf'
  const pdfRaw = fs.readFileSync(testFile)
  console.log(pdfRaw)
  console.log(testFile)

  const pdfBuffer = Buffer.from(pdfRaw)
  console.log(pdfRaw)
  console.log(pdfBuffer)

  const extractedData = await extractWitness(pdfBuffer, 'beneficiary123')
  if (extractedData instanceof Error) throw new Error(extractedData.message)

  // let appIdBigInt = '196700487049306364386084600156231018794323017728'
  let appIdBigInt = '609246576999142755181287323616835836365844250624'

  let witnessInputs = {
    signature: splitToWords(extractedData.sigBigInt, BigInt(64), BigInt(32)),
    modulus: splitToWords(extractedData.modulusBigInt, BigInt(64), BigInt(32)),
    base_message: splitToWords(extractedData.msgBigInt, BigInt(64), BigInt(32)),
    app_id: appIdBigInt,
  }

  let pcdInputs = {
    signature: extractedData.sigBigInt,
    modulus: extractedData.modulusBigInt,
    base_message: extractedData.msgBigInt,
    app_id: appIdBigInt,
  }
  let wasm_key = await fetchKey(WASM_URL)
  let zkey = await fetchKey(ZKEY_URL)

  console.log(wasm_key)
  console.log(zkey)

  let proof = await exportCallDataGroth16(witnessInputs, wasm_key, zkey)
  let a = proof.a
  let b = proof.b
  let c = proof.c
  let Input = proof.Input
  console.log("a= ", a)
  console.log("b= ", b)
  console.log("c= ", c)
  console.log('Input= ', Input)
}

export default hi
