export const perguntasCacaAoErro = [
  {
    pergunta: "Qual o erro neste código JavaScript?\n\nfunction soma(a, b) {\n  return a + b;\n}\nsoma(5);",
    opcoes: [
      "Falta um parâmetro na chamada da função",
      "A função não retorna nada",
      "Erro de sintaxe na declaração da função",
      "Falta um ponto e vírgula"
    ],
    respostaCorreta: "Falta um parâmetro na chamada da função"
  },
  {
    pergunta: "Qual o erro neste trecho Python?\n\nlista = [1, 2, 3]\nprint(lista[3])",
    opcoes: [
      "Erro de sintaxe",
      "IndexError: índice fora do intervalo",
      "A lista está vazia",
      "print não é uma função válida"
    ],
    respostaCorreta: "IndexError: índice fora do intervalo"
  },
  {
    pergunta: "Qual o erro neste código Java?\n\nint x = 5;\nif(x = 10) {\n  System.out.println(x);\n}",
    opcoes: [
      "Falta ponto e vírgula após if",
      "Atribuição dentro do if em vez de comparação",
      "Variável não declarada",
      "Sintaxe correta"
    ],
    respostaCorreta: "Atribuição dentro do if em vez de comparação"
  },
  {
    pergunta: "Qual o problema neste código C++?\n\nint main() {\n  int x;\n  cout << x;\n  return 0;\n}",
    opcoes: [
      "x não foi inicializado antes de ser usado",
      "Falta ponto e vírgula",
      "Falta return 0",
      "cout está mal escrito"
    ],
    respostaCorreta: "x não foi inicializado antes de ser usado"
  },
  {
    pergunta: "Erro neste trecho JavaScript:\n\nlet a = 10;\nif(a = 5) {\n  console.log('A é 5');\n}",
    opcoes: [
      "A variável 'a' não está declarada",
      "Uso incorreto do operador de atribuição (=) em vez do comparador (== ou ===)",
      "Erro de sintaxe no if",
      "Falta chaves no if"
    ],
    respostaCorreta: "Uso incorreto do operador de atribuição (=) em vez do comparador (== ou ===)"
  },
  {
    pergunta: "Erro comum no Python:\n\nfor i in range(5):\nprint(i)",
    opcoes: [
      "Falta dois pontos ':' no for",
      "Indentação incorreta na linha do print",
      "range() não existe",
      "print não é válido"
    ],
    respostaCorreta: "Indentação incorreta na linha do print"
  },
  {
    pergunta: "Qual o erro neste código C?\n\nint main() {\n  int a = 5\n  printf(\"%d\", a);\n  return 0;\n}",
    opcoes: [
      "Falta ponto e vírgula após a = 5",
      "printf não é uma função válida",
      "Erro na declaração de main",
      "Falta return"
    ],
    respostaCorreta: "Falta ponto e vírgula após a = 5"
  },
  {
    pergunta: "Erro neste código JavaScript:\n\nconst obj = { nome: 'João' };\nconsole.log(obj.nomee);",
    opcoes: [
      "Erro de sintaxe",
      "A propriedade 'nomee' não existe no objeto",
      "console.log não funciona assim",
      "Falta chaves no objeto"
    ],
    respostaCorreta: "A propriedade 'nomee' não existe no objeto"
  },
  {
    pergunta: "Erro neste código Python:\n\ndef func():\nreturn 'Hello'",
    opcoes: [
      "Falta identação no return",
      "Falta parênteses na definição da função",
      "return não é uma palavra reservada",
      "Sintaxe correta"
    ],
    respostaCorreta: "Falta identação no return"
  },
  {
    pergunta: "Erro neste código Java:\n\nString s = null;\ns.length();",
    opcoes: [
      "Erro de compilação",
      "NullPointerException em tempo de execução",
      "String s não pode ser null",
      "s.length() retorna zero"
    ],
    respostaCorreta: "NullPointerException em tempo de execução"
  },
  {
    pergunta: "Erro no seguinte código C++:\n\nint x = 10;\nif (x = 20) {\n  cout << x;\n}",
    opcoes: [
      "Erro de sintaxe no if",
      "Atribuição dentro do if em vez de comparação",
      "cout não existe",
      "Falta ponto e vírgula"
    ],
    respostaCorreta: "Atribuição dentro do if em vez de comparação"
  },
  {
    pergunta: "Erro neste código JavaScript:\n\nlet a = 10;\nconsole.log(A);",
    opcoes: [
      "Variável A não declarada (case sensitive)",
      "Erro de sintaxe",
      "console.log não pode imprimir variáveis",
      "a não é inicializada"
    ],
    respostaCorreta: "Variável A não declarada (case sensitive)"
  },
  {
    pergunta: "Erro neste trecho Python:\n\nx = '5'\ny = 3\nprint(x + y)",
    opcoes: [
      "Concatena strings e números sem erro",
      "TypeError: não pode somar string e int",
      "print está mal escrito",
      "x e y não foram inicializados"
    ],
    respostaCorreta: "TypeError: não pode somar string e int"
  },
  {
    pergunta: "Erro no código Java:\n\nint[] arr = new int[5];\narr[5] = 10;",
    opcoes: [
      "Erro de compilação",
      "ArrayIndexOutOfBoundsException em tempo de execução",
      "Erro de sintaxe",
      "Array aceita índice 5"
    ],
    respostaCorreta: "ArrayIndexOutOfBoundsException em tempo de execução"
  },
  {
    pergunta: "Erro no código C:\n\nchar str[5] = \"Hello\";",
    opcoes: [
      "Erro de sintaxe",
      "String maior que o tamanho do array (overflow)",
      "char não pode ser usado para strings",
      "Sintaxe correta"
    ],
    respostaCorreta: "String maior que o tamanho do array (overflow)"
  },
  {
    pergunta: "Erro neste código JavaScript:\n\nfunction test() {\n  console.log(x);\n  var x = 5;\n}\ntest();",
    opcoes: [
      "Erro de variável não declarada",
      "Undefined devido hoisting do var",
      "x é global",
      "Erro de sintaxe"
    ],
    respostaCorreta: "Undefined devido hoisting do var"
  },
  {
    pergunta: "Erro em Python:\n\nif x = 5:\n  print(x)",
    opcoes: [
      "Erro de sintaxe (uso incorreto do '=')",
      "print está mal escrito",
      "Indentação incorreta",
      "Sintaxe correta"
    ],
    respostaCorreta: "Erro de sintaxe (uso incorreto do '=')"
  },
  {
    pergunta: "Erro no código Java:\n\nfor (int i = 0; i < 10; i++) {\n  int i = 5;\n}",
    opcoes: [
      "Redeclaração da variável i dentro do loop",
      "Erro de sintaxe",
      "Erro lógico",
      "Sintaxe correta"
    ],
    respostaCorreta: "Redeclaração da variável i dentro do loop"
  },
  {
    pergunta: "Erro no código C++:\n\nint *p;\n*p = 10;",
    opcoes: [
      "Erro de ponteiro não inicializado",
      "Sintaxe correta",
      "p aponta para NULL",
      "Erro de sintaxe"
    ],
    respostaCorreta: "Erro de ponteiro não inicializado"
  },
  {
    pergunta: "Erro no código JavaScript:\n\nconst a = [];\na.push(1);\na = [2, 3];",
    opcoes: [
      "Erro de atribuição a constante",
      "Push não é uma função válida",
      "Erro de sintaxe",
      "Código correto"
    ],
    respostaCorreta: "Erro de atribuição a constante"
  },
  {
    pergunta: "Erro neste código Python:\n\nlista = [1, 2, 3]\nprint(lista[3])",
    opcoes: [
      "IndexError: índice fora do intervalo",
      "Erro de sintaxe",
      "A lista está vazia",
      "print não é uma função válida"
    ],
    respostaCorreta: "IndexError: índice fora do intervalo"
  },
  {
    pergunta: "Erro no código Java:\n\nString s = \"abc\";\nint i = Integer.parseInt(s);",
    opcoes: [
      "Erro de compilação",
      "NumberFormatException em tempo de execução",
      "Sintaxe incorreta",
      "Código correto"
    ],
    respostaCorreta: "NumberFormatException em tempo de execução"
  },
  {
    pergunta: "Erro no código C++:\n\nint x = 10;\nint y = 0;\nint z = x / y;",
    opcoes: [
      "Erro de compilação",
      "Divisão por zero em tempo de execução",
      "z será zero",
      "Sintaxe correta"
    ],
    respostaCorreta: "Divisão por zero em tempo de execução"
  },
  {
    pergunta: "Erro no código JavaScript:\n\nlet x = 5;\nif(x > 3)\n  let y = 10;",
    opcoes: [
      "Erro de sintaxe: declaração let dentro do if sem bloco",
      "Erro de lógica",
      "Variável y global",
      "Código correto"
    ],
    respostaCorreta: "Erro de sintaxe: declaração let dentro do if sem bloco"
  },
  {
    pergunta: "Erro no código Python:\n\nx = 10\nif x > 5\n  print(x)",
    opcoes: [
      "Falta dois pontos ':' após a condição do if",
      "Erro de sintaxe no print",
      "Indentação incorreta",
      "Código correto"
    ],
    respostaCorreta: "Falta dois pontos ':' após a condição do if"
  },
  {
    pergunta: "Erro no código Java:\n\npublic void metodo() {\n  return 5;\n}",
    opcoes: [
      "Método com tipo void não pode retornar valor",
      "Erro de sintaxe",
      "Erro de compilação por falta de return",
      "Código correto"
    ],
    respostaCorreta: "Método com tipo void não pode retornar valor"
  },
  {
    pergunta: "Erro no código C:\n\nchar *str = \"texto\";\nstr[0] = 'T';",
    opcoes: [
      "Modificação de string literal, comportamento indefinido",
      "Sintaxe correta",
      "Erro de compilação",
      "str não é um ponteiro"
    ],
    respostaCorreta: "Modificação de string literal, comportamento indefinido"
  },
  {
    pergunta: "Erro no código JavaScript:\n\nconsole.log('2' + 2);",
    opcoes: [
      "'4'",
      "'22'",
      "4",
      "Erro"
    ],
    respostaCorreta: "'22'"
  }
];
