import React from "react";
import { useParams } from "react-router";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Container, Box } from "@mui/joy";
import { useProductDetails } from "./hook";
import { Loading } from "../shared/types/components/Loading";
import { CardDetail } from "./components";

const Page: React.FC = () => {
  const { pid } = useParams();

  const { product, loading } = useProductDetails(pid!);

  if (!product) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: "lg",
            boxShadow: "md",
          }}
        >
          <Typography level="title-lg">404 Product Not Found</Typography>
        </Card>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "row",
          width: 800,
          p: 2,
          borderRadius: "lg",
          boxShadow: "md",
        }}
      >
        {loading ? (
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Loading />
          </Box>
        ) : (
          <CardDetail product={product} />
        )}
      </Card>
    </Container>
  );
};

export default Page;
