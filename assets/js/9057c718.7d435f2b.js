"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[941],{5578:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"persistencia/Shared Preferences","title":"Shared Preferences","description":"\xbfQu\xe9 es SharedPreferences?","source":"@site/docs/persistencia/Shared Preferences.md","sourceDirName":"persistencia","slug":"/persistencia/Shared Preferences","permalink":"/docs/persistencia/Shared Preferences","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/persistencia/Shared Preferences.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"persistenciaSidebar","previous":{"title":"Conceptos Fundamentales","permalink":"/docs/persistencia/Conceptos Fundamentales"}}');var a=s(4848),i=s(8453);const o={sidebar_position:2},d=void 0,c={},l=[{value:"<strong>\xbfQu\xe9 es SharedPreferences?</strong>",id:"qu\xe9-es-sharedpreferences",level:3},{value:"<strong>Casos de Uso</strong>",id:"casos-de-uso",level:3},{value:"<strong>Caracter\xedsticas</strong>",id:"caracter\xedsticas",level:3},{value:"<strong>Tips para Usar SharedPreferences</strong>",id:"tips-para-usar-sharedpreferences",level:3},{value:"<strong>C\xf3digo de Ejemplo</strong>",id:"c\xf3digo-de-ejemplo",level:3},{value:"<strong>1. Guardar datos en SharedPreferences</strong>",id:"1-guardar-datos-en-sharedpreferences",level:4},{value:"<strong>2. Leer datos de SharedPreferences</strong>",id:"2-leer-datos-de-sharedpreferences",level:4},{value:"<strong>3. Eliminar un dato</strong>",id:"3-eliminar-un-dato",level:4},{value:"<strong>4. Limpiar todos los datos</strong>",id:"4-limpiar-todos-los-datos",level:4},{value:"<strong>Errores Comunes</strong>",id:"errores-comunes",level:3},{value:"<strong>Buenas Pr\xe1cticas</strong>",id:"buenas-pr\xe1cticas",level:3},{value:"<strong>Conclusi\xf3n</strong>",id:"conclusi\xf3n",level:3}];function t(e){const r={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h3,{id:"qu\xe9-es-sharedpreferences",children:(0,a.jsx)(r.strong,{children:"\xbfQu\xe9 es SharedPreferences?"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"SharedPreferences"})," es una herramienta proporcionada por Android para almacenar datos simples en forma de pares clave-valor. Es ideal para guardar configuraciones, preferencias del usuario y datos peque\xf1os que deben persistir entre sesiones."]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"casos-de-uso",children:(0,a.jsx)(r.strong,{children:"Casos de Uso"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Guardar configuraciones (modo oscuro, idioma preferido, etc.)."}),"\n",(0,a.jsx)(r.li,{children:"Persistir peque\xf1os datos, como el estado de inicio de sesi\xf3n."}),"\n",(0,a.jsxs)(r.li,{children:["Almacenar valores de tipo ",(0,a.jsx)(r.code,{children:"String"}),", ",(0,a.jsx)(r.code,{children:"int"}),", ",(0,a.jsx)(r.code,{children:"float"}),", ",(0,a.jsx)(r.code,{children:"boolean"})," o ",(0,a.jsx)(r.code,{children:"Set<String>"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"caracter\xedsticas",children:(0,a.jsx)(r.strong,{children:"Caracter\xedsticas"})}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Persistencia:"})," Los datos permanecen almacenados incluso si la app se cierra o el dispositivo se reinicia."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Privacidad:"})," Los datos son privados a la aplicaci\xf3n."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Facilidad de uso:"})," Proporciona m\xe9todos simples para guardar y recuperar valores."]}),"\n"]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"tips-para-usar-sharedpreferences",children:(0,a.jsx)(r.strong,{children:"Tips para Usar SharedPreferences"})}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Organiza las claves:"})," Usa constantes para definir las claves y evitar errores tipogr\xe1ficos."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Evita almacenar datos grandes:"})," SharedPreferences no est\xe1 dise\xf1ado para manejar datos complejos o voluminosos."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Realiza operaciones de lectura en el hilo principal:"})," Son r\xe1pidas y no afectan el rendimiento."]}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsxs)(r.strong,{children:["Usa ",(0,a.jsx)(r.code,{children:"apply()"})," en lugar de ",(0,a.jsx)(r.code,{children:"commit()"})," para evitar bloqueos en el hilo principal."]})}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Considera la seguridad:"})," No uses SharedPreferences para almacenar datos sensibles como contrase\xf1as (usa cifrado o almacenamiento seguro)."]}),"\n"]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"c\xf3digo-de-ejemplo",children:(0,a.jsx)(r.strong,{children:"C\xf3digo de Ejemplo"})}),"\n",(0,a.jsx)(r.h4,{id:"1-guardar-datos-en-sharedpreferences",children:(0,a.jsx)(r.strong,{children:"1. Guardar datos en SharedPreferences"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'// Crear o acceder a un archivo de preferencias\r\nSharedPreferences sharedPreferences = getSharedPreferences("MisPreferencias", Context.MODE_PRIVATE);\r\n\r\n// Editor para modificar los valores\r\nSharedPreferences.Editor editor = sharedPreferences.edit();\r\n\r\n// Guardar valores\r\neditor.putString("usuario", "Juan");\r\neditor.putInt("edad", 25);\r\neditor.putBoolean("notificaciones_activadas", true);\r\n\r\n// Aplicar los cambios (as\xedncrono)\r\neditor.apply(); // Usa commit() si necesitas confirmaci\xf3n inmediata\n'})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h4,{id:"2-leer-datos-de-sharedpreferences",children:(0,a.jsx)(r.strong,{children:"2. Leer datos de SharedPreferences"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'// Acceder al archivo de preferencias\r\nSharedPreferences sharedPreferences = getSharedPreferences("MisPreferencias", Context.MODE_PRIVATE);\r\n\r\n// Recuperar valores\r\nString usuario = sharedPreferences.getString("usuario", "Usuario no registrado");\r\nint edad = sharedPreferences.getInt("edad", 0);\r\nboolean notificaciones = sharedPreferences.getBoolean("notificaciones_activadas", false);\r\n\r\n// Mostrar los datos\r\nLog.d("SharedPreferences", "Usuario: " + usuario + ", Edad: " + edad + ", Notificaciones: " + notificaciones);\n'})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h4,{id:"3-eliminar-un-dato",children:(0,a.jsx)(r.strong,{children:"3. Eliminar un dato"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'// Eliminar una clave espec\xedfica\r\nSharedPreferences.Editor editor = sharedPreferences.edit();\r\neditor.remove("edad");\r\neditor.apply();\n'})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h4,{id:"4-limpiar-todos-los-datos",children:(0,a.jsx)(r.strong,{children:"4. Limpiar todos los datos"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"// Limpiar todas las claves y valores\r\nSharedPreferences.Editor editor = sharedPreferences.edit();\r\neditor.clear();\r\neditor.apply();\n"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"errores-comunes",children:(0,a.jsx)(r.strong,{children:"Errores Comunes"})}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsxs)(r.strong,{children:["Olvidar llamar a ",(0,a.jsx)(r.code,{children:"apply()"})," o ",(0,a.jsx)(r.code,{children:"commit()"}),":"]})," Los cambios no se guardan hasta que se llama expl\xedcitamente a estos m\xe9todos."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Acceso simult\xe1neo desde m\xfaltiples hilos:"})," Puede causar inconsistencias. Ev\xedtalo en escenarios multihilo complejos."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Almacenar datos grandes o sensibles:"})," Esto puede afectar el rendimiento y la seguridad."]}),"\n"]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"buenas-pr\xe1cticas",children:(0,a.jsx)(r.strong,{children:"Buenas Pr\xe1cticas"})}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Usar constantes para las claves:"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'public static final String PREFS_NAME = "MisPreferencias";\r\npublic static final String KEY_USUARIO = "usuario";\r\npublic static final String KEY_EDAD = "edad";\n'})}),"\n",(0,a.jsx)(r.p,{children:"Luego:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'editor.putString(KEY_USUARIO, "Juan");\n'})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Encapsular l\xf3gica en una clase helper:"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'public class SharedPreferencesHelper {\r\n    private static final String PREFS_NAME = "MisPreferencias";\r\n    private SharedPreferences sharedPreferences;\r\n\r\n    public SharedPreferencesHelper(Context context) {\r\n        sharedPreferences = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);\r\n    }\r\n\r\n    public void guardarUsuario(String usuario) {\r\n        sharedPreferences.edit().putString("usuario", usuario).apply();\r\n    }\r\n\r\n    public String obtenerUsuario() {\r\n        return sharedPreferences.getString("usuario", "Usuario no registrado");\r\n    }\r\n\r\n    public void limpiarTodo() {\r\n        sharedPreferences.edit().clear().apply();\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Uso:"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'SharedPreferencesHelper prefsHelper = new SharedPreferencesHelper(context);\r\nprefsHelper.guardarUsuario("Juan");\r\nString usuario = prefsHelper.obtenerUsuario();\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h3,{id:"conclusi\xf3n",children:(0,a.jsx)(r.strong,{children:"Conclusi\xf3n"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"SharedPreferences"})," es una herramienta poderosa para persistir datos simples en Android. Siguiendo las buenas pr\xe1cticas y comprendiendo sus limitaciones, se puede aprovechar al m\xe1ximo esta funcionalidad para mejorar la experiencia del usuario."]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>d});var n=s(6540);const a={},i=n.createContext(a);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);