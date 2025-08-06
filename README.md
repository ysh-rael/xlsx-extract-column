# xlsx-extract-column

> 🧰 Utilitário em Node.js para extrair os valores de uma coluna específica de um arquivo `.xlsx` e retornar como uma string separada por vírgulas.

Este script foi desenvolvido como uma solução auxiliar para projetos legados que rodam versões antigas do Node.js (ex: Node 5), que não suportam nativamente a leitura de arquivos `.xlsx`.

---

## 🚀 Funcionalidade

Você fornece:

- O **nome do título da coluna**
- O **caminho para o arquivo `.xlsx`**

E o script retorna:

```

valor1,valor2,valor3,...

````

---

## 🛠️ Requisitos

- Node.js **v18+** (recomendado: v20 ou v23)
- npm (ou yarn/pnpm)

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/xlsx-column-extractor.git
cd xlsx-column-extractor
npm install
````

---

## 💡 Uso

```bash
node index.js "NomeDaColuna" "/caminho/para/arquivo.xlsx"
```

### Exemplo:

```bash
node index.js "Email" "./planilha_clientes.xlsx"
```

### Resultado:

```bash
cliente1@exemplo.com,cliente2@exemplo.com,cliente3@exemplo.com
```

---

## 🧪 Teste rápido

Você pode testar com qualquer planilha `.xlsx` com títulos na primeira linha. O script irá buscar pela coluna com o nome especificado e extrair todos os valores dessa coluna.

---

## 📂 Estrutura do projeto

```txt
xlsx-column-extractor/
├── index.js        # Script principal
├── package.json    # Dependências e metadata
└── README.md       # Este arquivo
```

---

## 📄 Licença

No License

---

## 🤝 Contribuições

Pull requests são bem-vindos! Caso tenha ideias de melhorias ou queira adaptar o script para novas versões, fique à vontade para contribuir.


Se quiser, posso personalizar com seu nome, seu usuário do GitHub ou ainda gerar um ícone/emoji estilizado para o projeto. Deseja isso?
```
