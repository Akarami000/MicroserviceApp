import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, MenuItem, Card, CardContent, Grid } from "@mui/material";
import { createOrder, getOrders, getProducts } from "../lib/api";

export default function OrdersPage() {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);

  const fetchData = async () => {
    setProducts(await getProducts());
    setOrders(await getOrders());
  };

  const onSubmit = async (data: any) => {
    await createOrder({ productId: data.productId, quantity: Number(data.quantity) });
    reset();
    fetchData();
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 6 }}>
      <Typography variant="h5" gutterBottom>Create Order</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField select label="Select Product" fullWidth {...register("productId")} required>
              {products.map(p => <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Quantity" type="number" fullWidth {...register("quantity")} required />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Place Order</Button>
      </Box>

      <Typography variant="h6" gutterBottom>Orders List</Typography>
      <Grid container spacing={2}>
        {orders.map(o => (
          <Grid container item xs={12} sm={6} key={o.id}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">{o.product?.name}</Typography>
                <Typography>Quantity: {o.quantity}</Typography>
                <Typography>Total: ${o.totalPrice}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}