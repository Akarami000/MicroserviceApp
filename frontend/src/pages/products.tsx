import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { createProduct, getProducts } from "../lib/api";

export default function ProductsPage() {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => setProducts(await getProducts());

  const onSubmit = async (data: any) => {
    await createProduct(data);
    reset();
    fetchProducts();
  };

  useEffect(() => { fetchProducts(); }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 6 }}>
      <Typography variant="h5" gutterBottom>Add Product</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" fullWidth {...register("name")} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Price" type="number" fullWidth {...register("price")} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Stock" type="number" fullWidth {...register("stock")} required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Description" fullWidth {...register("description")} />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Save Product</Button>
      </Box>

      <Typography variant="h6" gutterBottom>Product List</Typography>
      <Grid container spacing={2}>
        {products.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography>Price: ${p.price}</Typography>
                <Typography>Stock: {p.stock}</Typography>
                <Typography variant="body2" color="text.secondary">{p.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}