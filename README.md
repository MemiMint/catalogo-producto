# Product Catalog - Frontend

Este es el repositorio del **frontend** para la aplicación de catálogo de productos. Proporciona la interfaz de usuario para visualizar y explorar los productos disponibles.

## 🚀 Tecnologías utilizadas

- React con Vite
- TypeScript
- Joy UI
- Axios para consumo de API

## 📂 Estructura del proyecto

```
📦 product-catalog-frontend
└── src/
    ├── assets/
    └── modules/
        ├── http/
        │   ├── api/
        │   ├── utils/
        │   ├── server.ts
        │   └── axios.ts
        ├── edit-product/
        │   ├── components/
        │   ├── hook/
        │   └── index.tsx
        ├── home/
        │   ├── components/
        │   ├── hook/
        │   └── index.tsx
        ├── product/
        │   ├── components/
        │   ├── hook/
        │   └── index.tsx
        ├── routing/
        │   ├── index.tsx
        │   └── routes.tsx
        └── shared/
            ├── components/
            ├── hooks/
            └── utils/
```

## 📡 Backend

El backend de este proyecto se encuentra en un **repositorio separado**. Puedes encontrarlo en el siguiente enlace:
👉 [Repositorio del Backend](https://github.com/MemiMint/catalogo-producto-api)

## 🛠 Instalación y ejecución

1. Clona este repositorio:
   ```sh
   git clone https://github.com/MemiMint/catalogo-producto.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd catalogo-product
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
