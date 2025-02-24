"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[8046],{61036:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"lenguajes de marca/5 Validaci\xf3n XML/XDS/index","title":"5.2 XSD","description":"Un XSD (siglas de XML Schema Definition) es un lenguaje que permite describir la estructura y los tipos de datos de un documento XML. En otras palabras, un XSD especifica:","source":"@site/docs/lenguajes de marca/5 Validaci\xf3n XML/XDS/index.md","sourceDirName":"lenguajes de marca/5 Validaci\xf3n XML/XDS","slug":"/lenguajes de marca/5 Validaci\xf3n XML/XDS/","permalink":"/docs/lenguajes de marca/5 Validaci\xf3n XML/XDS/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"llmmSidebar","previous":{"title":"Ejemplo Caso Pr\xe1ctico","permalink":"/docs/lenguajes de marca/5 Validaci\xf3n XML/DTD/Ejemplo Caso Practico"}}');var i=s(74848),o=s(28453);const a={},c="5.2 XSD",d={},l=[{value:"<strong>\xbfEn qu\xe9 se diferencia de un DTD?</strong>",id:"en-qu\xe9-se-diferencia-de-un-dtd",level:2},{value:"<strong>Ejemplo sencillo de XSD</strong>",id:"ejemplo-sencillo-de-xsd",level:2},{value:"<strong>Ventajas principales de usar XSD</strong>",id:"ventajas-principales-de-usar-xsd",level:2}];function t(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"52-xsd",children:"5.2 XSD"})}),"\n",(0,i.jsxs)(n.p,{children:["Un ",(0,i.jsx)(n.strong,{children:"XSD"})," (siglas de ",(0,i.jsx)(n.strong,{children:"XML Schema Definition"}),") es un lenguaje que permite describir la ",(0,i.jsx)(n.strong,{children:"estructura y los tipos de datos"})," de un documento XML. En otras palabras, un XSD especifica:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Qu\xe9 elementos"})," pueden aparecer en el documento."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"C\xf3mo"})," se relacionan esos elementos (si tienen elementos hijos, en qu\xe9 orden, cu\xe1ntas veces pueden repetirse, etc.)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Qu\xe9 atributos"})," pueden llevar y de qu\xe9 tipo son."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Qu\xe9 restricciones"})," adicionales se aplican a su contenido (por ejemplo, un n\xfamero m\xednimo o m\xe1ximo de caracteres, un patr\xf3n concreto, un rango de valores\u2026)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["De esta manera, los ",(0,i.jsx)(n.strong,{children:"documentos XML"})," que se ajusten a las reglas definidas en un XSD se consideran \u201cv\xe1lidos\u201d con respecto a ese esquema."]}),"\n",(0,i.jsx)(n.h2,{id:"en-qu\xe9-se-diferencia-de-un-dtd",children:(0,i.jsx)(n.strong,{children:"\xbfEn qu\xe9 se diferencia de un DTD?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Sintaxis XML"}),": A diferencia de los DTD (Document Type Definition), un XSD est\xe1 escrito en la propia sintaxis de XML, lo que facilita la lectura por parte de herramientas y la ampliaci\xf3n del esquema."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tipado de datos"}),": Los XSD permiten definir tipos de datos num\xe9ricos, fechas, booleanos, etc., dando la posibilidad de realizar validaciones m\xe1s complejas (por ejemplo, \u201cque este valor sea un entero y est\xe9 entre 1 y 100\u201d)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Espacios de nombres"}),": Ofrece un soporte completo para Namespaces, pudiendo combinar diferentes vocabularios XML sin ambig\xfcedades."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-sencillo-de-xsd",children:(0,i.jsx)(n.strong,{children:"Ejemplo sencillo de XSD"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\r\n    <xs:element name="libros">\r\n        <xs:complexType>\r\n            <xs:sequence>\r\n                <xs:element name="libro" maxOccurs="unbounded">\r\n                    <xs:complexType>\r\n                        <xs:sequence>\r\n                            <xs:element name="titulo" type="xs:string"/>\r\n                            <xs:element name="autor" type="xs:string"/>\r\n                            <xs:element name="paginas" type="xs:integer"/>\r\n                        </xs:sequence>\r\n                    </xs:complexType>\r\n                </xs:element>\r\n            </xs:sequence>\r\n        </xs:complexType>\r\n    </xs:element>\r\n</xs:schema>\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"xs:schema"})}),": Es el elemento ra\xedz del XSD."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"xs:element"})}),": Declara un elemento, en este caso, ",(0,i.jsx)(n.code,{children:"libros"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"xs:complexType"})," y xs",":sequence"]}),": Indican que ",(0,i.jsx)(n.code,{children:"libros"})," es un tipo complejo que contiene una secuencia de subelementos."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:'maxOccurs="unbounded"'})}),": Significa que puede haber tantos ",(0,i.jsx)(n.code,{children:"<libro>"})," como se desee."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"xs:string"})," y ",(0,i.jsx)(n.code,{children:"xs:integer"})]}),": Tipos de datos predefinidos por XML Schema."]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["Un documento XML que cumpla estas reglas ser\xe1 v\xe1lido: deber\xe1 tener un elemento ra\xedz ",(0,i.jsx)(n.code,{children:"<libros>"})," que contenga uno o varios ",(0,i.jsx)(n.code,{children:"<libro>"}),", y cada ",(0,i.jsx)(n.code,{children:"<libro>"})," deber\xe1 llevar exactamente ",(0,i.jsx)(n.code,{children:"<titulo>"}),", ",(0,i.jsx)(n.code,{children:"<autor>"})," y ",(0,i.jsx)(n.code,{children:"<paginas>"})," (siendo ",(0,i.jsx)(n.code,{children:"<paginas>"})," un entero)."]}),"\n",(0,i.jsx)(n.h2,{id:"ventajas-principales-de-usar-xsd",children:(0,i.jsx)(n.strong,{children:"Ventajas principales de usar XSD"})}),"\n",(0,i.jsx)(n.admonition,{title:"ventajas XSD",type:"tip",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Validaciones m\xe1s avanzadas"}),": Permite usar restricciones sofisticadas (expresiones regulares, rangos num\xe9ricos, longitudes de cadena, etc.)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Extensibilidad"}),": Al estar escrito en XML, es m\xe1s f\xe1cil de integrar y mantener en conjunto con otras herramientas que procesan XML."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Modularidad"}),": Se puede dividir un gran esquema en varios archivos y combinarlos (por ejemplo, usando ",(0,i.jsx)(n.code,{children:"xs:import"})," o ",(0,i.jsx)(n.code,{children:"xs:include"}),")."]}),"\n"]})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(96540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);