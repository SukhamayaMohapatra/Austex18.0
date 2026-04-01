import Navbar from "../components/Navbar";
import { Container, Typography } from "@mui/material";

export default function Manufacturing() {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">Research & Development</Typography>
        <Typography mt={2}>
          Innovation-driven pharmaceutical research.
        </Typography>
      </Container>
    </>
  );
}
