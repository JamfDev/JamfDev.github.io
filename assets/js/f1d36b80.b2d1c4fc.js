"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[8803],{9622:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"aplicaciones m\xf3viles/5 Persistencia/5.2 Shared Preferences","title":"5.2 SharedPreferences","description":"\ud83d\udee0\ufe0f SharedPreferences es una soluci\xf3n perfecta para almacenar datos simples en Android, como configuraciones o preferencias de usuario. Con un uso correcto y entendiendo sus limitaciones, puedes mejorar significativamente la experiencia del usuario en tu aplicaci\xf3n.","source":"@site/docs/aplicaciones m\xf3viles/5 Persistencia/5.2 Shared Preferences.md","sourceDirName":"aplicaciones m\xf3viles/5 Persistencia","slug":"/aplicaciones m\xf3viles/5 Persistencia/5.2 Shared Preferences","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/5.2 Shared Preferences","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"movilesSidebar","previous":{"title":"5.1 Conceptos Fundamentales","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/5.1 Conceptos Fundamentales"}}');var i=n(4848),s=n(8453);const o={sidebar_position:2},d="5.2 SharedPreferences",t={},c=[{value:"\ud83d\udee0\ufe0f <code>SharedPreferences</code> es una soluci\xf3n perfecta para almacenar datos simples en Android, como configuraciones o preferencias de usuario. Con un uso correcto y entendiendo sus limitaciones, puedes mejorar significativamente la experiencia del usuario en tu aplicaci\xf3n.",id:"\ufe0f-sharedpreferences-es-una-soluci\xf3n-perfecta-para-almacenar-datos-simples-en-android-como-configuraciones-o-preferencias-de-usuario-con-un-uso-correcto-y-entendiendo-sus-limitaciones-puedes-mejorar-significativamente-la-experiencia-del-usuario-en-tu-aplicaci\xf3n",level:4},{value:"<strong>Introducci\xf3n a SharedPreferences</strong>",id:"introducci\xf3n-a-sharedpreferences",level:2},{value:"\xbfQu\xe9 son SharedPreferences?",id:"qu\xe9-son-sharedpreferences",level:3},{value:"\xbfCu\xe1ndo y por qu\xe9 utilizarlas?",id:"cu\xe1ndo-y-por-qu\xe9-utilizarlas",level:3},{value:"<strong>Uso B\xe1sico de SharedPreferences</strong>",id:"uso-b\xe1sico-de-sharedpreferences",level:2},{value:"C\xf3mo Crear o Acceder a SharedPreferences",id:"c\xf3mo-crear-o-acceder-a-sharedpreferences",level:3},{value:"M\xe9todo 1: <code>getSharedPreferences()</code>",id:"m\xe9todo-1-getsharedpreferences",level:4},{value:"M\xe9todo 2: <code>getPreferences()</code>",id:"m\xe9todo-2-getpreferences",level:4},{value:"M\xe9todo 3: <code>PreferenceManager.getDefaultSharedPreferences()</code>",id:"m\xe9todo-3-preferencemanagergetdefaultsharedpreferences",level:4},{value:"C\xf3mo Guardar Datos en SharedPreferences",id:"c\xf3mo-guardar-datos-en-sharedpreferences",level:3},{value:"Ejemplo completo:",id:"ejemplo-completo",level:4},{value:"C\xf3mo Leer Datos de SharedPreferences",id:"c\xf3mo-leer-datos-de-sharedpreferences",level:3},{value:"C\xf3mo Eliminar Datos de SharedPreferences",id:"c\xf3mo-eliminar-datos-de-sharedpreferences",level:3},{value:"Eliminar una clave espec\xedfica:",id:"eliminar-una-clave-espec\xedfica",level:4},{value:"Eliminar todos los datos:",id:"eliminar-todos-los-datos",level:4},{value:"Tipos de Datos Soportados en SharedPreferences",id:"tipos-de-datos-soportados-en-sharedpreferences",level:3},{value:"<strong>\ud83d\udd11 Claves para Usar <code>SharedPreferences</code> con \xc9xito</strong>",id:"-claves-para-usar-sharedpreferences-con-\xe9xito",level:2},{value:"\u274c <strong>Errores Comunes (\xa1Ev\xedtalos!)</strong>",id:"-errores-comunes-ev\xedtalos",level:2},{value:"\u2705 <strong>Buenas Pr\xe1cticas</strong>",id:"-buenas-pr\xe1cticas",level:2},{value:"\ud83e\udde9 <strong>Ejemplo Pr\xe1ctico</strong>",id:"-ejemplo-pr\xe1ctico",level:2},{value:"Paso 1: Crear el Layout Principal",id:"paso-1-crear-el-layout-principal",level:3},{value:"Paso 2: Crear la Clase Helper para SharedPreferences",id:"paso-2-crear-la-clase-helper-para-sharedpreferences",level:3},{value:"Paso 3: Implementar la Actividad Principal",id:"paso-3-implementar-la-actividad-principal",level:3},{value:"Paso 4: Probar la Aplicaci\xf3n",id:"paso-4-probar-la-aplicaci\xf3n",level:3}];function l(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"52-sharedpreferences",children:"5.2 SharedPreferences"})}),"\n",(0,i.jsxs)(r.h4,{id:"\ufe0f-sharedpreferences-es-una-soluci\xf3n-perfecta-para-almacenar-datos-simples-en-android-como-configuraciones-o-preferencias-de-usuario-con-un-uso-correcto-y-entendiendo-sus-limitaciones-puedes-mejorar-significativamente-la-experiencia-del-usuario-en-tu-aplicaci\xf3n",children:["\ud83d\udee0\ufe0f ",(0,i.jsx)(r.code,{children:"SharedPreferences"})," es una soluci\xf3n perfecta para almacenar datos simples en Android, como configuraciones o preferencias de usuario. Con un uso correcto y entendiendo sus limitaciones, puedes mejorar significativamente la experiencia del usuario en tu aplicaci\xf3n."]}),"\n",(0,i.jsx)(r.h2,{id:"introducci\xf3n-a-sharedpreferences",children:(0,i.jsx)(r.strong,{children:"Introducci\xf3n a SharedPreferences"})}),"\n",(0,i.jsx)(r.h3,{id:"qu\xe9-son-sharedpreferences",children:"\xbfQu\xe9 son SharedPreferences?"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"SharedPreferences"})," es una API de Android utilizada para almacenar datos clave-valor de manera persistente. Es ideal para guardar configuraciones simples o peque\xf1as cantidades de informaci\xf3n, como preferencias del usuario."]}),"\n",(0,i.jsx)(r.p,{children:"Estos datos se almacenan en un archivo XML dentro del almacenamiento privado de la aplicaci\xf3n y permanecen disponibles incluso si la aplicaci\xf3n se cierra."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"cu\xe1ndo-y-por-qu\xe9-utilizarlas",children:"\xbfCu\xe1ndo y por qu\xe9 utilizarlas?"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"SharedPreferences"})," es adecuada en las siguientes situaciones:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"\ud83c\udf17 Guardar configuraciones como modo oscuro o idioma preferido."}),"\n",(0,i.jsx)(r.li,{children:"\ud83d\udd12 Persistir peque\xf1os datos, como el estado de inicio de sesi\xf3n."}),"\n",(0,i.jsxs)(r.li,{children:["\u2714\ufe0f Almacenar valores de tipo ",(0,i.jsx)(r.code,{children:"String"}),", ",(0,i.jsx)(r.code,{children:"int"}),", ",(0,i.jsx)(r.code,{children:"float"}),", ",(0,i.jsx)(r.code,{children:"boolean"})," o ",(0,i.jsx)(r.code,{children:"Set<String>"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{title:"ventajas",type:"tip",children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Simplicidad:"})," API f\xe1cil de usar."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Persistencia autom\xe1tica:"})," Los datos permanecen despu\xe9s de cerrar la aplicaci\xf3n."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Ligero:"})," No requiere bases de datos ni estructuras complejas."]}),"\n"]})}),"\n",(0,i.jsx)(r.admonition,{title:"Desventajas",type:"danger",children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Limitado a datos peque\xf1os:"})," No es adecuado para grandes vol\xfamenes de informaci\xf3n o datos relacionales."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"No apto para datos sensibles sin cifrado adicional:"})," Los datos no est\xe1n encriptados por defecto."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Acceso limitado:"})," No se puede compartir directamente entre aplicaciones."]}),"\n"]})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"uso-b\xe1sico-de-sharedpreferences",children:(0,i.jsx)(r.strong,{children:"Uso B\xe1sico de SharedPreferences"})}),"\n",(0,i.jsx)(r.h3,{id:"c\xf3mo-crear-o-acceder-a-sharedpreferences",children:"C\xf3mo Crear o Acceder a SharedPreferences"}),"\n",(0,i.jsxs)(r.h4,{id:"m\xe9todo-1-getsharedpreferences",children:["M\xe9todo 1: ",(0,i.jsx)(r.code,{children:"getSharedPreferences()"})]}),"\n",(0,i.jsx)(r.p,{children:"Se utiliza para crear o acceder a un archivo de preferencias espec\xedfico."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'SharedPreferences sharedPreferences = getSharedPreferences("MiPreferencia", MODE_PRIVATE);\n'})}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:'"MiPreferencia"'}),": Nombre del archivo XML que contendr\xe1 los datos. Si el archivo no existe, se crea autom\xe1ticamente."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"MODE_PRIVATE"}),": Modo de acceso. Asegura que los datos solo sean accesibles por la aplicaci\xf3n."]}),"\n"]})}),"\n",(0,i.jsxs)(r.h4,{id:"m\xe9todo-2-getpreferences",children:["M\xe9todo 2: ",(0,i.jsx)(r.code,{children:"getPreferences()"})]}),"\n",(0,i.jsx)(r.p,{children:"Accede al archivo de preferencias asociado con la actividad actual. \xdatil cuando solo necesitas un archivo de preferencias."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"SharedPreferences sharedPreferences = getPreferences(MODE_PRIVATE);\n"})}),"\n",(0,i.jsxs)(r.h4,{id:"m\xe9todo-3-preferencemanagergetdefaultsharedpreferences",children:["M\xe9todo 3: ",(0,i.jsx)(r.code,{children:"PreferenceManager.getDefaultSharedPreferences()"})]}),"\n",(0,i.jsx)(r.p,{children:"Obtiene las preferencias predeterminadas compartidas en toda la aplicaci\xf3n."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(context);\n"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"c\xf3mo-guardar-datos-en-sharedpreferences",children:"C\xf3mo Guardar Datos en SharedPreferences"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Obt\xe9n un editor:"})," El editor es necesario para realizar cambios en el archivo de preferencias."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"SharedPreferences.Editor editor = sharedPreferences.edit();\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Agrega los datos:"})," Usa los m\xe9todos ",(0,i.jsx)(r.code,{children:"putX()"})," para guardar valores de diferentes tipos."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'editor.putString("usuario", "Juan");\r\neditor.putInt("edad", 30);\r\neditor.putBoolean("esActivo", true);\n'})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Guarda los cambios:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsxs)(r.strong,{children:[(0,i.jsx)(r.code,{children:"apply()"}),":"]})," Cambios as\xedncronos, no bloquea el hilo principal. Recomendado."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsxs)(r.strong,{children:[(0,i.jsx)(r.code,{children:"commit()"}),":"]})," Cambios inmediatos, pero puede bloquear el hilo principal."]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"editor.apply(); // M\xe9todo preferido\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"ejemplo-completo",children:"Ejemplo completo:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'SharedPreferences sharedPreferences = getSharedPreferences("MiPreferencia", MODE_PRIVATE);\r\nSharedPreferences.Editor editor = sharedPreferences.edit();\r\neditor.putString("nombre", "Juan");\r\neditor.putInt("edad", 25);\r\neditor.putBoolean("esEstudiante", true);\r\neditor.apply();\n'})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"c\xf3mo-leer-datos-de-sharedpreferences",children:"C\xf3mo Leer Datos de SharedPreferences"}),"\n",(0,i.jsx)(r.p,{children:"Para leer los datos almacenados:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Obt\xe9n la instancia de SharedPreferences."}),"\n",(0,i.jsxs)(r.li,{children:["Usa los m\xe9todos ",(0,i.jsx)(r.code,{children:"getX()"})," para recuperar valores."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Ejemplo:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'SharedPreferences sharedPreferences = getSharedPreferences("MiPreferencia", MODE_PRIVATE);\r\n\r\nString nombre = sharedPreferences.getString("nombre", "Desconocido");\r\nint edad = sharedPreferences.getInt("edad", 0);\r\nboolean esEstudiante = sharedPreferences.getBoolean("esEstudiante", false);\r\n\r\nLog.d("SharedPreferences", "Nombre: " + nombre + ", Edad: " + edad + ", Estudiante: " + esEstudiante);\n'})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:'"Desconocido"'}),", ",(0,i.jsx)(r.code,{children:"0"}),", ",(0,i.jsx)(r.code,{children:"false"}),": Valores por defecto si no se encuentra la clave."]}),"\n"]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"c\xf3mo-eliminar-datos-de-sharedpreferences",children:"C\xf3mo Eliminar Datos de SharedPreferences"}),"\n",(0,i.jsx)(r.h4,{id:"eliminar-una-clave-espec\xedfica",children:"Eliminar una clave espec\xedfica:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'SharedPreferences.Editor editor = sharedPreferences.edit();\r\neditor.remove("nombre");\r\neditor.apply();\n'})}),"\n",(0,i.jsx)(r.h4,{id:"eliminar-todos-los-datos",children:"Eliminar todos los datos:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"SharedPreferences.Editor editor = sharedPreferences.edit();\r\neditor.clear();\r\neditor.apply();\n"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"tipos-de-datos-soportados-en-sharedpreferences",children:"Tipos de Datos Soportados en SharedPreferences"}),"\n",(0,i.jsxs)(r.p,{children:["Los m\xe9todos proporcionados por ",(0,i.jsx)(r.strong,{children:"SharedPreferences"})," y su editor (",(0,i.jsx)(r.code,{children:"SharedPreferences.Editor"}),") permiten trabajar con los siguientes tipos de datos:"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Tipo de Dato"}),(0,i.jsx)(r.th,{children:"M\xe9todo para Guardar"}),(0,i.jsx)(r.th,{children:"M\xe9todo para Leer"}),(0,i.jsx)(r.th,{children:"Valor por Defecto"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"String"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"putString(String, String)"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"getString(String, String)"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"null"})," o valor por defecto"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"int"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"putInt(String, int)"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"getInt(String, int)"})}),(0,i.jsx)(r.td,{children:"0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"float"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"putFloat(String, float)"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"getFloat(String, float)"})}),(0,i.jsx)(r.td,{children:"0.0f"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"boolean"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"putBoolean(String, boolean)"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"getBoolean(String, boolean)"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"false"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"long"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"putLong(String, long)"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"getLong(String, long)"})}),(0,i.jsx)(r.td,{children:"0L"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"StringSet"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"putStringSet(String, Set<String>)"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"getStringSet(String, Set<String>)"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"null"})," o conjunto vac\xedo"]})]})]})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"-claves-para-usar-sharedpreferences-con-\xe9xito",children:(0,i.jsxs)(r.strong,{children:["\ud83d\udd11 Claves para Usar ",(0,i.jsx)(r.code,{children:"SharedPreferences"})," con \xc9xito"]})}),"\n",(0,i.jsxs)(r.admonition,{type:"tip",children:[(0,i.jsx)(r.mdxAdmonitionTitle,{}),(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\ud83d\udcdd ",(0,i.jsx)(r.strong,{children:"Organiza las claves:"})," Usa constantes para evitar errores tipogr\xe1ficos."]}),"\n",(0,i.jsxs)(r.li,{children:["\ud83d\udcc9 ",(0,i.jsx)(r.strong,{children:"Evita almacenar datos grandes:"})," No est\xe1 dise\xf1ado para manejar datos complejos."]}),"\n",(0,i.jsxs)(r.li,{children:["\ud83d\ude80 ",(0,i.jsx)(r.strong,{children:"Optimiza lecturas:"})," Realiza operaciones r\xe1pidas en el hilo principal."]}),"\n",(0,i.jsxs)(r.li,{children:["\u26a1 ",(0,i.jsx)(r.strong,{children:"Aplica cambios sin bloqueos:"})," Usa ",(0,i.jsx)(r.code,{children:"apply()"})," en lugar de ",(0,i.jsx)(r.code,{children:"commit()"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["\ud83d\udd10 ",(0,i.jsx)(r.strong,{children:"Cuida la seguridad:"})," No guardes datos sensibles como contrase\xf1as."]}),"\n"]})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsxs)(r.h2,{id:"-errores-comunes-ev\xedtalos",children:["\u274c ",(0,i.jsx)(r.strong,{children:"Errores Comunes (\xa1Ev\xedtalos!)"})]}),"\n",(0,i.jsx)(r.admonition,{title:"evita estos errores...",type:"danger",children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsxs)(r.strong,{children:["Olvidar llamar a ",(0,i.jsx)(r.code,{children:"apply()"})," o ",(0,i.jsx)(r.code,{children:"commit()"}),":"]})," Los cambios no se guardan."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Uso simult\xe1neo en varios hilos:"})," Puede causar inconsistencias."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Almacenar datos grandes o sensibles:"})," Afecta el rendimiento y la seguridad."]}),"\n"]})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsxs)(r.h2,{id:"-buenas-pr\xe1cticas",children:["\u2705 ",(0,i.jsx)(r.strong,{children:"Buenas Pr\xe1cticas"})]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["\ud83d\udccc ",(0,i.jsx)(r.strong,{children:"Usar constantes para las claves:"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'public static final String PREFS_NAME = "MisPreferencias";\r\npublic static final String KEY_USUARIO = "usuario";\r\npublic static final String KEY_EDAD = "edad";\n'})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Uso:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'editor.putString(KEY_USUARIO, "Juan");\n'})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["\ud83d\udee0\ufe0f ",(0,i.jsx)(r.strong,{children:"Encapsular l\xf3gica en una clase helper:"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'public class SharedPreferencesHelper {\r\n    private static final String PREFS_NAME = "MisPreferencias";\r\n    private SharedPreferences sharedPreferences;\r\n\r\n    public SharedPreferencesHelper(Context context) {\r\n        sharedPreferences = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);\r\n    }\r\n\r\n    public void guardarUsuario(String usuario) {\r\n        sharedPreferences.edit().putString("usuario", usuario).apply();\r\n    }\r\n\r\n    public String obtenerUsuario() {\r\n        return sharedPreferences.getString("usuario", "Usuario no registrado");\r\n    }\r\n\r\n    public void limpiarTodo() {\r\n        sharedPreferences.edit().clear().apply();\r\n    }\r\n}\n'})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Uso:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'SharedPreferencesHelper prefsHelper = new SharedPreferencesHelper(context);\r\nprefsHelper.guardarUsuario("Juan");\r\nString usuario = prefsHelper.obtenerUsuario();\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsxs)(r.h2,{id:"-ejemplo-pr\xe1ctico",children:["\ud83e\udde9 ",(0,i.jsx)(r.strong,{children:"Ejemplo Pr\xe1ctico"})]}),"\n",(0,i.jsxs)(r.p,{children:["Vamos a crear una aplicaci\xf3n b\xe1sica que administre las preferencias del usuario y las mantenga mediante ",(0,i.jsx)(r.code,{children:"SharedPreferences"}),":"]}),"\n",(0,i.jsxs)(r.admonition,{title:"Funcionalidad",type:"info",children:[(0,i.jsxs)(r.p,{children:["La aplicaci\xf3n permite al usuario personalizar tres configuraciones principales y ver sus efectos de forma din\xe1mica. Estas configuraciones se guardan de forma persistente usando ",(0,i.jsx)(r.strong,{children:"SharedPreferences"}),", asegurando que se mantengan incluso si la aplicaci\xf3n se cierra."]}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Caracter\xedsticas Principales"})}),(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Tema Oscuro:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["El usuario puede activar o desactivar el tema oscuro usando un ",(0,i.jsx)(r.code,{children:"Switch"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"La aplicaci\xf3n aplica el cambio de tema de forma global y lo guarda para la pr\xf3xima vez que se abra."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Tama\xf1o de Fuente:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Un ",(0,i.jsx)(r.code,{children:"SeekBar"})," permite ajustar el tama\xf1o del texto en la pantalla principal."]}),"\n",(0,i.jsx)(r.li,{children:"El tama\xf1o seleccionado se aplica din\xe1micamente y se guarda para su uso posterior."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Recordatorio:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Un ",(0,i.jsx)(r.code,{children:"Switch"}),' permite activar o desactivar un estado de "recordatorio".']}),"\n",(0,i.jsx)(r.li,{children:"Este estado se muestra como un mensaje din\xe1mico en la pantalla principal."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Guardar Cambios:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Un bot\xf3n permite guardar todas las configuraciones seleccionadas."}),"\n",(0,i.jsx)(r.li,{children:"Los cambios se reflejan en tiempo real o al reiniciar la aplicaci\xf3n."}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)("div",{style:{margin:"25px auto",width:"fit-content"},children:(0,i.jsx)("img",{src:"/clips/clip_app_SharedPreferences.gif",alt:"Gif animado de la app de ejemplo de SharedPreferences",width:"250"})}),"\n",(0,i.jsx)(r.admonition,{title:"Recuerda activar el ViewBinding en tu proyecto",type:"tip",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:"android {\r\n   //...\r\n    buildFeatures {\r\n        viewBinding = true\r\n    }\r\n    //...\r\n}\n"})})}),"\n",(0,i.jsx)(r.h3,{id:"paso-1-crear-el-layout-principal",children:"Paso 1: Crear el Layout Principal"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Abre el archivo ",(0,i.jsx)(r.code,{children:"res/layout/activity_main.xml"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"Define un layout que incluya los controles para las opciones y un ejemplo de texto que refleje los cambios:"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-xml",metastring:'title="res/layout/activity_main.xml"',children:'<?xml version="1.0" encoding="utf-8"?>\r\n<androidx.constraintlayout.widget.ConstraintLayout \r\n    xmlns:android="http://schemas.android.com/apk/res/android"\r\n    xmlns:app="http://schemas.android.com/apk/res-auto"\r\n    xmlns:tools="http://schemas.android.com/tools"\r\n    android:id="@+id/linearLayout2"\r\n    android:layout_width="match_parent"\r\n    android:layout_height="match_parent">\r\n\r\n    \x3c!-- Texto principal que muestra un mensaje inicial --\x3e\r\n    <TextView\r\n        android:id="@+id/texto_principal"\r\n        android:layout_width="0dp"\r\n        android:layout_height="wrap_content"\r\n        android:layout_marginTop="108dp"\r\n        android:gravity="center"\r\n        android:text="Preferencias del Usuario"\r\n        android:textSize="18sp"\r\n        app:layout_constraintEnd_toEndOf="parent"\r\n        app:layout_constraintHorizontal_bias="0.0"\r\n        app:layout_constraintStart_toStartOf="parent"\r\n        app:layout_constraintTop_toTopOf="parent" />\r\n\r\n    \x3c!-- Switch para activar o desactivar el tema oscuro --\x3e\r\n    <Switch\r\n        android:id="@+id/switch_tema_oscuro"\r\n        android:layout_width="0dp"\r\n        android:layout_height="wrap_content"\r\n        android:layout_marginStart="24dp"\r\n        android:layout_marginTop="232dp"\r\n        android:layout_marginEnd="24dp"\r\n        android:text="Activar Tema Oscuro"\r\n        app:layout_constraintEnd_toEndOf="parent"\r\n        app:layout_constraintHorizontal_bias="1.0"\r\n        app:layout_constraintStart_toStartOf="parent"\r\n        app:layout_constraintTop_toTopOf="parent" />\r\n\r\n    \x3c!-- SeekBar para ajustar el tama\xf1o de la fuente del texto principal --\x3e\r\n    <SeekBar\r\n        android:id="@+id/seekbar_tama\xf1o_fuente"\r\n        android:layout_width="0dp"\r\n        android:layout_height="wrap_content"\r\n        android:layout_marginTop="4dp"\r\n        android:max="24" \r\n        android:min="12" \r\n        android:progress="16" \r\n        app:layout_constraintEnd_toEndOf="@+id/text_tama\xf1o_fuente"\r\n        app:layout_constraintHorizontal_bias="0.0"\r\n        app:layout_constraintStart_toStartOf="@+id/text_tama\xf1o_fuente"\r\n        app:layout_constraintTop_toBottomOf="@+id/text_tama\xf1o_fuente"/>\r\n\r\n    \x3c!-- Texto que muestra el tama\xf1o de fuente actual --\x3e\r\n    <TextView\r\n        android:id="@+id/text_tama\xf1o_fuente"\r\n        android:layout_width="0dp"\r\n        android:layout_height="wrap_content"\r\n        android:layout_marginTop="24dp"\r\n        android:text="Tama\xf1o de Fuente: 16"\r\n        app:layout_constraintEnd_toEndOf="@+id/switch_tema_oscuro"\r\n        app:layout_constraintHorizontal_bias="0.0"\r\n        app:layout_constraintStart_toStartOf="@+id/switch_tema_oscuro"\r\n        app:layout_constraintTop_toBottomOf="@+id/switch_tema_oscuro" />\r\n\r\n    \x3c!-- Switch para activar o desactivar un recordatorio --\x3e\r\n    <Switch\r\n        android:id="@+id/switch_recordatorio"\r\n        android:layout_width="362dp"\r\n        android:layout_height="25dp"\r\n        android:layout_marginStart="24dp"\r\n        android:layout_marginTop="28dp"\r\n        android:layout_marginEnd="24dp"\r\n        android:text="Activar Recordatorio"\r\n        app:layout_constraintEnd_toEndOf="parent"\r\n        app:layout_constraintStart_toStartOf="parent"\r\n        app:layout_constraintTop_toBottomOf="@+id/seekbar_tama\xf1o_fuente" />\r\n\r\n    \x3c!-- Bot\xf3n para guardar los cambios realizados por el usuario --\x3e\r\n    <Button\r\n        android:id="@+id/btn_guardar"\r\n        android:layout_width="wrap_content"\r\n        android:layout_height="wrap_content"\r\n        android:layout_marginTop="56dp"\r\n        android:text="Guardar Cambios"\r\n        app:layout_constraintEnd_toEndOf="@+id/switch_recordatorio"\r\n        app:layout_constraintHorizontal_bias="0.497"\r\n        app:layout_constraintStart_toStartOf="@+id/switch_recordatorio"\r\n        app:layout_constraintTop_toBottomOf="@+id/switch_recordatorio" />\r\n\r\n</androidx.constraintlayout.widget.ConstraintLayout>\r\n\n'})}),"\n",(0,i.jsx)(r.h3,{id:"paso-2-crear-la-clase-helper-para-sharedpreferences",children:"Paso 2: Crear la Clase Helper para SharedPreferences"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Crea una nueva clase llamada ",(0,i.jsx)(r.code,{children:"PreferencesHelper"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"A\xf1ade el siguiente c\xf3digo para gestionar las preferencias:"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",metastring:'title="PreferencesHelper.java"',children:'package com.example.preferenciasusuario;\r\n\r\nimport android.content.Context;\r\nimport android.content.SharedPreferences;\r\nimport androidx.preference.PreferenceManager;\r\n\r\n// Clase para gestionar las preferencias de la aplicaci\xf3n\r\npublic class PreferencesHelper {\r\n    private final SharedPreferences sharedPreferences; // Objeto para almacenar y recuperar datos persistentes\r\n\r\n    // Constructor: Inicializa SharedPreferences usando el contexto de la aplicaci\xf3n\r\n    public PreferencesHelper(Context context) {\r\n        sharedPreferences = PreferenceManager.getDefaultSharedPreferences(context);\r\n    }\r\n\r\n    // Guarda el estado del tema oscuro (activado/desactivado)\r\n    public void setTemaOscuro(boolean enabled) {\r\n        sharedPreferences.edit().putBoolean("temaOscuro", enabled).apply();\r\n    }\r\n\r\n    // Recupera el estado del tema oscuro (por defecto es false)\r\n    public boolean isTemaOscuro() {\r\n        return sharedPreferences.getBoolean("temaOscuro", false);\r\n    }\r\n\r\n    // Guarda el tama\xf1o de fuente seleccionado\r\n    public void setTama\xf1oFuente(int size) {\r\n        sharedPreferences.edit().putInt("tama\xf1oFuente", size).apply();\r\n    }\r\n\r\n    // Recupera el tama\xf1o de fuente almacenado (por defecto es 16)\r\n    public int getTama\xf1oFuente() {\r\n        return sharedPreferences.getInt("tama\xf1oFuente", 16);\r\n    }\r\n\r\n    // Guarda el estado del recordatorio (activado/desactivado)\r\n    public void setRecordatorioActivo(boolean active) {\r\n        sharedPreferences.edit().putBoolean("recordatorioActivo", active).apply();\r\n    }\r\n\r\n    // Recupera el estado del recordatorio (por defecto es false)\r\n    public boolean isRecordatorioActivo() {\r\n        return sharedPreferences.getBoolean("recordatorioActivo", false);\r\n    }\r\n}\r\n\n'})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"paso-3-implementar-la-actividad-principal",children:"Paso 3: Implementar la Actividad Principal"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Abre ",(0,i.jsx)(r.code,{children:"MainActivity.java"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"A\xf1ade el siguiente c\xf3digo para gestionar todas las opciones:"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'import android.os.Bundle;\r\nimport android.widget.SeekBar;\r\nimport androidx.appcompat.app.AppCompatActivity;\r\nimport androidx.appcompat.app.AppCompatDelegate;\r\nimport com.agora.sharedpreferencesdemo.databinding.ActivityMainBinding;\r\n\r\npublic class MainActivity extends AppCompatActivity {\r\n\r\n    private ActivityMainBinding binding;\r\n    private PreferencesHelper preferencesHelper;\r\n\r\n    @Override\r\n    protected void onCreate(Bundle savedInstanceState) {\r\n        applyTheme();\r\n\r\n        super.onCreate(savedInstanceState);\r\n\r\n        // Configurar View Binding\r\n        binding = ActivityMainBinding.inflate(getLayoutInflater());\r\n        setContentView(binding.getRoot());\r\n\r\n        // Inicializar helper de preferencias\r\n        preferencesHelper = new PreferencesHelper(this);\r\n\r\n        // Configurar los valores iniciales y listeners\r\n        cargarPreferencias();\r\n        configurarListeners();\r\n    }\r\n\r\n    private void applyTheme() {\r\n        preferencesHelper = new PreferencesHelper(this);\r\n        if (preferencesHelper.isTemaOscuro()) {\r\n            AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES);\r\n        } else {\r\n            AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);\r\n        }\r\n    }\r\n\r\n    private void cargarPreferencias() {\r\n        // Cargar valores iniciales desde SharedPreferences\r\n        binding.switchTemaOscuro.setChecked(preferencesHelper.isTemaOscuro());\r\n        binding.seekbarTamaOFuente.setProgress(preferencesHelper.getTama\xf1oFuente());\r\n        binding.textTamaOFuente.setText("Tama\xf1o de Fuente: " + preferencesHelper.getTama\xf1oFuente());\r\n        binding.switchRecordatorio.setChecked(preferencesHelper.isRecordatorioActivo());\r\n\r\n        // Reflejar preferencias en la vista\r\n        binding.textoPrincipal.setTextSize(preferencesHelper.getTama\xf1oFuente());\r\n        binding.textoPrincipal.setText(preferencesHelper.isRecordatorioActivo() ? "Recordatorio Activado" : "Recordatorio Desactivado");\r\n    }\r\n\r\n    private void configurarListeners() {\r\n        // Listener para el tama\xf1o de fuente\r\n        binding.seekbarTamaOFuente.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {\r\n            @Override\r\n            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {\r\n                binding.textTamaOFuente.setText("Tama\xf1o de Fuente: " + progress);\r\n                binding.textoPrincipal.setTextSize(progress);\r\n            }\r\n\r\n            @Override\r\n            public void onStartTrackingTouch(SeekBar seekBar) { }\r\n\r\n            @Override\r\n            public void onStopTrackingTouch(SeekBar seekBar) { }\r\n        });\r\n\r\n        // Listener para el bot\xf3n de guardar cambios\r\n        binding.btnGuardar.setOnClickListener(v -> {\r\n            boolean temaOscuroActual = preferencesHelper.isTemaOscuro();\r\n            boolean temaOscuroNuevo = binding.switchTemaOscuro.isChecked();\r\n\r\n            // Guardar preferencias\r\n            preferencesHelper.setTemaOscuro(temaOscuroNuevo);\r\n            preferencesHelper.setTama\xf1oFuente(binding.seekbarTamaOFuente.getProgress());\r\n            preferencesHelper.setRecordatorioActivo(binding.switchRecordatorio.isChecked());\r\n\r\n            // Reiniciar actividad si se cambi\xf3 el tema\r\n            if (temaOscuroActual != temaOscuroNuevo) {\r\n                recreate();\r\n            } else {\r\n                // Actualizar la vista principal si no es necesario reiniciar\r\n                cargarPreferencias();\r\n            }\r\n        });\r\n\r\n    }\r\n}\r\n\n'})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"paso-4-probar-la-aplicaci\xf3n",children:"Paso 4: Probar la Aplicaci\xf3n"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Ejecuta la aplicaci\xf3n en un dispositivo o emulador."}),"\n",(0,i.jsxs)(r.li,{children:["Cambia las opciones:","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Activa o desactiva el tema oscuro."}),"\n",(0,i.jsx)(r.li,{children:"Ajusta el tama\xf1o de fuente con el deslizador."}),"\n",(0,i.jsx)(r.li,{children:"Activa o desactiva el recordatorio."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.li,{children:'Haz clic en "Guardar Cambios" para aplicar las configuraciones.'}),"\n"]}),"\n",(0,i.jsx)(r.hr,{})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var a=n(6540);const i={},s=a.createContext(i);function o(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);