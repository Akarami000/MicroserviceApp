import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './order.entity';
import { CreateOrderDto } from './order.dto';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  async create(dto: CreateOrderDto): Promise<Order> {
    // Call Product Service to fetch product details
    const { data: product } = await axios.get(`http://localhost:3001/products/${dto.productId}`);
    if (!product) throw new NotFoundException(`Product with ID ${dto.productId} not found`);

    const totalPrice = product.price * dto.quantity;

    const order: Order = {
      id: uuidv4(),
      productId: dto.productId,
      quantity: dto.quantity,
      totalPrice,
      createdAt: new Date(),
    };

    this.orders.push(order);
    return order;
  }

  async findAll() {
    // Join orders with product details
    const result: Array<Order & { product: any }> = [];
    for (const order of this.orders) {
      const { data: product } = await axios.get(`http://localhost:3001/products/${order.productId}`);
      result.push({
        ...order,
        product,
      });
    }
    return result;
  }

  findOne(id: string): Order {
    const order = this.orders.find((o) => o.id === id);
    if (!order) throw new NotFoundException(`Order with ID ${id} not found`);
    return order;
  }
}