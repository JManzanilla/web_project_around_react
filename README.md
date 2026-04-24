# Around The U.S. — React

Refactorización de la plataforma Around con React 19 y Vite. Convierte la versión de JavaScript puro en una SPA basada en componentes, manteniendo toda la funcionalidad original e integrándola con el backend REST de Around.

## Descripción

Around React es la migración del proyecto Around vanilla JS a una arquitectura de componentes React. Implementa la misma experiencia de usuario (galería de fotos, perfil, likes, modales) usando componentes funcionales, Context API y React Router DOM para la navegación.

## Tecnologías utilizadas

- React 19
- Vite 7
- React Router DOM 7
- JavaScript ES6+
- CSS3 con metodología BEM
- ESLint

## Características

- Componentes funcionales para perfil, tarjetas, popups y formularios
- React Context para compartir el usuario actual (`CurrentUserContext`)
- React Router DOM para enrutamiento client-side
- Rutas protegidas con `ProtectedRoute`
- Flujo de autenticación: Login y Registro
- Integración con API REST para tarjetas y perfil
- Validación de formularios
- Diseño responsivo

## Componentes principales

```
src/components/
├── App.jsx              # Componente raíz
├── Header/
├── Footer/
├── Login/
├── Register/
├── ProtectedRoute/
├── InfoTooltip/         # Notificación de éxito/error en auth
└── Main/
    └── components/
        ├── Card/
        ├── Profile/
        ├── Loader/
        └── Popup/
            ├── EditProfile/
            ├── EditAvatar/
            ├── NewCard/
            ├── ImagePopup/
            └── RemoveCard/
```

## Instalación y uso

```bash
git clone git@github.com:JManzanilla/web_project_around_react.git
cd web_project_around_react
npm install
npm run dev     # Servidor de desarrollo (abre el navegador automáticamente)
npm run build   # Build de producción
```

## Scripts

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia Vite en modo desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run preview` | Previsualiza el build localmente |
| `npm run lint` | Ejecuta ESLint |

## Autor

Jesus Manzanilla — [GitHub](https://github.com/JManzanilla)
