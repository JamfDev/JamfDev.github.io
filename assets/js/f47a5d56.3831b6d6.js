"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[5707],{9298:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/index","title":"5.4.1 Authentication","description":"En este apartado abordaremos uno de los servicios m\xe1s importantes de Firebase: Firebase Authentication, el cual nos permite gestionar y autenticar usuarios en nuestras aplicaciones de manera segura y sencilla.","source":"@site/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/index.md","sourceDirName":"aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication","slug":"/aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"movilesSidebar","previous":{"title":"5.4 FireBase","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/"},"next":{"title":"Configuraci\xf3n","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/configuracion"}}');var r=i(4848),a=i(8453);const o={sidebar_position:1},c="5.4.1 Authentication",t={},l=[{value:"<strong>Descripci\xf3n y casos de uso</strong>",id:"descripci\xf3n-y-casos-de-uso",level:2},{value:"<strong>Tipos de autenticaci\xf3n</strong>",id:"tipos-de-autenticaci\xf3n",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"541-authentication",children:"5.4.1 Authentication"})}),"\n",(0,r.jsxs)(n.p,{children:["En este apartado abordaremos uno de los servicios m\xe1s importantes de Firebase: ",(0,r.jsx)(n.strong,{children:"Firebase Authentication"}),", el cual nos permite gestionar y autenticar usuarios en nuestras aplicaciones de manera segura y sencilla."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n-y-casos-de-uso",children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n y casos de uso"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Firebase Authentication"})," es un servicio que ofrece diferentes m\xe9todos de autenticaci\xf3n para que los usuarios puedan iniciar sesi\xf3n en tu aplicaci\xf3n, ya sea a trav\xe9s de:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Correo electr\xf3nico y contrase\xf1a"}),"\n",(0,r.jsx)(n.li,{children:"Redes sociales (Google, Facebook, Twitter, etc.)"}),"\n",(0,r.jsx)(n.li,{children:"Autenticaci\xf3n an\xf3nima"}),"\n",(0,r.jsx)(n.li,{children:"Tel\xe9fono (v\xeda SMS)"}),"\n",(0,r.jsx)(n.li,{children:"Proveedores federados (OAuth)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["El objetivo principal de Firebase Authentication es ",(0,r.jsx)(n.strong,{children:"simplificar la administraci\xf3n"})," de usuarios, ya que se encarga de ",(0,r.jsx)(n.strong,{children:"gestionar el ciclo de vida"})," (registro, inicio de sesi\xf3n, cierre de sesi\xf3n, recuperaci\xf3n de contrase\xf1as, etc.) y de ",(0,r.jsx)(n.strong,{children:"almacenar de forma segura"})," las credenciales."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Casos de uso"})," m\xe1s comunes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Apps que requieren un sistema de registro e inicio de sesi\xf3n (como redes sociales, tiendas en l\xednea, etc.)."}),"\n",(0,r.jsx)(n.li,{children:"Aplicaciones que ofrecen contenido personalizado o restricci\xf3n de acceso seg\xfan el perfil de usuario."}),"\n",(0,r.jsx)(n.li,{children:"Escenarios en los que se necesite validar la identidad del usuario para protecci\xf3n de datos o transacciones."}),"\n",(0,r.jsx)(n.li,{children:"Proyectos donde se requiera integraci\xf3n r\xe1pida con proveedores externos (Google, Facebook, Twitter, etc.) sin tener que implementar la autenticaci\xf3n OAuth desde cero."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"tipos-de-autenticaci\xf3n",children:(0,r.jsx)(n.strong,{children:"Tipos de autenticaci\xf3n"})}),"\n",(0,r.jsx)(n.p,{children:"Firebase Authentication ofrece varios m\xe9todos que se ajustan a diferentes necesidades y preferencias de los usuarios:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Correo electr\xf3nico y contrase\xf1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Este m\xe9todo permite a los usuarios registrarse con un email y contrase\xf1a tradicionales."}),"\n",(0,r.jsx)(n.li,{children:"Facilita funcionalidades como restablecimiento de contrase\xf1a y verificaci\xf3n de correo."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Redes sociales (OAuth)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Google, Facebook, Twitter, GitHub y Microsoft, entre otros."}),"\n",(0,r.jsx)(n.li,{children:"Los usuarios pueden autenticarse usando sus cuentas en redes sociales, agilizando el proceso de registro."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Autenticaci\xf3n an\xf3nima"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Permite que el usuario acceda a la aplicaci\xf3n sin crear una cuenta."}),"\n",(0,r.jsx)(n.li,{children:"\xdatil para apps en las que se desea probar la funcionalidad antes de que el usuario se registre formalmente."}),"\n",(0,r.jsx)(n.li,{children:"Posteriormente, se puede vincular la cuenta an\xf3nima con un m\xe9todo permanente (correo, redes sociales, etc.)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tel\xe9fono (v\xeda SMS)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Se valida el n\xfamero de tel\xe9fono del usuario enviando un SMS con un c\xf3digo de verificaci\xf3n."}),"\n",(0,r.jsx)(n.li,{children:"Especialmente \xfatil en apps donde la verificaci\xf3n por n\xfamero es prioritaria (p. ej. mensajer\xeda, apps de entrega)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Proveedores federados"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Permiten a los usuarios autenticarse mediante servicios de identidad como SAML o OpenID Connect."}),"\n",(0,r.jsx)(n.li,{children:"En entornos empresariales donde se utilizan directorios de usuarios (p. ej., Azure Active Directory)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(6540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);