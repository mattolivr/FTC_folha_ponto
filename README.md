# Projeto Folha de Ponto
### Projeto de alimentação de dados e integração à uma planílha Excel, realizado para a disciplina de Sistemas de Informação

---

## Autores

* Claudio Henrique dos Santos
* Gabrielle Santana Lucas
* Matheus de Oliveira
* Melissa Moscardini de Souza
* Melissa Santos de Oliveira

---

## Como funciona?

### A entrada de dados é realizada por meio de tags `<input>` do HTML em uma webpage e tratada por um script JS.

![Página principal do sistema](./images/mk_webpage.png)

##### Página inicial do sistema de folha de ponto

### O dado de nome é inserido no campo **Nome do Funcionário**. Ao acionar o botão **Bater ponto** um script é rodado coletando a data e a hora e armazenando os dados em um objeto JavaScript.

`Employee = {
	"name": getName()
	"date": getDate()
	"time": getTime()
}`

### Esse objeto JavaScript é anexado à um **array** salvo no armazenamento local do navegador, preparado para ser transformado em um arquivo JSON ao acionar o botão **Baixar folha de ponto**.

### Ao substituir o arquivo *signTimeSheet.json* baixado na raiz do projeto, é possível ver uma alteração na planílha *Folha de Ponto.xlsx*, que é alimentada com os dados deste arquivo.

![Planílha Excel](./images/mk_excel.png)

##### Planílha Excel com dados alimentados pelo sistema

### Assim, o sistema é semi-automaticamente alimentado por dados gerados por uma página web, podendo ser manipulados por outras aplicações por meio do arquivo JSON, ou por usuários com a planílha Excel.
