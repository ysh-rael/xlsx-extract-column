# xlsx-extract-column

> 🧰 Utilitário em Node.js para extrair os valores de uma coluna específica de um arquivo `.xlsx` e retornar como uma string separada por vírgulas.

Este script foi desenvolvido como uma solução auxiliar para projetos legados que rodam versões antigas do Node.js (ex: Node 5), que não suportam nativamente a leitura de arquivos `.xlsx`.

---

## 🚀 Funcionalidade

Você fornece:

- O **nome do título da coluna**
- O **caminho para o arquivo `.xlsx`**
- O **N° da linha do título da coluna (OPCIONAL)**

E o script retorna:

```

valor1,valor2,valor3,...

```

---

## 🛠️ Requisitos

- Node.js **v18+** (recomendado: v20 ou v23)
- npm (ou yarn/pnpm)

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/ysh-rael/xlsx-extract-column.git
cd xlsx-extract-column
npm install
```

---

## 💡 Uso

```bash
node index.js "/caminho/para/arquivo.xlsx" "NomeDaColuna" [linhaTituloOpcional]
```

### Exemplo:

```bash
node index.js "./planilha_clientes.xlsx" "Email"
```

### Resultado:

```bash
cliente1@exemplo.com,cliente2@exemplo.com,cliente3@exemplo.com
```

---

## 📦 Build com `pkg` (Node.js 18)

Se você deseja gerar um binário executável para ambientes legados (ex: servidores com Node.js 5), você pode usar o [`pkg`](https://github.com/vercel/pkg) para empacotar o script.

### Gerar build:

```bash
npm run build
```

Esse comando irá gerar um binário compatível, usando Node.js 18 como target.

Arquivos gerados:

```
dist/
└── xlsx-extract-column-linux
    xlsx-extract-column-win.exe
    xlsx-extract-column-macos
```

---

## 🧪 Teste rápido

Você pode testar com qualquer planilha `.xlsx` com títulos na primeira linha. O script irá buscar pela coluna com o nome especificado e extrair todos os valores dessa coluna.

---

## 📂 Estrutura do projeto

```txt
xlsx-extract-column/
├── index.js         # Script principal
├── package.json     # Dependências e metadata
├── test/            # Planilhas de teste e script de teste
├── dist/            # Builds geradas com pkg
└── README.md        # Este arquivo
```

---

## 📄 Licença

No License

---

## 🤝 Contribuições

Pull requests são bem-vindos! Caso tenha ideias de melhorias ou queira adaptar o script para novas versões, fique à vontade para contribuir.
