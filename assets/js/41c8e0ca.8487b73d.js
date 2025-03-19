"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[6376],{7150:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"lenguajes de marca/5 Validaci\xf3n XML/XDS/ElementosSimples","title":"Elementos Simples","description":"Los elementos simples son aquellos que contienen \xfanicamente datos de texto y no pueden tener subelementos ni atributos complejos (aunque s\xed pueden tener atributos simples). Estos elementos se definen en el XSD utilizando el elemento ` y se asocian a un tipo simple, ya sea uno predefinido (como xsint, xs:date`, etc.) o uno definido por el usuario con restricciones espec\xedficas.","source":"@site/docs/lenguajes de marca/5 Validaci\xf3n XML/XDS/ElementosSimples.md","sourceDirName":"lenguajes de marca/5 Validaci\xf3n XML/XDS","slug":"/lenguajes de marca/5 Validaci\xf3n XML/XDS/ElementosSimples","permalink":"/docs/lenguajes de marca/5 Validaci\xf3n XML/XDS/ElementosSimples","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"llmmSidebar","previous":{"title":"XSD bien formado","permalink":"/docs/lenguajes de marca/5 Validaci\xf3n XML/XDS/bienFormado"},"next":{"title":"Elementos Complejos","permalink":"/docs/lenguajes de marca/5 Validaci\xf3n XML/XDS/Elementos Complejos"}}');var d=n(74848),l=n(28453);const r={sidebar_position:3},c="Elementos Simples",o={},a=[{value:"1. <strong>Declaraci\xf3n y Caracter\xedsticas</strong>",id:"1-declaraci\xf3n-y-caracter\xedsticas",level:2},{value:"2. <strong>Atributos <code>fixed</code> y <code>default</code></strong>",id:"2-atributos-fixed-y-default",level:2},{value:"Elemento con atributo <code>fixed</code>",id:"elemento-con-atributo-fixed",level:3},{value:"Elemento con atributo <code>default</code>",id:"elemento-con-atributo-default",level:3},{value:"3. <strong>Tipos de Datos Predefinidos</strong>",id:"3-tipos-de-datos-predefinidos",level:2},{value:"4. <strong>Tipos Personalizados</strong>",id:"4-tipos-personalizados",level:2},{value:"<code>length</code>",id:"length",level:3},{value:"<code>minLength</code>",id:"minlength",level:3},{value:"<code>maxLength</code>",id:"maxlength",level:3},{value:"<code>enumeration</code>",id:"enumeration",level:3},{value:"<code>minInclusive</code>",id:"mininclusive",level:3},{value:"<code>maxInclusive</code>",id:"maxinclusive",level:3},{value:"<code>totalDigits</code>",id:"totaldigits",level:3},{value:"<code>fractionDigits</code>",id:"fractiondigits",level:3},{value:"<code>pattern</code>",id:"pattern",level:3},{value:"<strong>Ejemplo 1: Solo letras may\xfasculas</strong>",id:"ejemplo-1-solo-letras-may\xfasculas",level:4},{value:"<strong>Ejemplo 2: C\xf3digo postal de 5 d\xedgitos</strong>",id:"ejemplo-2-c\xf3digo-postal-de-5-d\xedgitos",level:4},{value:"<code>whiteSpace</code>",id:"whitespace",level:3}];function t(e){const s={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"elementos-simples",children:"Elementos Simples"})}),"\n",(0,d.jsxs)(s.p,{children:["Los ",(0,d.jsx)(s.strong,{children:"elementos simples"})," son aquellos que contienen \xfanicamente datos de texto y no pueden tener subelementos ni atributos complejos (aunque s\xed pueden tener atributos simples). Estos elementos se definen en el XSD utilizando el elemento ",(0,d.jsx)(s.code,{children:"<xs:element>"})," y se asocian a un ",(0,d.jsx)(s.strong,{children:"tipo simple"}),", ya sea uno predefinido (como ",(0,d.jsx)(s.code,{children:"xs:string"}),", ",(0,d.jsx)(s.code,{children:"xs:int"}),", ",(0,d.jsx)(s.code,{children:"xs:date"}),", etc.) o uno definido por el usuario con restricciones espec\xedficas."]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.h2,{id:"1-declaraci\xf3n-y-caracter\xedsticas",children:["1. ",(0,d.jsx)(s.strong,{children:"Declaraci\xf3n y Caracter\xedsticas"})]}),"\n",(0,d.jsxs)(s.p,{children:["La declaraci\xf3n b\xe1sica de un elemento simple se realiza con los atributos ",(0,d.jsx)(s.code,{children:"name"})," y ",(0,d.jsx)(s.code,{children:"type"}),". Por ejemplo:"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:element name="Nombre" type="xs:string"/>\n'})}),"\n",(0,d.jsx)(s.admonition,{type:"info",children:(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"name"})}),": Define el nombre del elemento."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"type"})}),": Indica el tipo de dato simple que se espera (en este caso, una cadena de texto)."]}),"\n"]})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.h2,{id:"2-atributos-fixed-y-default",children:["2. ",(0,d.jsxs)(s.strong,{children:["Atributos ",(0,d.jsx)(s.code,{children:"fixed"})," y ",(0,d.jsx)(s.code,{children:"default"})]})]}),"\n",(0,d.jsx)(s.p,{children:"En la declaraci\xf3n de un elemento (o atributo), se pueden especificar valores fijos o por defecto:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"fixed"})}),": Indica que el valor debe ser exactamente el especificado."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"default"})}),": Establece un valor predeterminado en caso de que el elemento (o atributo) no est\xe9 presente en el documento XML."]}),"\n"]}),"\n",(0,d.jsxs)(s.h3,{id:"elemento-con-atributo-fixed",children:["Elemento con atributo ",(0,d.jsx)(s.code,{children:"fixed"})]}),"\n",(0,d.jsxs)(s.p,{children:["En este ejemplo, el elemento ",(0,d.jsx)(s.strong,{children:"Pais"}),' debe tener siempre el valor "Espa\xf1a". Si se incluye en el XML, solo se acepta ese valor:']}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:element name="Pais" type="xs:string" fixed="Espa\xf1a"/>\n'})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.em,{children:"Uso en XML:"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<Pais xmlns="http://www.ejemplo.org/datos">Espa\xf1a</Pais>\n'})}),"\n",(0,d.jsxs)(s.h3,{id:"elemento-con-atributo-default",children:["Elemento con atributo ",(0,d.jsx)(s.code,{children:"default"})]}),"\n",(0,d.jsxs)(s.p,{children:["Aqu\xed, el elemento ",(0,d.jsx)(s.strong,{children:"Moneda"}),' tiene un valor por defecto "EUR". Si el XML no lo especifica, se asume "EUR":']}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:element name="Moneda" type="xs:string" default="EUR"/>\n'})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.em,{children:"Uso en XML (cuando se omite):"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<Transaccion xmlns="http://www.ejemplo.org/datos">\r\n    <Moneda/> \x3c!-- Se asume "EUR" por defecto --\x3e\r\n</Transaccion>\n'})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.h2,{id:"3-tipos-de-datos-predefinidos",children:["3. ",(0,d.jsx)(s.strong,{children:"Tipos de Datos Predefinidos"})]}),"\n",(0,d.jsxs)(s.p,{children:["Los ",(0,d.jsx)(s.strong,{children:"tipos de datos predefinidos"})," en XML Schema (XSD) son un conjunto de tipos integrados que vienen definidos en la especificaci\xf3n de XML Schema. Estos tipos sirven para describir y validar el contenido de los elementos y atributos de un documento XML sin necesidad de definir nuevos tipos desde cero. Al usarlos, se garantiza que los datos se ajusten a formatos y restricciones estandarizadas, lo que facilita la interoperabilidad y la validaci\xf3n."]}),"\n",(0,d.jsx)(s.p,{children:"Algunos de los Tipos de Datos Predefinidos m\xe1s comunes son..."}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{children:"Descripci\xf3n"}),(0,d.jsx)(s.th,{children:"Ejemplo de Valor"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:string"})}),(0,d.jsx)(s.td,{children:"Cadena de texto."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'"Hola mundo"'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:integer"})}),(0,d.jsx)(s.td,{children:"N\xfameros enteros."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"42"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:decimal"})}),(0,d.jsx)(s.td,{children:"N\xfameros decimales."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"3.1416"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:boolean"})}),(0,d.jsxs)(s.td,{children:["Valores l\xf3gicos: ",(0,d.jsx)(s.code,{children:"true"})," o ",(0,d.jsx)(s.code,{children:"false"}),"."]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"true"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:date"})}),(0,d.jsx)(s.td,{children:"Fecha en formato ISO (YYYY-MM-DD)."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"2025-12-31"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:time"})}),(0,d.jsxs)(s.td,{children:["Hora en formato ISO (HH:MM",":SS",")."]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"14:30:00"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:dateTime"})}),(0,d.jsx)(s.td,{children:"Fecha y hora combinadas en formato ISO."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"2025-12-31T14:30:00"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:duration"})}),(0,d.jsx)(s.td,{children:"Intervalo de tiempo."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"P2Y6M5DT12H35M30S"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:base64Binary"})}),(0,d.jsx)(s.td,{children:"Datos binarios codificados en base64."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"SGVsbG8="})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"xs:anyURI"})}),(0,d.jsx)(s.td,{children:"Identificador de recurso (URI)."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"http://www.ejemplo.org"})})]})]})]}),"\n",(0,d.jsx)(s.p,{children:"A continuaci\xf3n, se muestra un fragmento de un XSD que declara elementos utilizando algunos de los tipos predefinidos:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:schema \r\n    xmlns:xs="http://www.w3.org/2001/XMLSchema"\r\n    targetNamespace="http://www.ejemplo.org/datos"\r\n    xmlns="http://www.ejemplo.org/datos"\r\n    elementFormDefault="qualified">\r\n\r\n  \x3c!-- Elemento para un nombre de persona --\x3e\r\n  <xs:element name="Nombre" type="xs:string"/>\r\n  \r\n  \x3c!-- Elemento para la edad --\x3e\r\n  <xs:element name="Edad" type="xs:integer"/>\r\n  \r\n  \x3c!-- Elemento para la fecha de nacimiento --\x3e\r\n  <xs:element name="FechaNacimiento" type="xs:date"/>\r\n  \r\n  \x3c!-- Elemento para indicar si est\xe1 activo --\x3e\r\n  <xs:element name="Activo" type="xs:boolean"/>\r\n\r\n</xs:schema>\n'})}),"\n",(0,d.jsxs)(s.admonition,{title:"En este ejemplo:",type:"info",children:[(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["El elemento ",(0,d.jsx)(s.code,{children:"<Nombre>"})," se define con el tipo ",(0,d.jsx)(s.code,{children:"xs:string"}),"."]}),"\n",(0,d.jsxs)(s.li,{children:["El elemento ",(0,d.jsx)(s.code,{children:"<Edad>"})," se define con el tipo ",(0,d.jsx)(s.code,{children:"xs:integer"}),"."]}),"\n",(0,d.jsxs)(s.li,{children:["El elemento ",(0,d.jsx)(s.code,{children:"<FechaNacimiento>"})," se define con el tipo ",(0,d.jsx)(s.code,{children:"xs:date"}),"."]}),"\n",(0,d.jsxs)(s.li,{children:["El elemento ",(0,d.jsx)(s.code,{children:"<Activo>"})," se define con el tipo ",(0,d.jsx)(s.code,{children:"xs:boolean"}),"."]}),"\n"]}),(0,d.jsx)(s.p,{children:"Cada uno de estos elementos se valida autom\xe1ticamente para asegurar que el contenido del XML se ajuste a la definici\xf3n del tipo predefinido."})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.h2,{id:"4-tipos-personalizados",children:["4. ",(0,d.jsx)(s.strong,{children:"Tipos Personalizados"})]}),"\n",(0,d.jsxs)(s.p,{children:["En XML Schema (XSD) es posible definir ",(0,d.jsx)(s.strong,{children:"tipos simples personalizados"})," que heredan de un tipo predefinido (como ",(0,d.jsx)(s.code,{children:"xs:string"})," o ",(0,d.jsx)(s.code,{children:"xs:integer"}),") y a los cuales se les pueden aplicar restricciones espec\xedficas mediante ",(0,d.jsx)(s.strong,{children:"facetas"}),". Estas restricciones permiten controlar aspectos como la longitud de una cadena, el formato de los datos o el rango permitido en valores num\xe9ricos. A continuaci\xf3n, se describen las principales facetas y se muestra un ejemplo para cada una de ellas."]}),"\n",(0,d.jsxs)(s.p,{children:["Las ",(0,d.jsx)(s.strong,{children:"facetas"})," permiten limitar y validar el contenido de los elementos simples. Algunas de las facetas m\xe1s utilizadas son:"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Faceta"}),(0,d.jsx)(s.th,{children:"Descripci\xf3n"}),(0,d.jsx)(s.th,{children:"Ejemplo"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"length"})}),(0,d.jsx)(s.td,{children:"Longitud fija de la cadena"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:length value="10"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"minLength"})}),(0,d.jsx)(s.td,{children:"Longitud m\xednima de la cadena"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:minLength value="1"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"maxLength"})}),(0,d.jsx)(s.td,{children:"Longitud m\xe1xima de la cadena"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:maxLength value="50"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"pattern"})}),(0,d.jsx)(s.td,{children:"Expresi\xf3n regular que debe cumplir el valor"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:pattern value="[A-Za-z ]+"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"enumeration"})}),(0,d.jsx)(s.td,{children:"Conjunto de valores permitidos"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:enumeration value="Rojo"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"minInclusive"})}),(0,d.jsx)(s.td,{children:"Valor m\xednimo permitido (incluyente)"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:minInclusive value="0"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"minExclusive"})}),(0,d.jsx)(s.td,{children:"Valor m\xednimo permitido (excluyente)"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:minExclusive value="0"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"maxInclusive"})}),(0,d.jsx)(s.td,{children:"Valor m\xe1ximo permitido (incluyente)"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:maxInclusive value="100"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"maxExclusive"})}),(0,d.jsx)(s.td,{children:"Valor m\xe1ximo permitido (excluyente)"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:maxExclusive value="100"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"totalDigits"})}),(0,d.jsx)(s.td,{children:"N\xfamero total de d\xedgitos permitidos"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:totalDigits value="5"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"fractionDigits"})}),(0,d.jsx)(s.td,{children:"N\xfamero m\xe1ximo de d\xedgitos a la derecha del punto decimal"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:fractionDigits value="2"/>'})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"whiteSpace"})}),(0,d.jsx)(s.td,{children:"C\xf3mo tratal espacios en blanco, tabulaciones, saltos de l\xednea..."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'<xs:whiteSpace value="preserve"/>'})})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"length",children:(0,d.jsx)(s.code,{children:"length"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," Define la longitud exacta permitida para una cadena."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Ejemplo:"})," Se requiere que una cadena tenga exactamente 8 caracteres."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="CadenaConLength">\r\n  <xs:restriction base="xs:string">\r\n    <xs:length value="8"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"ABCDEFGH"'}),", ",(0,d.jsx)(s.code,{children:'"12345678"'}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"ABC"'}),", ",(0,d.jsx)(s.code,{children:'"ABCDEFGHI"'}),", ",(0,d.jsx)(s.code,{children:'""'})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"minlength",children:(0,d.jsx)(s.code,{children:"minLength"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," Define la longitud m\xednima permitida para una cadena."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="CadenaConMinLength">\r\n  <xs:restriction base="xs:string">\r\n    <xs:minLength value="3"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"abc"'}),", ",(0,d.jsx)(s.code,{children:'"hello"'}),", ",(0,d.jsx)(s.code,{children:'"1234"'}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'""'}),", ",(0,d.jsx)(s.code,{children:'"a"'}),", ",(0,d.jsx)(s.code,{children:'"ab"'})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"maxlength",children:(0,d.jsx)(s.code,{children:"maxLength"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," Establece la longitud m\xe1xima permitida para una cadena."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="CadenaConMaxLength">\r\n  <xs:restriction base="xs:string">\r\n    <xs:maxLength value="10"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"12345"'}),", ",(0,d.jsx)(s.code,{children:'"Hola"'}),", ",(0,d.jsx)(s.code,{children:'"ABCDEFGHIJ"'}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"ABCDEFGHIJK"'}),", ",(0,d.jsx)(s.code,{children:'"1234567890123"'})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"enumeration",children:(0,d.jsx)(s.code,{children:"enumeration"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," Define un conjunto fijo de valores permitidos."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="Color">\r\n  <xs:restriction base="xs:string">\r\n    <xs:enumeration value="Rojo"/>\r\n    <xs:enumeration value="Verde"/>\r\n    <xs:enumeration value="Azul"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"Rojo"'}),", ",(0,d.jsx)(s.code,{children:'"Verde"'}),", ",(0,d.jsx)(s.code,{children:'"Azul"'}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"Amarillo"'}),", ",(0,d.jsx)(s.code,{children:'"rojo"'})," (diferencia en may\xfasculas), ",(0,d.jsx)(s.code,{children:'"azul "'})," (espacio extra)"]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"mininclusive",children:(0,d.jsx)(s.code,{children:"minInclusive"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," Valor m\xednimo permitido (incluyente)."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="NumeroConMinInclusive">\r\n  <xs:restriction base="xs:integer">\r\n    <xs:minInclusive value="10"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:"10"}),", ",(0,d.jsx)(s.code,{children:"15"}),", ",(0,d.jsx)(s.code,{children:"100"}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:"9"}),", ",(0,d.jsx)(s.code,{children:"0"}),", ",(0,d.jsx)(s.code,{children:"-5"})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"maxinclusive",children:(0,d.jsx)(s.code,{children:"maxInclusive"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," Valor m\xe1ximo permitido (incluyente)."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="NumeroConMaxInclusive">\r\n  <xs:restriction base="xs:integer">\r\n    <xs:maxInclusive value="100"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:"50"}),", ",(0,d.jsx)(s.code,{children:"100"}),", ",(0,d.jsx)(s.code,{children:"0"}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:"101"}),", ",(0,d.jsx)(s.code,{children:"200"})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"totaldigits",children:(0,d.jsx)(s.code,{children:"totalDigits"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," N\xfamero total de d\xedgitos permitidos."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="NumeroTotalDigitos">\r\n  <xs:restriction base="xs:decimal">\r\n    <xs:totalDigits value="5"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:"12345"}),", ",(0,d.jsx)(s.code,{children:"999.9"}),", ",(0,d.jsx)(s.code,{children:"12.34"}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:"123456"}),", ",(0,d.jsx)(s.code,{children:"99999.9"})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"fractiondigits",children:(0,d.jsx)(s.code,{children:"fractionDigits"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," N\xfamero m\xe1ximo de d\xedgitos a la derecha del punto decimal."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="NumeroConDecimales">\r\n  <xs:restriction base="xs:decimal">\r\n    <xs:fractionDigits value="2"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:"123.45"}),", ",(0,d.jsx)(s.code,{children:"99.99"}),", ",(0,d.jsx)(s.code,{children:"12.3"}),", ",(0,d.jsx)(s.code,{children:"10.00"}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:"123.456"}),", ",(0,d.jsx)(s.code,{children:"99.999"})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"pattern",children:(0,d.jsx)(s.code,{children:"pattern"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," Expresi\xf3n regular que deben cumplir los valores."]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"ejemplo-1-solo-letras-may\xfasculas",children:(0,d.jsx)(s.strong,{children:"Ejemplo 1: Solo letras may\xfasculas"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="SoloMayusculas">\r\n  <xs:restriction base="xs:string">\r\n    <xs:pattern value="[A-Z]+"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"HELLO"'}),", ",(0,d.jsx)(s.code,{children:'"WORLD"'}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"hello"'}),", ",(0,d.jsx)(s.code,{children:'"Hello123"'}),", ",(0,d.jsx)(s.code,{children:'"HELLO WORLD"'})]}),"\n",(0,d.jsx)(s.h4,{id:"ejemplo-2-c\xf3digo-postal-de-5-d\xedgitos",children:(0,d.jsx)(s.strong,{children:"Ejemplo 2: C\xf3digo postal de 5 d\xedgitos"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="CodigoPostal">\r\n  <xs:restriction base="xs:string">\r\n    <xs:pattern value="\\d{5}"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"12345"'}),", ",(0,d.jsx)(s.code,{children:'"98765"'}),(0,d.jsx)(s.br,{}),"\n","\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"})," ",(0,d.jsx)(s.code,{children:'"1234"'}),", ",(0,d.jsx)(s.code,{children:'"123456"'}),", ",(0,d.jsx)(s.code,{children:'"12A45"'})]}),"\n",(0,d.jsxs)(s.admonition,{title:"recuerda",type:"info",children:[(0,d.jsxs)(s.p,{children:["Las expresiones regulares usadas en ",(0,d.jsx)(s.code,{children:"pattern"})," siguen reglas espec\xedficas. Aqu\xed algunos elementos clave:"]}),(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"S\xedmbolo"}),(0,d.jsx)(s.th,{children:"Significado"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"."})}),(0,d.jsx)(s.td,{children:"Cualquier car\xe1cter excepto nueva l\xednea"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"\\d"})}),(0,d.jsxs)(s.td,{children:["Cualquier d\xedgito (",(0,d.jsx)(s.code,{children:"0-9"}),")"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"\\w"})}),(0,d.jsxs)(s.td,{children:["Cualquier letra, n\xfamero o guion bajo (",(0,d.jsx)(s.code,{children:"a-z"}),", ",(0,d.jsx)(s.code,{children:"A-Z"}),", ",(0,d.jsx)(s.code,{children:"0-9"}),", ",(0,d.jsx)(s.code,{children:"_"}),")"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"[abc]"})}),(0,d.jsxs)(s.td,{children:["Uno de los caracteres especificados (",(0,d.jsx)(s.code,{children:"a"}),", ",(0,d.jsx)(s.code,{children:"b"})," o ",(0,d.jsx)(s.code,{children:"c"}),")"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"[a-z]"})}),(0,d.jsxs)(s.td,{children:["Cualquier letra min\xfascula (",(0,d.jsx)(s.code,{children:"a"})," hasta ",(0,d.jsx)(s.code,{children:"z"}),")"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"[A-Z]"})}),(0,d.jsxs)(s.td,{children:["Cualquier letra may\xfascula (",(0,d.jsx)(s.code,{children:"A"})," hasta ",(0,d.jsx)(s.code,{children:"Z"}),")"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"[0-9]"})}),(0,d.jsxs)(s.td,{children:["Cualquier n\xfamero (",(0,d.jsx)(s.code,{children:"0"})," a ",(0,d.jsx)(s.code,{children:"9"}),")"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"{n}"})}),(0,d.jsxs)(s.td,{children:["Exactamente ",(0,d.jsx)(s.code,{children:"n"})," repeticiones"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"{n,}"})}),(0,d.jsxs)(s.td,{children:["Al menos ",(0,d.jsx)(s.code,{children:"n"})," repeticiones"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"{n,m}"})}),(0,d.jsxs)(s.td,{children:["Entre ",(0,d.jsx)(s.code,{children:"n"})," y ",(0,d.jsx)(s.code,{children:"m"})," repeticiones"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"+"})}),(0,d.jsx)(s.td,{children:"Al menos una repetici\xf3n"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"*"})}),(0,d.jsx)(s.td,{children:"Cero o m\xe1s repeticiones"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"?"})}),(0,d.jsx)(s.td,{children:"Cero o una repetici\xf3n"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"^"})}),(0,d.jsx)(s.td,{children:"Inicio de la cadena"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"$"})}),(0,d.jsx)(s.td,{children:"Fin de la cadena"})]})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"whitespace",children:(0,d.jsx)(s.code,{children:"whiteSpace"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Descripci\xf3n:"})," Controla el tratamiento de los espacios en blanco en una cadena.","\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"preserve"}),": Conserva los espacios tal como aparecen en la entrada."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"replace"}),": Reemplaza todos los espacios en blanco por espacios simples."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"collapse"}),": Elimina espacios al inicio y al final, y reduce m\xfaltiples espacios internos a uno solo."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-xml",children:'<xs:simpleType name="TextoConWhiteSpace">\r\n  <xs:restriction base="xs:string">\r\n    <xs:whiteSpace value="collapse"/>\r\n  </xs:restriction>\r\n</xs:simpleType>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u2705 ",(0,d.jsx)(s.strong,{children:"Valores v\xe1lidos (colapsando espacios):"}),(0,d.jsx)(s.br,{}),"\n","Entrada: ",(0,d.jsx)(s.code,{children:'"   Hola    mundo   "'})," \u2192 Se almacena como ",(0,d.jsx)(s.code,{children:'"Hola mundo"'}),(0,d.jsx)(s.br,{}),"\n","Entrada: ",(0,d.jsx)(s.code,{children:'"Hola     "'})," \u2192 Se almacena como ",(0,d.jsx)(s.code,{children:'"Hola"'}),(0,d.jsx)(s.br,{}),"\n","Entrada: ",(0,d.jsx)(s.code,{children:'"  XML     Schema  "'})," \u2192 Se almacena como ",(0,d.jsx)(s.code,{children:'"XML Schema"'})]}),"\n",(0,d.jsxs)(s.p,{children:["\u274c ",(0,d.jsx)(s.strong,{children:"Valores inv\xe1lidos:"}),(0,d.jsx)(s.br,{}),"\n","Este tipo de faceta no invalida valores, sino que modifica la forma en que se almacenan. Si se usa ",(0,d.jsx)(s.code,{children:"collapse"}),", una entrada con espacios innecesarios ser\xe1 ajustada autom\xe1ticamente."]}),"\n",(0,d.jsx)(s.hr,{})]})}function x(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(96540);const d={},l=i.createContext(d);function r(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);