import { Container, Typography, Box } from "@mui/material";

export default function Section({ title, children }) {
  return (
    <Box sx={{ background: "#fff" }}>
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            fontWeight: 600,
            color: "#1a1a1a",
          }}
        >
          {title}
        </Typography>

        {children}
      </Container>
    </Box>
  );
}
