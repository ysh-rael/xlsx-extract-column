// extractColumn.js
import xlsx from 'xlsx';
import path from 'path';
import fs from 'fs';

// Lê os argumentos da linha de comando
const [,, filePath, columnTitle, headerRowStr] = process.argv;
const headerRow = headerRowStr ? parseInt(headerRowStr) : 1; // Linha do cabeçalho (1-based)

// Validação básica
if (!filePath || !columnTitle) {
  console.error('Uso: node extractColumn.js <caminho-do-arquivo.xlsx> <nome-da-coluna> [linha-do-cabecalho]');
  process.exit(1);
}

if (!fs.existsSync(filePath)) {
  console.error(`Arquivo não encontrado: ${filePath}`);
  process.exit(1);
}

try {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Converte para JSON, com a linha de cabeçalho definida (zero-based)
  const data = xlsx.utils.sheet_to_json(sheet, { header: 1, range: headerRow - 1 });

  // Identifica o índice da coluna pelo título
  const headers = data[0];
  const columnIndex = headers.indexOf(columnTitle);

  if (columnIndex === -1) {
    console.error(`Coluna "${columnTitle}" não encontrada na linha ${headerRow}.`);
    process.exit(1);
  }

  // Extrai os valores da coluna
  const values = data.slice(1) // ignora cabeçalho
    .map(row => row[columnIndex])
    .filter(val => val !== undefined && val !== null);

  console.log(values.join(','));
} catch (err) {
  console.error('Erro ao processar o arquivo:', err.message);
  process.exit(1);
}
