"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[5345],{72044:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/integracion","title":"C\xf3digo de integraci\xf3n en Android","description":"El el flujo b\xe1sico y los pasos esenciales para integrar Firebase Authentication en una app Android con Java se resumen a continuaci\xf3n :","source":"@site/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/integracion.md","sourceDirName":"aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication","slug":"/aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/integracion","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/integracion","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"movilesSidebar","previous":{"title":"Configuraci\xf3n","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/configuracion"},"next":{"title":"Ejemplo Email-Password","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Autentication/ejemplo"}}');var r=i(74848),a=i(28453);const t={sidebar_position:2},o="C\xf3digo de integraci\xf3n en Android",c={},l=[{value:"1. <strong>Dependencias</strong>:",id:"1-dependencias",level:3},{value:"2. <strong>Inicializar Firebase</strong>:",id:"2-inicializar-firebase",level:3},{value:"3. <strong>Obtener instancia de Auth</strong>:",id:"3-obtener-instancia-de-auth",level:3},{value:"4. <strong>Crear cuenta con email y password</strong>:",id:"4-crear-cuenta-con-email-y-password",level:3},{value:"5. <strong>Iniciar sesi\xf3n con email y password</strong>:",id:"5-iniciar-sesi\xf3n-con-email-y-password",level:3},{value:"6. <strong>Cerrar sesi\xf3n</strong>:",id:"6-cerrar-sesi\xf3n",level:3},{value:"<strong>Diagrama</strong>",id:"diagrama",level:3}];function d(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"c\xf3digo-de-integraci\xf3n-en-android",children:"C\xf3digo de integraci\xf3n en Android"})}),"\n",(0,r.jsx)(n.p,{children:"El el flujo b\xe1sico y los pasos esenciales para integrar Firebase Authentication en una app Android con Java se resumen a continuaci\xf3n :"}),"\n",(0,r.jsxs)(n.h3,{id:"1-dependencias",children:["1. ",(0,r.jsx)(n.strong,{children:"Dependencias"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'implementation ("com.google.firebase:firebase-auth:21.0.8")\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"2-inicializar-firebase",children:["2. ",(0,r.jsx)(n.strong,{children:"Inicializar Firebase"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// En tu Activity \r\nFirebaseApp.initializeApp(context);\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"3-obtener-instancia-de-auth",children:["3. ",(0,r.jsx)(n.strong,{children:"Obtener instancia de Auth"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"FirebaseAuth mAuth = FirebaseAuth.getInstance();\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"4-crear-cuenta-con-email-y-password",children:["4. ",(0,r.jsx)(n.strong,{children:"Crear cuenta con email y password"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"mAuth.createUserWithEmailAndPassword(email, password)\r\n    .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {\r\n        @Override\r\n        public void onComplete(@NonNull Task<AuthResult> task) {\r\n            if (task.isSuccessful()) {\r\n                FirebaseUser user = mAuth.getCurrentUser();\r\n                // Registro exitoso\r\n            } else {\r\n                // Error\r\n            }\r\n        }\r\n    });\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"5-iniciar-sesi\xf3n-con-email-y-password",children:["5. ",(0,r.jsx)(n.strong,{children:"Iniciar sesi\xf3n con email y password"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"mAuth.signInWithEmailAndPassword(email, password)\r\n    .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {\r\n        @Override\r\n        public void onComplete(@NonNull Task<AuthResult> task) {\r\n            if (task.isSuccessful()) {\r\n                FirebaseUser user = mAuth.getCurrentUser();\r\n                // Inicio de sesi\xf3n exitoso\r\n            } else {\r\n                // Error\r\n            }\r\n        }\r\n    });\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"6-cerrar-sesi\xf3n",children:["6. ",(0,r.jsx)(n.strong,{children:"Cerrar sesi\xf3n"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"mAuth.signOut();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"diagrama",children:(0,r.jsx)(n.strong,{children:"Diagrama"})}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\r\n    A[Usuario abre la app] --\x3e B[Selecciona m\xe9todo de autenticaci\xf3n]\r\n    B --\x3e C[Credenciales enviadas a Firebase Auth]\r\n    C --\x3e D[Firebase valida y devuelve token de usuario]\r\n    D --\x3e E[App recibe informaci\xf3n del usuario autenticado]"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Diagrama"}),": Flujo b\xe1sico de autenticaci\xf3n en Firebase."]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.strong,{children:"Importante"}),":"]}),(0,r.jsxs)(n.p,{children:["Para ",(0,r.jsx)(n.strong,{children:"autenticaciones con Google, Facebook, Twitter, etc."}),", se necesita configurar los ",(0,r.jsx)(n.strong,{children:"SDK"})," y el ",(0,r.jsx)(n.strong,{children:"ID de cliente"})," correspondiente (cada proveedor sigue un paso adicional espec\xedfico). La l\xf3gica general es similar, pero con pasos de autorizaci\xf3n previos al env\xedo de credenciales a Firebase."]})]}),"\n",(0,r.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(96540);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);