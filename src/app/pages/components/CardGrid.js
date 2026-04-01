import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function CardGrid({ items }) {
  return (
    <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      {items.map((item) => (
        <Grid item xs={12} md={4} key={item.title}>
          <Link href={item.link || "#"} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                height: "100%",
                p: 2,
                transition: "0.3s",
                borderRadius: 3,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent>
                {/* ICON */}
                <Box
                  sx={{
                    fontSize: 40,
                    mb: 2,
                    color: "#6C3BFF",
                  }}
                >
                  {item.icon}
                </Box>

                {/* TITLE */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: "#555",
                    mb: 2,
                  }}
                >
                  {item.desc}
                </Typography>

                {/* CTA */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: "#6C3BFF",
                  }}
                >
                  Learn More →
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
