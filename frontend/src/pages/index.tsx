import Link from "next/link";
import { Box, Button, Typography, Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Microservices App
      </Typography>
      <Typography variant="subtitle1" textAlign="center" color="text.secondary" gutterBottom>
        Manage Products, Orders, and Signup Forms dynamically
      </Typography>
      <Stack spacing={3} mt={4}>
        <Button variant="contained" size="large" component={Link} href="/products">
          Manage Products
        </Button>
        <Button variant="contained" size="large" component={Link} href="/orders">
          Manage Orders
        </Button>
        <Button variant="contained" size="large" component={Link} href="/signup">
          Signup Form
        </Button>
      </Stack>
    </Container>
  );
}