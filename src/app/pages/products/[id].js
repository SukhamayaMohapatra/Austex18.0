import { useRouter } from "next/router";
import products from "../../data/products";
import Navbar from "../../components/Navbar";
import { Container, Typography } from "@mui/material";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === id);

  if (!product) return null;

  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">{product.name}</Typography>

        <Typography mt={2}>{product.description}</Typography>

        <Typography mt={2}>
          Composition, dosage, safety info goes here.
        </Typography>
      </Container>
    </>
  );
}
