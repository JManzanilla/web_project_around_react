# Proyecto Around - React + Vite

Proyecto de aplicación web desarrollado con React y Vite. Este proyecto es una versión moderna de la plataforma social "Around" utilizando tecnologías modernas.

## 📋 Descripción

Este proyecto proporciona una configuración mínima para trabajar con React en Vite con HMR (Hot Module Replacement) y reglas de ESLint configuradas.

## 🚀 Características

- **React + Vite**: Setup rápido y eficiente para desarrollo
- **HMR**: Actualización en tiempo real durante el desarrollo
- **ESLint**: Configuración de linting para mantener código limpio
- **Componentes Modernos**: Estructura basada en componentes React
- **Interfaz Responsiva**: Diseño adaptable a diferentes dispositivos

## 🛠️ Configuración

Actualmente, dos plugins oficiales están disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## 📝 Últimas Actualizaciones

- **Merge de rama future a main**: Se han integrado todos los cambios de la rama `future` a la rama principal `main` con el commit dc9fde06d44e71db14ff8ab0a49f91a41659177b
- **Componentes de interfaz mejorados**: Popup, Formularios y Gestión de perfil
- **Sistema de validación**: Validación de formularios integrada
- **API Integration**: Conexión con backend para gestión de tarjetas y perfil de usuario

## 🔧 Configuración de ESLint

Si estás desarrollando una aplicación de producción, recomendamos usar TypeScript con reglas de lint conscientes de tipos. Consulta la [plantilla TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para obtener información sobre cómo integrar TypeScript y [`typescript-eslint`](https://typescript-eslint.io) en tu proyecto.

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Build para producción
npm run build
```
