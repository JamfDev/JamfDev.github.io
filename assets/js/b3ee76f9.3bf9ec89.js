"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[9252],{2911:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"lenguajes de marca/3 Java Script/3.6 Control de Flujo/3.6.1 Estructuras condicionales","title":"3.6.1 Estructuras Condicionales","description":"Las condicionales permiten que un programa tome decisiones basadas en condiciones espec\xedficas. En esta secci\xf3n, desarrollaremos las estructuras condicionales m\xe1s comunes en JavaScript: if...else \ud83e\udd14\u27a1\ufe0f, switch \ud83d\udd04 y el operador ternario \u2753\u27a1\ufe0f\u2714\ufe0f, complementando la explicaci\xf3n con diagramas Mermaid \ud83d\uddbc\ufe0f para facilitar la comprensi\xf3n.","source":"@site/docs/lenguajes de marca/3 Java Script/3.6 Control de Flujo/3.6.1 Estructuras condicionales.md","sourceDirName":"lenguajes de marca/3 Java Script/3.6 Control de Flujo","slug":"/lenguajes de marca/3 Java Script/3.6 Control de Flujo/3.6.1 Estructuras condicionales","permalink":"/docs/lenguajes de marca/3 Java Script/3.6 Control de Flujo/3.6.1 Estructuras condicionales","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"llmmSidebar","previous":{"title":"3.6 Control de flujo","permalink":"/docs/category/36-control-de-flujo"},"next":{"title":"3.6.2 Bucles e Iteraciones","permalink":"/docs/lenguajes de marca/3 Java Script/3.6 Control de Flujo/3.6.2 Bucles e iteraciones"}}');var i=r(4848),o=r(8453);const a={sidebar_position:1},l="3.6.1 Estructuras Condicionales",c={},d=[{value:"<strong><code>if</code>, <code>else if</code> y <code>else</code></strong> \ud83d\udd0d",id:"if-else-if-y-else-",level:2},{value:"<strong>Sintaxis</strong> \ud83d\udee0\ufe0f",id:"sintaxis-\ufe0f",level:3},{value:"<strong>Diagrama de Flujo</strong> \ud83e\udde0",id:"diagrama-de-flujo-",level:3},{value:"<strong>Ejemplo</strong> \ud83d\udcda",id:"ejemplo-",level:3},{value:"<strong>Operador Ternario</strong> \u2753\u27a1\ufe0f\u2714\ufe0f",id:"operador-ternario-\ufe0f\ufe0f",level:2},{value:"<strong>Sintaxis</strong> \ud83d\udee0\ufe0f",id:"sintaxis-\ufe0f-1",level:3},{value:"<strong>Diagrama de Flujo</strong> \ud83e\udde0",id:"diagrama-de-flujo--1",level:3},{value:"<strong>Ejemplo</strong> \ud83d\udcda",id:"ejemplo--1",level:3},{value:"<strong><code>switch</code></strong> \ud83d\udd04",id:"switch-",level:2},{value:"<strong>Sintaxis</strong> \ud83d\udee0\ufe0f",id:"sintaxis-\ufe0f-2",level:3},{value:"<strong>Diagrama de Flujo</strong> \ud83e\udde0",id:"diagrama-de-flujo--2",level:3},{value:"<strong>Ejemplo</strong> \ud83d\udcda",id:"ejemplo--2",level:3},{value:"<strong>Comparativa entre <code>if...else</code> y <code>switch</code></strong>",id:"comparativa-entre-ifelse-y-switch",level:2},{value:"<strong>Ejemplo Comparativo</strong>",id:"ejemplo-comparativo",level:3},{value:"<strong>Buenas Pr\xe1cticas</strong>",id:"buenas-pr\xe1cticas",level:2}];function t(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"361-estructuras-condicionales",children:"3.6.1 Estructuras Condicionales"})}),"\n",(0,i.jsxs)(n.p,{children:["Las condicionales permiten que un programa tome decisiones basadas en condiciones espec\xedficas. En esta secci\xf3n, desarrollaremos las estructuras condicionales m\xe1s comunes en JavaScript: ",(0,i.jsx)(n.strong,{children:"if...else"})," \ud83e\udd14\u27a1\ufe0f, ",(0,i.jsx)(n.strong,{children:"switch"})," \ud83d\udd04 y ",(0,i.jsx)(n.strong,{children:"el operador ternario"})," \u2753\u27a1\ufe0f\u2714\ufe0f, complementando la explicaci\xf3n con diagramas ",(0,i.jsx)(n.strong,{children:"Mermaid"})," \ud83d\uddbc\ufe0f para facilitar la comprensi\xf3n."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"if-else-if-y-else-",children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"if"}),", ",(0,i.jsx)(n.code,{children:"else if"})," y ",(0,i.jsx)(n.code,{children:"else"})]})," \ud83d\udd0d"]}),"\n",(0,i.jsxs)(n.p,{children:["La estructura condicional b\xe1sica en JavaScript es el bloque ",(0,i.jsx)(n.code,{children:"if"}),". Puedes usar ",(0,i.jsx)(n.code,{children:"else if"})," para manejar m\xfaltiples condiciones y ",(0,i.jsx)(n.code,{children:"else"})," como una opci\xf3n predeterminada."]}),"\n",(0,i.jsxs)(n.h3,{id:"sintaxis-\ufe0f",children:[(0,i.jsx)(n.strong,{children:"Sintaxis"})," \ud83d\udee0\ufe0f"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"if (condici\xf3n) {\r\n    // C\xf3digo a ejecutar si la condici\xf3n es verdadera\r\n} else if (otraCondici\xf3n) {\r\n    // C\xf3digo a ejecutar si otra condici\xf3n es verdadera\r\n} else {\r\n    // C\xf3digo a ejecutar si ninguna condici\xf3n es verdadera\r\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"diagrama-de-flujo-",children:[(0,i.jsx)(n.strong,{children:"Diagrama de Flujo"})," \ud83e\udde0"]}),"\n",(0,i.jsxs)(n.p,{children:["El siguiente diagrama muestra el flujo l\xf3gico de un bloque ",(0,i.jsx)(n.code,{children:"if...else"}),":"]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TD\r\n    Inicio[Inicio \ud83c\udfc1]\r\n    Condicion1{\xbfCondici\xf3n es verdadera? \u2705\u274c}\r\n    Bloque1[Ejecutar bloque de c\xf3digo del if \ud83d\udd8a\ufe0f]\r\n    OtraCondicion{\xbfOtra condici\xf3n es verdadera? \u2705\u274c}\r\n    Bloque2[Ejecutar bloque de c\xf3digo del else if \ud83d\udd8a\ufe0f]\r\n    Bloque3[Ejecutar bloque de c\xf3digo del else \ud83d\udd8a\ufe0f]\r\n    Fin[Fin \ud83c\udfc1]\r\n\r\n    Inicio --\x3e Condicion1\r\n    Condicion1 -- S\xed --\x3e Bloque1 --\x3e Fin\r\n    Condicion1 -- No --\x3e OtraCondicion\r\n    OtraCondicion -- S\xed --\x3e Bloque2 --\x3e Fin\r\n    OtraCondicion -- No --\x3e Bloque3 --\x3e Fin"}),"\n",(0,i.jsxs)(n.h3,{id:"ejemplo-",children:[(0,i.jsx)(n.strong,{children:"Ejemplo"})," \ud83d\udcda"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'let temperatura = 25;\r\n\r\nif (temperatura < 10) {\r\n    console.log("Hace fr\xedo \ud83e\udd76");\r\n} else if (temperatura >= 10 && temperatura <= 30) {\r\n    console.log("El clima es templado \ud83c\udf24\ufe0f");\r\n} else {\r\n    console.log("Hace calor \ud83e\udd75");\r\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"operador-ternario-\ufe0f\ufe0f",children:[(0,i.jsx)(n.strong,{children:"Operador Ternario"})," \u2753\u27a1\ufe0f\u2714\ufe0f"]}),"\n",(0,i.jsxs)(n.p,{children:["El operador ternario es una forma compacta de escribir un ",(0,i.jsx)(n.code,{children:"if...else"})," cuando solo hay una condici\xf3n simple que evaluar."]}),"\n",(0,i.jsxs)(n.h3,{id:"sintaxis-\ufe0f-1",children:[(0,i.jsx)(n.strong,{children:"Sintaxis"})," \ud83d\udee0\ufe0f"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"condici\xf3n ? expresi\xf3n_si_verdadera : expresi\xf3n_si_falsa;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"diagrama-de-flujo--1",children:[(0,i.jsx)(n.strong,{children:"Diagrama de Flujo"})," \ud83e\udde0"]}),"\n",(0,i.jsx)(n.p,{children:"El siguiente diagrama muestra c\xf3mo se eval\xfaa una expresi\xf3n con el operador ternario:"}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TD\r\n    Inicio[Inicio \ud83c\udfc1]\r\n    Condicion{\xbfCondici\xf3n es verdadera? \u2705\u274c}\r\n    Expresion1[Retorna expresi\xf3n verdadera \u2714\ufe0f]\r\n    Expresion2[Retorna expresi\xf3n falsa \u274c]\r\n    Fin[Fin \ud83c\udfc1]\r\n\r\n    Inicio --\x3e Condicion\r\n    Condicion -- S\xed --\x3e Expresion1 --\x3e Fin\r\n    Condicion -- No --\x3e Expresion2 --\x3e Fin"}),"\n",(0,i.jsxs)(n.h3,{id:"ejemplo--1",children:[(0,i.jsx)(n.strong,{children:"Ejemplo"})," \ud83d\udcda"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'let edad = 20;\r\nlet mensaje = edad >= 18 ? "Mayor de edad \ud83c\udf89" : "Menor de edad \ud83d\udeb8";\r\nconsole.log(mensaje); // "Mayor de edad \ud83c\udf89"\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"switch-",children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"switch"})})," \ud83d\udd04"]}),"\n",(0,i.jsxs)(n.p,{children:["El ",(0,i.jsx)(n.code,{children:"switch"})," es una estructura condicional utilizada para evaluar un valor contra m\xfaltiples casos posibles, ejecutando el bloque correspondiente al primer caso que coincida."]}),"\n",(0,i.jsxs)(n.h3,{id:"sintaxis-\ufe0f-2",children:[(0,i.jsx)(n.strong,{children:"Sintaxis"})," \ud83d\udee0\ufe0f"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"switch (expresi\xf3n) {\r\n    case valor1:\r\n        // C\xf3digo a ejecutar si expresi\xf3n === valor1\r\n        break;\r\n    case valor2:\r\n        // C\xf3digo a ejecutar si expresi\xf3n === valor2\r\n        break;\r\n    default:\r\n        // C\xf3digo a ejecutar si no coincide ning\xfan caso\r\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"diagrama-de-flujo--2",children:[(0,i.jsx)(n.strong,{children:"Diagrama de Flujo"})," \ud83e\udde0"]}),"\n",(0,i.jsxs)(n.p,{children:["El siguiente diagrama muestra el flujo l\xf3gico de un bloque ",(0,i.jsx)(n.code,{children:"switch"}),":"]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TD\r\n    Inicio[Inicio \ud83c\udfc1]\r\n    Evaluacion[Evaluar expresi\xf3n \ud83e\udd14]\r\n    Caso1{\xbfCoincide con caso 1? \u2705\u274c}\r\n    Bloque1[Ejecutar bloque de caso 1 \ud83d\udd8a\ufe0f]\r\n    Caso2{\xbfCoincide con caso 2? \u2705\u274c}\r\n    Bloque2[Ejecutar bloque de caso 2 \ud83d\udd8a\ufe0f]\r\n    BloqueDefault[Ejecutar bloque default \ud83d\udd04]\r\n    Fin[Fin \ud83c\udfc1]\r\n\r\n    Inicio --\x3e Evaluacion\r\n    Evaluacion --\x3e Caso1\r\n    Caso1 -- S\xed --\x3e Bloque1 --\x3e Fin\r\n    Caso1 -- No --\x3e Caso2\r\n    Caso2 -- S\xed --\x3e Bloque2 --\x3e Fin\r\n    Caso2 -- No --\x3e BloqueDefault --\x3e Fin"}),"\n",(0,i.jsxs)(n.h3,{id:"ejemplo--2",children:[(0,i.jsx)(n.strong,{children:"Ejemplo"})," \ud83d\udcda"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'let dia = "s\xe1bado";\r\n\r\nswitch (dia) {\r\n    case "lunes":\r\n        console.log("Inicio de la semana \ud83d\udcc5");\r\n        break;\r\n    case "viernes":\r\n        console.log("Fin de la semana \ud83c\udf89");\r\n        break;\r\n    case "s\xe1bado":\r\n    case "domingo":\r\n        console.log("Es fin de semana \ud83c\udfd6\ufe0f");\r\n        break;\r\n    default:\r\n        console.log("D\xeda normal \ud83d\udcc6");\r\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"comparativa-entre-ifelse-y-switch",children:(0,i.jsxs)(n.strong,{children:["Comparativa entre ",(0,i.jsx)(n.code,{children:"if...else"})," y ",(0,i.jsx)(n.code,{children:"switch"})]})}),"\n",(0,i.jsx)(n.p,{children:"Ambas estructuras permiten tomar decisiones, pero hay casos espec\xedficos donde una es m\xe1s adecuada que la otra."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Aspecto"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"if...else"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"switch"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Condiciones"})}),(0,i.jsx)(n.td,{children:"Permite evaluar expresiones complejas."}),(0,i.jsx)(n.td,{children:"Eval\xfaa una sola expresi\xf3n contra m\xfaltiples casos."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Legibilidad"})}),(0,i.jsx)(n.td,{children:"Puede volverse dif\xedcil de leer con muchas condiciones."}),(0,i.jsx)(n.td,{children:"M\xe1s claro para comparar un solo valor con m\xfaltiples casos."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Flexibilidad"})}),(0,i.jsx)(n.td,{children:"M\xe1s flexible, admite operadores l\xf3gicos y comparaciones complejas."}),(0,i.jsx)(n.td,{children:"Menos flexible, ideal para valores exactos."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo-comparativo",children:(0,i.jsx)(n.strong,{children:"Ejemplo Comparativo"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Con ",(0,i.jsx)(n.code,{children:"if...else"})]}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'let nivel = "intermedio";\r\n\r\nif (nivel === "principiante") {\r\n    console.log("Curso b\xe1sico");\r\n} else if (nivel === "intermedio") {\r\n    console.log("Curso intermedio");\r\n} else if (nivel === "avanzado") {\r\n    console.log("Curso avanzado");\r\n} else {\r\n    console.log("Nivel no reconocido");\r\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Con ",(0,i.jsx)(n.code,{children:"switch"})]}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'let nivel = "intermedio";\r\n\r\nswitch (nivel) {\r\n    case "principiante":\r\n        console.log("Curso b\xe1sico");\r\n        break;\r\n    case "intermedio":\r\n        console.log("Curso intermedio");\r\n        break;\r\n    case "avanzado":\r\n        console.log("Curso avanzado");\r\n        break;\r\n    default:\r\n        console.log("Nivel no reconocido");\r\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"buenas-pr\xe1cticas",children:(0,i.jsx)(n.strong,{children:"Buenas Pr\xe1cticas"})}),"\n",(0,i.jsx)(n.admonition,{title:"Sigue estos consejos...",type:"tip",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Prefiere ",(0,i.jsx)(n.code,{children:"switch"})," para m\xfaltiples valores de un mismo tipo"]}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cuando comparas un solo valor contra muchos posibles, ",(0,i.jsx)(n.code,{children:"switch"})," es m\xe1s legible."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Simplifica condiciones con operadores l\xf3gicos"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'if (edad >= 18 && edad <= 65) {\r\n    console.log("Edad laboral");\r\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Evita anidar demasiados bloques ",(0,i.jsx)(n.code,{children:"if"})]}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Usa funciones o estructuras como ",(0,i.jsx)(n.code,{children:"switch"})," para mejorar la claridad."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Usa siempre ",(0,i.jsx)(n.code,{children:"default"})," en un ",(0,i.jsx)(n.code,{children:"switch"})]}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aseg\xfarate de manejar casos no esperados."}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var s=r(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);