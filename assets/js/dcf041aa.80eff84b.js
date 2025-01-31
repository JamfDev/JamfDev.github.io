"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[7525],{5794:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"aplicaciones m\xf3viles/5 Persistencia/Room/Caso Pr\xe1ctico/5.4.4 Actualizar Valoraci\xf3n de Rese\xf1as","title":"Modificar Valoraci\xf3n y Mostrar Detalle","description":"Vamos a continuar desarrollando nuestra aplicaci\xf3n introduciendo una nueva funcionalidad que nos permitir\xe1 modificar la valoraci\xf3n de una rese\xf1a desde el listado. Practicaremos la modificaci\xf3n de elementos de nuestra Base de Datos.","source":"@site/docs/aplicaciones m\xf3viles/5 Persistencia/Room/Caso Pr\xe1ctico/5.4.4 Actualizar Valoraci\xf3n de Rese\xf1as.md","sourceDirName":"aplicaciones m\xf3viles/5 Persistencia/Room/Caso Pr\xe1ctico","slug":"/aplicaciones m\xf3viles/5 Persistencia/Room/Caso Pr\xe1ctico/5.4.4 Actualizar Valoraci\xf3n de Rese\xf1as","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/Room/Caso Pr\xe1ctico/5.4.4 Actualizar Valoraci\xf3n de Rese\xf1as","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"movilesSidebar","previous":{"title":"A\xf1adir y Eliminar Rese\xf1as","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/Room/Caso Pr\xe1ctico/5.4.3 A\xf1adir y Eliminar Rese\xf1as"},"next":{"title":"5.4 FireBase","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/"}}');var i=n(4848),l=n(8453);const t={sidebar_position:3},o="Modificar Valoraci\xf3n y Mostrar Detalle",d={},c=[{value:"<strong>Modificar Valoraci\xf3n</strong>",id:"modificar-valoraci\xf3n",level:2},{value:"1. Modificar <code>item_pel\xedcula</code>",id:"1-modificar-item_pel\xedcula",level:3},{value:"2.Actualizar el Adaptador para Manejar Cambios en el <code>RatingBar</code>",id:"2actualizar-el-adaptador-para-manejar-cambios-en-el-ratingbar",level:3},{value:"3.Modificar el <code>FragmentListaPeliculas</code> para compartir el ViewModel",id:"3modificar-el-fragmentlistapeliculas-para-compartir-el-viewmodel",level:3},{value:"<strong>Mostrar Detalle</strong>",id:"mostrar-detalle",level:2},{value:"1. Crear el <code>FragmentDetallePelicula</code>",id:"1-crear-el-fragmentdetallepelicula",level:3},{value:"2. Configurar la Navegaci\xf3n en el <code>nav_graph.xml</code>",id:"2-configurar-la-navegaci\xf3n-en-el-nav_graphxml",level:3},{value:"3. Configurar el Adaptador del RecicllerView",id:"3-configurar-el-adaptador-del-recicllerview",level:3},{value:"<strong>Prueba la aplicaci\xf3n</strong>",id:"prueba-la-aplicaci\xf3n",level:2}];function s(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"modificar-valoraci\xf3n-y-mostrar-detalle",children:"Modificar Valoraci\xf3n y Mostrar Detalle"})}),"\n",(0,i.jsx)(a.p,{children:"Vamos a continuar desarrollando nuestra aplicaci\xf3n introduciendo una nueva funcionalidad que nos permitir\xe1 modificar la valoraci\xf3n de una rese\xf1a desde el listado. Practicaremos la modificaci\xf3n de elementos de nuestra Base de Datos."}),"\n",(0,i.jsx)("div",{style:{margin:"0 auto",width:"250px"},children:(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Versi\xf3n final de la App de rese\xf1as de cine",src:n(1123).A+"",title:"Versi\xf3n final de la App de rese\xf1as de cine",width:"375",height:"842"})})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"\xbfQu\xe9 vamos a hacer? \ud83e\udd14"})}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Modificar el comportamiento del RatingBar en el Layout del los elementos del listado."}),"\n",(0,i.jsx)(a.li,{children:"Actualizar el Adaptador para Manejar Cambios en el RatingBar"}),"\n",(0,i.jsx)(a.li,{children:"Actualizar el Fragmento Listado para enviar el ViewModel al Adaptador."}),"\n",(0,i.jsx)(a.li,{children:"Crearemos un nuevo Fragmento para mostrar los detalles de cada rese\xf1a."}),"\n"]}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsx)(a.h2,{id:"modificar-valoraci\xf3n",children:(0,i.jsx)(a.strong,{children:"Modificar Valoraci\xf3n"})}),"\n",(0,i.jsx)(a.p,{children:"Para permitir al usuario modificar la valoraci\xf3n directamente desde el listado, podemos hacer que el RatingBar sea interactivo y capture los cambios en tiempo real."}),"\n",(0,i.jsxs)(a.h3,{id:"1-modificar-item_pel\xedcula",children:["1. Modificar ",(0,i.jsx)(a.code,{children:"item_pel\xedcula"})]}),"\n",(0,i.jsxs)(a.p,{children:["Aseg\xfarate de que el ",(0,i.jsx)(a.code,{children:"RatingBar"})," en el dise\xf1o de los elementos del listado (",(0,i.jsx)(a.code,{children:"item_pelicula.xml"}),") no sea solo un indicador."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-xml",metastring:'title="res/layout/item_pelicula.xml"',children:'<RatingBar\r\n        <RatingBar\r\n            android:id="@+id/barra_valoracion"\r\n            android:layout_width="wrap_content"\r\n            android:layout_height="wrap_content"\r\n            android:layout_marginTop="8dp"\r\n            android:numStars="5"\r\n            android:stepSize="0.5"\r\n            android:isIndicator="false"\r\n            android:progressTint="#FFD700"\r\n            android:secondaryProgressTint="#FFECB3"\r\n            android:backgroundTint="#E0E0E0" />\n'})}),"\n",(0,i.jsx)(a.admonition,{title:"explicaci\xf3n:",type:"note",children:(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:'android:isIndicator="false"'})," Nos permite hacer el RatingBar interactivo."]})}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsxs)(a.h3,{id:"2actualizar-el-adaptador-para-manejar-cambios-en-el-ratingbar",children:["2.Actualizar el Adaptador para Manejar Cambios en el ",(0,i.jsx)(a.code,{children:"RatingBar"})]}),"\n",(0,i.jsx)(a.p,{children:"Modifica el adaptador para capturar los cambios en la valoraci\xf3n y actualizar la base de datos. Deberemos pasar el Viewmodel desde el Fragment."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-java",metastring:'title="UI/PeliculasAdapter.java"',children:"public class PeliculasAdaptador extends RecyclerView.Adapter<PeliculasAdaptador.PeliculasViewHolder> {\r\n\r\n   //...\r\n    private final PeliculasViewModel peliculasViewModel; // ViewModel para interactuar con la base de datos.\r\n\r\n    // Constructor para inicializar el adaptador con el ViewModel.\r\n    public PeliculasAdaptador(PeliculasViewModel peliculasViewModel) {\r\n        this.peliculasViewModel = peliculasViewModel;\r\n    }\r\n \r\n    //...\r\n\r\n    public void onBindViewHolder(@NonNull PeliculasViewHolder holder, int position) {\r\n \r\n      // ...\r\n\r\n      // Configura el listener para cambios en el RatingBar.\r\n        holder.binding.barraValoracion.setOnRatingBarChangeListener((ratingBar, rating, fromUser) -> {\r\n            if (fromUser) {\r\n                peliculaActual.setValoracion(rating); // Actualiza la valoraci\xf3n en el objeto.\r\n                peliculasViewModel.actualizar(peliculaActual); // Actualiza la base de datos directamente desde el adaptador.\r\n            }\r\n        });\r\n    }\r\n\r\n}\n"})}),"\n",(0,i.jsxs)(a.h3,{id:"3modificar-el-fragmentlistapeliculas-para-compartir-el-viewmodel",children:["3.Modificar el ",(0,i.jsx)(a.code,{children:"FragmentListaPeliculas"})," para compartir el ViewModel"]}),"\n",(0,i.jsx)(a.p,{children:"Cuando instancienmos el adaptador en el Fragmento del listado deberemoa pasar el view model como par\xe1metro. Modifica esta l\xednea en tu Fragment."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-java",metastring:'title="UI/FragmentListadoPeliculas.java"',children:"    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {\r\n        //...\r\n\r\n        // Configuramos el adaptador del RecyclerView.\r\n        // highlight-next-line\r\n        adaptador = new PeliculasAdaptader(peliculasViewModel);\r\n        recyclerView.setAdapter(adaptador);\r\n        \r\n        //...\r\n    }\n"})}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsx)(a.h2,{id:"mostrar-detalle",children:(0,i.jsx)(a.strong,{children:"Mostrar Detalle"})}),"\n",(0,i.jsx)(a.p,{children:"Para permitir mostrar los detalles de una rese\xf1a al hacer clic en un elemento del listado, utilizaremos un nuevo fragmento y configuraremos la navegaci\xf3n desde el adaptador y el fragmento que contiene la lista."}),"\n",(0,i.jsxs)(a.h3,{id:"1-crear-el-fragmentdetallepelicula",children:["1. Crear el ",(0,i.jsx)(a.code,{children:"FragmentDetallePelicula"})]}),"\n",(0,i.jsxs)(a.p,{children:["Crearemos un nuevo fragment llamado ",(0,i.jsx)(a.code,{children:"FragmentDetallePelicula.java"})," en el package ",(0,i.jsx)(a.code,{children:"UI"}),"."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-java",metastring:'title="UI/FragmentDetallePelicula.java"',children:'package com.agora.criticascine.UI;\r\n\r\nimport android.graphics.Bitmap;\r\nimport android.graphics.BitmapFactory;\r\nimport android.os.Bundle;\r\nimport android.view.LayoutInflater;\r\nimport android.view.View;\r\nimport android.view.ViewGroup;\r\n\r\nimport androidx.annotation.NonNull;\r\nimport androidx.annotation.Nullable;\r\nimport androidx.fragment.app.Fragment;\r\n\r\nimport com.agora.criticascine.databinding.FragmentDetallePeliculaBinding;\r\nimport com.agora.criticascine.Model.Pelicula;\r\n\r\npublic class FragmentDetallePelicula extends Fragment {\r\n\r\n    private FragmentDetallePeliculaBinding binding;\r\n\r\n    @Nullable\r\n    @Override\r\n    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {\r\n        // Vincula el dise\xf1o con ViewBinding.\r\n        binding = FragmentDetallePeliculaBinding.inflate(inflater, container, false);\r\n        return binding.getRoot();\r\n    }\r\n\r\n    @Override\r\n    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {\r\n        super.onViewCreated(view, savedInstanceState);\r\n\r\n        // Obtiene los argumentos pasados al fragmento.\r\n        if (getArguments() != null) {\r\n            \r\n            Pelicula pelicula = (Pelicula) getArguments().getSerializable("pelicula");\r\n\r\n            // Configura los datos de la rese\xf1a en las vistas.\r\n            binding.textoNombreDetalle.setText(pelicula.getNombre());\r\n            binding.textoDescripcionDetalle.setText(pelicula.getDescripcion());\r\n            binding.barraValoracionDetalle.setRating(pelicula.getValoracion());\r\n\r\n            // Convierte el array de bytes a Bitmap y lo muestra.\r\n            if (pelicula.getImagen() != null) {\r\n                Bitmap bitmap = BitmapFactory.decodeByteArray(pelicula.getImagen(), 0, pelicula.getImagen().length);\r\n                binding.imagenDetalle.setImageBitmap(bitmap);\r\n            }\r\n        }\r\n    }\r\n\r\n    @Override\r\n    public void onDestroyView() {\r\n        super.onDestroyView();\r\n        binding = null; // Libera el binding para evitar fugas de memoria.\r\n    }\r\n}\r\n\n'})}),"\n",(0,i.jsxs)(a.p,{children:["Modificaremos el Layout ",(0,i.jsx)(a.code,{children:"fragment_detalle_pelicula.xml"})," de la carpeta ",(0,i.jsx)(a.code,{children:"res/layout"}),"."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-xml",metastring:'title="res/layout/fragment_detalle_pelicula.xml"',children:'<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"\r\n    android:layout_width="match_parent"\r\n    android:layout_height="match_parent"\r\n    android:padding="16dp">\r\n\r\n    <LinearLayout\r\n        android:layout_width="match_parent"\r\n        android:layout_height="wrap_content"\r\n        android:orientation="vertical">\r\n\r\n        <ImageView\r\n            android:id="@+id/imagen_detalle"\r\n            android:layout_width="match_parent"\r\n            android:layout_height="wrap_content"\r\n            android:layout_marginBottom="16dp"\r\n            android:scaleType="center" />\r\n\r\n        <TextView\r\n            android:id="@+id/texto_nombre_detalle"\r\n            android:layout_width="match_parent"\r\n            android:layout_height="wrap_content"\r\n            android:textSize="20sp"\r\n            android:textStyle="bold"\r\n            android:layout_marginBottom="8dp" />\r\n\r\n        <TextView\r\n            android:id="@+id/texto_descripcion_detalle"\r\n            android:layout_width="match_parent"\r\n            android:layout_height="wrap_content"\r\n            android:textSize="16sp"\r\n            android:layout_marginBottom="16dp" />\r\n\r\n        <RatingBar\r\n            android:id="@+id/barra_valoracion_detalle"\r\n            android:layout_width="wrap_content"\r\n            android:layout_height="wrap_content"\r\n            android:numStars="5"\r\n            android:stepSize="0.5"\r\n            android:isIndicator="true" />\r\n    </LinearLayout>\r\n</ScrollView>\r\n\r\n\n'})}),"\n",(0,i.jsxs)(a.h3,{id:"2-configurar-la-navegaci\xf3n-en-el-nav_graphxml",children:["2. Configurar la Navegaci\xf3n en el ",(0,i.jsx)(a.code,{children:"nav_graph.xml"})]}),"\n",(0,i.jsx)(a.p,{children:"A\xf1ade el nuevo fragmento al archivo de navegaci\xf3n:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-xml",metastring:'title="res/navigatio/nav_graph.xml"',children:'<fragment\r\n    android:id="@+id/fragmentDetallePelicula"\r\n    android:name="com.agora.criticascine.UI.FragmentDetallePelicula"\r\n    android:label="Detalle de la Rese\xf1a"\r\n    tools:layout="@layout/fragment_detalle_pelicula" />\r\n\n'})}),"\n",(0,i.jsx)(a.h3,{id:"3-configurar-el-adaptador-del-recicllerview",children:"3. Configurar el Adaptador del RecicllerView"}),"\n",(0,i.jsx)(a.p,{children:"Configura el adaptador para hacer los elementos del ReciclerView Interactivos."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-java",metastring:'title="UI/Pel\xedculasAdapter.java"',children:" @Override\r\n    public void onBindViewHolder(@NonNull PeliculasViewHolder holder, int position) {\r\n\r\n        //...\r\n        \r\n        //Asigna un listener de clic al elemento completo del RecyclerView.\r\n        holder.itemView.setOnClickListener(new View.OnClickListener() {\r\n            @Override\r\n            public void onClick(View v) {\r\n                // Obtiene una instancia del NavController para gestionar la navegaci\xf3n.\r\n                NavController navController = Navigation.findNavController((Activity) holder.itemView.getContext(), R.id.nav_host_fragment);\r\n\r\n                // Crea un Bundle para pasar datos al siguiente fragmento.\r\n                Bundle bundle = new Bundle();\r\n                bundle.putSerializable(\"pelicula\", peliculaActual); // Inserta el objeto 'peliculaActual' en el Bundle.\r\n\r\n                // Navega al fragmento de detalle utilizando el ID del destino y el Bundle con los datos.\r\n                navController.navigate(R.id.fragmentDetallePelicula, bundle);\r\n            }\r\n        });\r\n\r\n    }\n"})}),"\n",(0,i.jsxs)(a.admonition,{title:"Objeto serializable",type:"warning",children:[(0,i.jsxs)(a.p,{children:["Para poder pasar la pel\xedcula actual como argumento al nuevo fragmento de detalles es necesario que el objeto ",(0,i.jsx)(a.code,{children:"Pelicula"})," sea Serializable. Implementa la interfaz serializable en el objeto:"]}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-java",children:"public class Pelicula implements Serializable {\r\n    //...\r\n}\n"})})]}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsx)(a.h2,{id:"prueba-la-aplicaci\xf3n",children:(0,i.jsx)(a.strong,{children:"Prueba la aplicaci\xf3n"})}),"\n",(0,i.jsxs)(a.p,{children:["Felicidades \ud83d\udc4f\ud83c\udffd\ud83d\udc4f\ud83c\udffd. En este punto deber\xedas tener una ",(0,i.jsx)(a.strong,{children:"App completa"})," que implemente los m\xe9todos ",(0,i.jsx)(a.strong,{children:"CRUD"})," en una Base de Datos utilizando ",(0,i.jsx)(a.strong,{children:"Room"})," \ud83d\ude80"]})]})}function u(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},1123:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/app_v3-a2708c4837073af446cb3020397e2d36.gif"},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>o});var r=n(6540);const i={},l=r.createContext(i);function t(e){const a=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:a},e.children)}}}]);