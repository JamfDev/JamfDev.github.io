"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[638],{1378:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"lenguajes de marca/3 Java Script/3.7 DOM/3.7.7 Interacci\xf3n con Formularios","title":"3.7.7 Interacci\xf3n con Formularios","description":"Los formularios son una parte esencial de las p\xe1ginas web, ya que permiten a los usuarios interactuar con la aplicaci\xf3n enviando datos. JavaScript ofrece una amplia gama de propiedades y m\xe9todos para acceder, validar y manejar eventos relacionados con los formularios. Este apartado explica c\xf3mo interactuar de manera efectiva con formularios mediante el DOM. Las propiedades y eventos m\xe1s comunes son...","source":"@site/docs/lenguajes de marca/3 Java Script/3.7 DOM/3.7.7 Interacci\xf3n con Formularios.md","sourceDirName":"lenguajes de marca/3 Java Script/3.7 DOM","slug":"/lenguajes de marca/3 Java Script/3.7 DOM/3.7.7 Interacci\xf3n con Formularios","permalink":"/docs/lenguajes de marca/3 Java Script/3.7 DOM/3.7.7 Interacci\xf3n con Formularios","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"llmmSidebar","previous":{"title":"3.7.6 Navegaci\xf3n por el DOM","permalink":"/docs/lenguajes de marca/3 Java Script/3.7 DOM/3.7.6 Navegaci\xf3n por el DOM"},"next":{"title":"UT4 - XML Caracter\xedsticas","permalink":"/docs/lenguajes de marca/4 XML Conceptos B\xe1sicos/"}}');var a=n(4848),s=n(8453);const i={sidebar_position:6},l="3.7.7 Interacci\xf3n con Formularios",c={},d=[{value:"<strong>Acceso a Formularios y Elementos</strong>",id:"acceso-a-formularios-y-elementos",level:2},{value:"1. <code>document.forms</code>",id:"1-documentforms",level:3},{value:"2. <code>form.elements</code>",id:"2-formelements",level:3},{value:"<strong>Validaci\xf3n de Formularios</strong>",id:"validaci\xf3n-de-formularios",level:2},{value:"1. Propiedades Comunes",id:"1-propiedades-comunes",level:3},{value:"<strong><code>value</code></strong>",id:"value",level:4},{value:"<strong><code>checked</code></strong>",id:"checked",level:4},{value:"<strong>Ejemplo: Validar Campos Requeridos</strong>",id:"ejemplo-validar-campos-requeridos",level:4},{value:"2. M\xe9todos de Validaci\xf3n",id:"2-m\xe9todos-de-validaci\xf3n",level:3},{value:"<strong><code>checkValidity()</code></strong>",id:"checkvalidity",level:4},{value:"<strong><code>setCustomValidity()</code></strong>",id:"setcustomvalidity",level:4},{value:"<strong>Ejemplo: Validar y Personalizar Mensajes</strong>",id:"ejemplo-validar-y-personalizar-mensajes",level:4},{value:"<strong>Manejo de Eventos de Formularios</strong>",id:"manejo-de-eventos-de-formularios",level:2},{value:"1. Evento <code>submit</code>",id:"1-evento-submit",level:3},{value:"2. Evento <code>change</code>",id:"2-evento-change",level:3},{value:"3. Evento <code>input</code>",id:"3-evento-input",level:3},{value:"Ejemplo de Manejo de Eventos",id:"ejemplo-de-manejo-de-eventos",level:3}];function t(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"377-interacci\xf3n-con-formularios",children:"3.7.7 Interacci\xf3n con Formularios"})}),"\n",(0,a.jsx)(r.p,{children:"Los formularios son una parte esencial de las p\xe1ginas web, ya que permiten a los usuarios interactuar con la aplicaci\xf3n enviando datos. JavaScript ofrece una amplia gama de propiedades y m\xe9todos para acceder, validar y manejar eventos relacionados con los formularios. Este apartado explica c\xf3mo interactuar de manera efectiva con formularios mediante el DOM. Las propiedades y eventos m\xe1s comunes son..."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Propiedad/M\xe9todo"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Descripci\xf3n"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"document.forms"})}),(0,a.jsx)(r.td,{children:"Devuelve una colecci\xf3n de todos los formularios del documento."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"form.elements"})}),(0,a.jsx)(r.td,{children:"Devuelve todos los elementos dentro de un formulario espec\xedfico."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"value"})}),(0,a.jsx)(r.td,{children:"Devuelve o establece el valor de un campo de entrada."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"checked"})}),(0,a.jsx)(r.td,{children:"Indica si un checkbox o radio est\xe1 seleccionado."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"checkValidity()"})}),(0,a.jsx)(r.td,{children:"Comprueba si un campo es v\xe1lido seg\xfan las restricciones definidas."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"setCustomValidity()"})}),(0,a.jsx)(r.td,{children:"Define un mensaje personalizado para errores de validaci\xf3n."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Eventos"})}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"submit"})}),(0,a.jsx)(r.td,{children:"Se dispara al enviar un formulario."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"change"})}),(0,a.jsx)(r.td,{children:"Se dispara al cambiar y perder el foco de un campo."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"input"})}),(0,a.jsx)(r.td,{children:"Se dispara cada vez que el usuario modifica el contenido de un campo."})]})]})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"acceso-a-formularios-y-elementos",children:(0,a.jsx)(r.strong,{children:"Acceso a Formularios y Elementos"})}),"\n",(0,a.jsxs)(r.h3,{id:"1-documentforms",children:["1. ",(0,a.jsx)(r.code,{children:"document.forms"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Descripci\xf3n:"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"document.forms"})," es una colecci\xf3n que contiene todos los formularios (",(0,a.jsx)(r.code,{children:"<form>"}),") presentes en el documento."]}),"\n",(0,a.jsxs)(r.li,{children:["Puedes acceder a un formulario por su \xedndice o por el valor de su atributo ",(0,a.jsx)(r.code,{children:"name"})," o ",(0,a.jsx)(r.code,{children:"id"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Ejemplo B\xe1sico:"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:'<form id="formulario1" name="miFormulario">\r\n  <input type="text" name="usuario" placeholder="Usuario">\r\n  <input type="password" name="contrase\xf1a" placeholder="Contrase\xf1a">\r\n</form>\r\n<script>\r\n  const formulario = document.forms[\'miFormulario\']; // Acceso por nombre\r\n  console.log(formulario.id); // "formulario1"\r\n<\/script>\n'})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(r.h3,{id:"2-formelements",children:["2. ",(0,a.jsx)(r.code,{children:"form.elements"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Descripci\xf3n:"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"form.elements"})," devuelve una colecci\xf3n de todos los elementos de formulario dentro de un formulario espec\xedfico (campos de entrada, botones, etc.)."]}),"\n",(0,a.jsxs)(r.li,{children:["Los elementos se pueden acceder por su \xedndice o por el valor del atributo ",(0,a.jsx)(r.code,{children:"name"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Ejemplo B\xe1sico:"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:'<form id="formulario">\r\n  <input type="text" name="usuario" placeholder="Usuario">\r\n  <input type="password" name="contrase\xf1a" placeholder="Contrase\xf1a">\r\n</form>\r\n<script>\r\n  const formulario = document.getElementById(\'formulario\');\r\n  const usuario = formulario.elements[\'usuario\'];\r\n  const contrase\xf1a = formulario.elements[\'contrase\xf1a\'];\r\n  console.log(usuario.placeholder); // "Usuario"\r\n  console.log(contrase\xf1a.type);     // "password"\r\n<\/script>\n'})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"validaci\xf3n-de-formularios",children:(0,a.jsx)(r.strong,{children:"Validaci\xf3n de Formularios"})}),"\n",(0,a.jsx)(r.p,{children:"JavaScript permite validar formularios antes de enviarlos, proporcionando una mejor experiencia de usuario y reduciendo la carga del servidor."}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"1-propiedades-comunes",children:"1. Propiedades Comunes"}),"\n",(0,a.jsx)(r.h4,{id:"value",children:(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"value"})})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Devuelve o establece el valor de un campo de entrada."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:'console.log(usuario.value); // Devuelve el texto introducido\r\nusuario.value = "NuevoUsuario"; // Cambia el valor del campo\n'})}),"\n",(0,a.jsx)(r.h4,{id:"checked",children:(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"checked"})})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Indica si un checkbox o radio button est\xe1 seleccionado."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"const checkbox = formulario.elements['aceptar'];\r\nconsole.log(checkbox.checked); // true o false\r\ncheckbox.checked = true; // Marca el checkbox\n"})}),"\n",(0,a.jsx)(r.h4,{id:"ejemplo-validar-campos-requeridos",children:(0,a.jsx)(r.strong,{children:"Ejemplo: Validar Campos Requeridos"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:'<form id="formulario">\r\n  <input type="text" name="usuario" placeholder="Usuario" required>\r\n  <button type="submit">Enviar</button>\r\n</form>\r\n<script>\r\n  const formulario = document.getElementById(\'formulario\');\r\n  formulario.addEventListener(\'submit\', (evento) => {\r\n    const usuario = formulario.elements[\'usuario\'];\r\n    if (!usuario.value) {\r\n      evento.preventDefault(); // Evita el env\xedo\r\n      alert(\'Por favor, completa el campo de usuario.\');\r\n    }\r\n  });\r\n<\/script>\n'})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"2-m\xe9todos-de-validaci\xf3n",children:"2. M\xe9todos de Validaci\xf3n"}),"\n",(0,a.jsx)(r.h4,{id:"checkvalidity",children:(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"checkValidity()"})})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Verifica si un elemento cumple con todas sus restricciones de validaci\xf3n (como ",(0,a.jsx)(r.code,{children:"required"}),", ",(0,a.jsx)(r.code,{children:"minlength"}),", ",(0,a.jsx)(r.code,{children:"pattern"}),", etc.)."]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"if (usuario.checkValidity()) {\r\n  console.log('El campo es v\xe1lido');\r\n} else {\r\n  console.log('El campo no es v\xe1lido');\r\n}\n"})}),"\n",(0,a.jsx)(r.h4,{id:"setcustomvalidity",children:(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"setCustomValidity()"})})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Establece un mensaje de error personalizado que aparece cuando el campo no es v\xe1lido."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"usuario.setCustomValidity('El nombre de usuario no puede estar vac\xedo');\n"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h4,{id:"ejemplo-validar-y-personalizar-mensajes",children:(0,a.jsx)(r.strong,{children:"Ejemplo: Validar y Personalizar Mensajes"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:'<form id="formulario">\r\n  <input type="email" name="correo" placeholder="Correo electr\xf3nico" required>\r\n  <button type="submit">Enviar</button>\r\n</form>\r\n<script>\r\n  const formulario = document.getElementById(\'formulario\');\r\n  formulario.addEventListener(\'submit\', (evento) => {\r\n    const correo = formulario.elements[\'correo\'];\r\n    if (!correo.checkValidity()) {\r\n      evento.preventDefault();\r\n      correo.setCustomValidity(\'Por favor, introduce un correo v\xe1lido.\');\r\n      correo.reportValidity(); // Muestra el mensaje de validaci\xf3n\r\n    }\r\n  });\r\n<\/script>\n'})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"manejo-de-eventos-de-formularios",children:(0,a.jsx)(r.strong,{children:"Manejo de Eventos de Formularios"})}),"\n",(0,a.jsx)(r.p,{children:"Los formularios generan eventos espec\xedficos que permiten interactuar y responder a las acciones del usuario."}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(r.h3,{id:"1-evento-submit",children:["1. Evento ",(0,a.jsx)(r.code,{children:"submit"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Se dispara cuando se intenta enviar un formulario."}),"\n",(0,a.jsx)(r.li,{children:"Permite interceptar el env\xedo para realizar validaciones."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"formulario.addEventListener('submit', (evento) => {\r\n  evento.preventDefault(); // Evita el env\xedo\r\n  console.log('Formulario enviado');\r\n});\n"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(r.h3,{id:"2-evento-change",children:["2. Evento ",(0,a.jsx)(r.code,{children:"change"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Se dispara cuando el valor de un campo cambia y pierde el foco."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"usuario.addEventListener('change', () => {\r\n  console.log(`Nuevo valor: ${usuario.value}`);\r\n});\n"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(r.h3,{id:"3-evento-input",children:["3. Evento ",(0,a.jsx)(r.code,{children:"input"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Se dispara cada vez que el usuario modifica el valor de un campo (sin esperar a perder el foco)."}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"usuario.addEventListener('input', () => {\r\n  console.log(`Valor actual: ${usuario.value}`);\r\n});\n"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"ejemplo-de-manejo-de-eventos",children:"Ejemplo de Manejo de Eventos"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:"<form id=\"formulario\">\r\n  <input type=\"text\" name=\"usuario\" placeholder=\"Usuario\">\r\n  <input type=\"password\" name=\"contrase\xf1a\" placeholder=\"Contrase\xf1a\">\r\n  <input type=\"checkbox\" name=\"aceptar\" id=\"aceptar\">\r\n  <label for=\"aceptar\">Acepto los t\xe9rminos</label>\r\n  <button type=\"submit\">Enviar</button>\r\n</form>\r\n<script>\r\n  const formulario = document.getElementById('formulario');\r\n\r\n  formulario.addEventListener('submit', (evento) => {\r\n    evento.preventDefault();\r\n    const usuario = formulario.elements['usuario'];\r\n    const contrase\xf1a = formulario.elements['contrase\xf1a'];\r\n    const aceptar = formulario.elements['aceptar'];\r\n\r\n    if (!usuario.value || !contrase\xf1a.value || !aceptar.checked) {\r\n      alert('Por favor, completa todos los campos y acepta los t\xe9rminos.');\r\n      return;\r\n    }\r\n\r\n    console.log('Formulario v\xe1lido. Enviando...');\r\n  });\r\n\r\n  formulario.elements['usuario'].addEventListener('input', () => {\r\n    console.log('El usuario est\xe1 escribiendo...');\r\n  });\r\n\r\n  formulario.elements['aceptar'].addEventListener('change', (evento) => {\r\n    console.log(`Checkbox: ${evento.target.checked ? 'Marcado' : 'Desmarcado'}`);\r\n  });\r\n<\/script>\n"})}),"\n",(0,a.jsx)(r.hr,{})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var o=n(6540);const a={},s=o.createContext(a);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);