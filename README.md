# Mini Backend Multinegocio - Pedidos

Este es un backend básico en Node.js con Express y MongoDB que utiliza arquitectura de 3 capas y soporte para múltiples negocios.


## Arquitectura
- MVC (Controladores, Servicios, Repositorios)
- Middleware de negocio por header: `X-negocio-ID`


npm install
npm run dev
```

Asegúrate de tener MongoDB corriendo localmente o usar una URI remota en `.env`.
