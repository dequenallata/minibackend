# Mini Backend Multinegocio - Pedidos

Este es un backend básico en Node.js con Express y MongoDB que utiliza arquitectura de 3 capas y soporte para múltiples negocios.


## Arquitectura
- MVC (Controladores, Servicios, Repositorios)
- Middleware de negocio por header: `X-negocio-ID`


npm install
npm run dev
```

Asegúrate de tener MongoDB corriendo localmente o usar una URI remota en `.env`.


Lista de endpoints 

GET http://localhost:3000/api/pedidos
POST http://localhost:3000/api/pedidos

JSON
{
  "horaInicio": "2025-07-04T19:30:00Z",
  "cliente": "Carlos Gutierrez",
  "total": 25.5,
  "tipoPedido": 1,
  "items": [
    {
      "producto": "Café malta",
      "cantidad": 2,
      "precioUnitario": 6.25
    },
    {
      "producto": "crosasan",
      "cantidad": 1,
      "precioUnitario": 13.0
    }
  ]
}
PUT http://localhost:3000/api/pedidos/:id

JSON
{
  "cliente": "Carlos Gutierrez",
  "total": 25.5,
  "tipoPedido": 1,
  "items": [
    {
      "producto": "Café malta",
      "cantidad": 2,
      "precioUnitario": 6.25
    },
    {
      "producto": "crosasan",
      "cantidad": 1,
      "precioUnitario": 13.0
    }
  ]
}
DELETE http://localhost:3000/api/pedidos/:id

PUT http://localhost:3000/api/pedidos/:id/cerrar   este es el para pasar el pedido de En Curso a Cerrado

GET http://localhost:3000/api/productos

POST http://localhost:3000/api/productos

JSON

{
  "nombre": "Sandwich de Pollo",
  "precio": 12.50
}

PUT http://localhost:3000/api/productos/:id

JSON

{
  "nombre": "Sandwich de Pollo",
  "precio": 12.50
}

DELETE http://localhost:3000/api/productos/:id


HEADER 
 X-negocio-ID : Nombre_de_Negocio
 Content-Type : application/json
