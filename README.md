# Microservice-based Application

A microservice-based application built using **NestJS** for the backend and **Next.js + TypeScript + Material UI** for the frontend.

## Features

- **Product Service**: CRUD operations for products
- **Order Service**: CRUD operations for orders and communication with Product Service
- **Frontend**: Dynamic JSON-driven signup form, product & order management pages

## Folder Structure

```
MicroserviceApp/
├── frontend/              
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── lib/
│   ├── data/
│   └── package.json
├── product-service/       
│   ├── src/
│   └── package.json
├── order-service/         
│   ├── src/
│   └── package.json
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
  ```sh
  npm install -g @nestjs/cli
  ```

## Installation

```sh
git clone https://github.com/Akarami000/MicroserviceApp.git
cd MicroserviceApp

# Install dependencies for each service
cd frontend && npm install
cd ../product-service && npm install
cd ../order-service && npm install
```

## Running the Backend

### Product Service

```sh
cd product-service
npm run start:dev
```

### Order Service

```sh
cd order-service
npm run start:dev
```

## Running the Frontend

### Development Mode

```sh
cd frontend
npm run dev
```

### Production Mode

```sh
npm run build
npm run start
```

## Frontend Features

- **Home Page**: Navigation buttons to Products, Orders, and Signup Form
- **Products Page**: Add new products (Name, Price, Stock, Description), view product list in responsive cards
- **Orders Page**: Create orders (select product & quantity), list orders with product details and total price
- **Signup Form**: JSON-driven dynamic form (TEXT, LIST, RADIO), data saved to localStorage

## API Examples

### Products

- **Get all products**
  ```
  GET http://localhost:3001/products
  ```

- **Create a product**
  ```
  POST http://localhost:3001/products
  Content-Type: application/json

  {
    "name": "Laptop",
    "price": 1500,
    "stock": 10,
    "description": "High-end laptop"
  }
  ```

### Orders

- **Get all orders**
  ```
  GET http://localhost:3002/orders
  ```

- **Create an order**
  ```
  POST http://localhost:3002/orders
  Content-Type: application/json

  {
    "productId": "123",
    "quantity": 2
  }
  ```

---

