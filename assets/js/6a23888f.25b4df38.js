"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[27],{4312:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"lenguajes de marca/4 XML Conceptos B\xe1sicos/4.5 Espacios de Nombres","title":"4.5 Espacios de Nombres","description":"Los espacios de nombres en XML (Namespaces) evitan conflictos cuando diferentes documentos XML contienen elementos con el mismo nombre, pero con significados diferentes. Se utilizan principalmente en:","source":"@site/docs/lenguajes de marca/4 XML Conceptos B\xe1sicos/4.5 Espacios de Nombres.md","sourceDirName":"lenguajes de marca/4 XML Conceptos B\xe1sicos","slug":"/lenguajes de marca/4 XML Conceptos B\xe1sicos/4.5 Espacios de Nombres","permalink":"/docs/lenguajes de marca/4 XML Conceptos B\xe1sicos/4.5 Espacios de Nombres","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"llmmSidebar","previous":{"title":"4.4 Atributos XML","permalink":"/docs/lenguajes de marca/4 XML Conceptos B\xe1sicos/4.4 Atributos"},"next":{"title":"UT5 - XML Validaci\xf3n DTD/Schema","permalink":"/docs/lenguajes de marca/5 Validaci\xf3n XML/"}}');var r=o(4848),i=o(8453);const c={sidebar_position:5},d="4.5 Espacios de Nombres",t={},l=[{value:"<strong>Declaraci\xf3n de Espacios de Nombres (xmlns)</strong>",id:"declaraci\xf3n-de-espacios-de-nombres-xmlns",level:2},{value:"<strong>Uso de Prefijos en Espacios de Nombres</strong>",id:"uso-de-prefijos-en-espacios-de-nombres",level:2},{value:"<strong>Namespace por Defecto vs. Namespace con Prefijos</strong>",id:"namespace-por-defecto-vs-namespace-con-prefijos",level:2},{value:"\ud83d\udccc Namespace por Defecto (sin prefijo)",id:"-namespace-por-defecto-sin-prefijo",level:3},{value:"\ud83d\udccc Namespace con Prefijos",id:"-namespace-con-prefijos",level:3},{value:"<strong>Combinaci\xf3n de M\xfaltiples Espacios de Nombres</strong>",id:"combinaci\xf3n-de-m\xfaltiples-espacios-de-nombres",level:2}];function a(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"45-espacios-de-nombres",children:"4.5 Espacios de Nombres"})}),"\n",(0,r.jsxs)(n.p,{children:["Los ",(0,r.jsx)(n.strong,{children:"espacios de nombres en XML (Namespaces)"})," evitan ",(0,r.jsx)(n.strong,{children:"conflictos"})," cuando diferentes documentos XML contienen ",(0,r.jsx)(n.strong,{children:"elementos con el mismo nombre"}),", pero con significados diferentes. Se utilizan principalmente en:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Intercambio de datos entre sistemas"})," que pueden tener estructuras XML similares."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Combinaci\xf3n de m\xfaltiples documentos XML"})," en un solo archivo."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Uso de est\xe1ndares XML"})," como ",(0,r.jsx)(n.strong,{children:"SOAP, RDF y XSLT"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\ud83d\udccc ",(0,r.jsx)(n.strong,{children:"Ejemplo del Problema"})," (sin namespace):",(0,r.jsx)(n.br,{}),"\n","Si combinamos informaci\xf3n de ",(0,r.jsx)(n.strong,{children:"Pok\xe9mon"})," y ",(0,r.jsx)(n.strong,{children:"Entrenadores"}),", ambos podr\xedan tener elementos ",(0,r.jsx)(n.code,{children:"<nombre>"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<pokemon>\r\n    <nombre>Pikachu</nombre>\r\n</pokemon>\r\n\r\n<entrenador>\r\n    <nombre>Ash Ketchum</nombre>\r\n</entrenador>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u274c ",(0,r.jsx)(n.strong,{children:"Confusi\xf3n"}),": \xbfEl ",(0,r.jsx)(n.code,{children:"<nombre>"})," hace referencia a un ",(0,r.jsx)(n.strong,{children:"Pok\xe9mon"})," o a un ",(0,r.jsx)(n.strong,{children:"Entrenador"}),"?"]}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"Soluci\xf3n"}),": Usar ",(0,r.jsx)(n.strong,{children:"Espacios de Nombres (Namespaces)"})," para diferenciarlos."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"declaraci\xf3n-de-espacios-de-nombres-xmlns",children:(0,r.jsx)(n.strong,{children:"Declaraci\xf3n de Espacios de Nombres (xmlns)"})}),"\n",(0,r.jsxs)(n.p,{children:["La ",(0,r.jsx)(n.strong,{children:"declaraci\xf3n de un espacio de nombres"})," se realiza con el atributo ",(0,r.jsx)(n.code,{children:'xmlns="URL"'}),", donde la ",(0,r.jsx)(n.strong,{children:"URL no es un enlace real"}),", sino un ",(0,r.jsx)(n.strong,{children:"identificador \xfanico"}),". Por ejemplo..."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\r\n<pokedex xmlns="http://ejemplo.com/pokemon">\r\n    <pokemon>\r\n        <nombre>Pikachu</nombre>\r\n        <tipo>El\xe9ctrico</tipo>\r\n    </pokemon>\r\n</pokedex>\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.strong,{children:"Explicaci\xf3n"}),":"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'xmlns="http://ejemplo.com/pokemon"'})," \u2192 Define un ",(0,r.jsx)(n.strong,{children:"espacio de nombres por defecto"})," para ",(0,r.jsx)(n.code,{children:"<pokedex>"})," y todos sus elementos internos."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sin prefijos"}),", todos los elementos dentro del ",(0,r.jsx)(n.code,{children:"<pokedex>"})," pertenecen autom\xe1ticamente a este espacio de nombres."]}),"\n"]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"uso-de-prefijos-en-espacios-de-nombres",children:(0,r.jsx)(n.strong,{children:"Uso de Prefijos en Espacios de Nombres"})}),"\n",(0,r.jsxs)(n.p,{children:["Cuando combinamos ",(0,r.jsx)(n.strong,{children:"m\xfaltiples fuentes XML"}),", es mejor ",(0,r.jsx)(n.strong,{children:"usar prefijos"})," para diferenciar los datos. Mira este ejemplo:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\r\n<datos xmlns:p="http://ejemplo.com/pokemon"\r\n       xmlns:e="http://ejemplo.com/entrenadores">\r\n       \r\n    <p:pokemon>\r\n        <p:nombre>Pikachu</p:nombre>\r\n        <p:tipo>El\xe9ctrico</p:tipo>\r\n    </p:pokemon>\r\n\r\n    <e:entrenador>\r\n        <e:nombre>Ash Ketchum</e:nombre>\r\n        <e:region>Kanto</e:region>\r\n    </e:entrenador>\r\n\r\n</datos>\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.strong,{children:"Explicaci\xf3n"}),":"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Espacio de Nombres para Pok\xe9mon:"})," ",(0,r.jsx)(n.code,{children:'xmlns:p="http://ejemplo.com/pokemon"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Espacio de Nombres para Entrenadores:"})," ",(0,r.jsx)(n.code,{children:'xmlns:e="http://ejemplo.com/entrenadores"'})]}),"\n",(0,r.jsxs)(n.li,{children:["Se usan ",(0,r.jsxs)(n.strong,{children:["prefijos (",(0,r.jsx)(n.code,{children:"p:"})," y ",(0,r.jsx)(n.code,{children:"e:"}),")"]})," para diferenciar los elementos."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.strong,{children:"Ventaja"}),":"]}),(0,r.jsxs)(n.p,{children:["Se pueden combinar ",(0,r.jsx)(n.strong,{children:"diferentes estructuras XML"})," sin confusi\xf3n."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"namespace-por-defecto-vs-namespace-con-prefijos",children:(0,r.jsx)(n.strong,{children:"Namespace por Defecto vs. Namespace con Prefijos"})}),"\n",(0,r.jsxs)(n.p,{children:["XML permite definir ",(0,r.jsx)(n.strong,{children:"espacios de nombres por defecto"})," (sin prefijos) o con ",(0,r.jsx)(n.strong,{children:"prefijos expl\xedcitos"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"-namespace-por-defecto-sin-prefijo",children:"\ud83d\udccc Namespace por Defecto (sin prefijo)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<pokedex xmlns="http://ejemplo.com/pokemon">\r\n    <pokemon>\r\n        <nombre>Pikachu</nombre>\r\n        <tipo>El\xe9ctrico</tipo>\r\n    </pokemon>\r\n</pokedex>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsxs)(n.strong,{children:["Todos los elementos dentro de ",(0,r.jsx)(n.code,{children:"<pokedex>"})," usan autom\xe1ticamente el namespace de Pok\xe9mon."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"-namespace-con-prefijos",children:"\ud83d\udccc Namespace con Prefijos"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<pokedex xmlns:p="http://ejemplo.com/pokemon">\r\n    <p:pokemon>\r\n        <p:nombre>Pikachu</p:nombre>\r\n        <p:tipo>El\xe9ctrico</p:tipo>\r\n    </p:pokemon>\r\n</pokedex>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsxs)(n.strong,{children:["El prefijo ",(0,r.jsx)(n.code,{children:"p:"})," deja claro que los elementos pertenecen al espacio de nombres de Pok\xe9mon."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"combinaci\xf3n-de-m\xfaltiples-espacios-de-nombres",children:(0,r.jsx)(n.strong,{children:"Combinaci\xf3n de M\xfaltiples Espacios de Nombres"})}),"\n",(0,r.jsxs)(n.p,{children:["Si un documento XML combina ",(0,r.jsx)(n.strong,{children:"Pok\xe9mon, Entrenadores y Movimientos"}),", podemos definir ",(0,r.jsx)(n.strong,{children:"varios espacios de nombres"}),". Por ejemplo as\xed..."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\r\n<datos xmlns:p="http://ejemplo.com/pokemon"\r\n       xmlns:e="http://ejemplo.com/entrenadores"\r\n       xmlns:m="http://ejemplo.com/movimientos">\r\n\r\n    <p:pokemon id="025">\r\n        <p:nombre>Pikachu</p:nombre>\r\n        <p:tipo>El\xe9ctrico</p:tipo>\r\n        <m:movimientos>\r\n            <m:movimiento>Impactrueno</m:movimiento>\r\n            <m:movimiento>Rayo</m:movimiento>\r\n        </m:movimientos>\r\n    </p:pokemon>\r\n\r\n    <e:entrenador>\r\n        <e:nombre>Ash Ketchum</e:nombre>\r\n        <e:region>Kanto</e:region>\r\n        <e:pokemon_favorito ref="p:025" />\r\n    </e:entrenador>\r\n\r\n</datos>\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.strong,{children:"Explicaci\xf3n"}),":"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:'xmlns:p="http://ejemplo.com/pokemon"'})})," \u2192 Prefijo ",(0,r.jsx)(n.code,{children:"p:"})," para Pok\xe9mon."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:'xmlns:e="http://ejemplo.com/entrenadores"'})})," \u2192 Prefijo ",(0,r.jsx)(n.code,{children:"e:"})," para Entrenadores."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:'xmlns:m="http://ejemplo.com/movimientos"'})})," \u2192 Prefijo ",(0,r.jsx)(n.code,{children:"m:"})," para Movimientos."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'<e:pokemon_favorito ref="p:025" />'})," \u2192 Hace referencia a Pikachu usando su espacio de nombres."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.strong,{children:"Beneficio"}),":"]}),(0,r.jsxs)(n.p,{children:["Podemos ",(0,r.jsx)(n.strong,{children:"diferenciar los datos f\xe1cilmente"}),", asegurando que los sistemas entiendan qu\xe9 informaci\xf3n pertenece a qu\xe9 categor\xeda."]})]}),"\n",(0,r.jsx)(n.hr,{})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>d});var s=o(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);