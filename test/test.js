import assert from 'assert';
import { execSync } from 'child_process';
import path from 'path';

// Caminho para o arquivo de teste e script
const scriptPath = path.resolve('./index.js');
const xlsxPath = path.resolve('./test/test.xlsx');

// Título da coluna e linha
const columnTitle = "Nome";
const columnTitleRow = "1"; // Se quiser testar sem linha, remova esse valor da chamada

// Esperado do arquivo de teste
const expectedOutput = "Maria,João,Carlos";

// Executa o script com os parâmetros e captura a saída
const output = execSync(`node ${scriptPath} "${xlsxPath}" "${columnTitle}" ${columnTitleRow}`, {
  encoding: 'utf8'
}).trim();

// Executa o script com os parâmetros e captura a saída
const output2 = execSync(`node ${scriptPath} "${xlsxPath}" "${columnTitle}"`, {
  encoding: 'utf8'
}).trim();

// Verifica o resultado
assert.strictEqual(output, expectedOutput);
console.log("✅ Teste passou com sucesso!");

assert.strictEqual(output2, expectedOutput);
console.log("✅ Teste passou com sucesso!");
