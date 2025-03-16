import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { Box, Typography, Input, Stack, Button } from "@mui/joy";
import { Search, ShoppingBag } from "lucide-react";

type NavbarProps = {
  onSearch: (search: string) => void;
};

export const Navbar: FC<NavbarProps> = (props) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 4,
        bgcolor: "white",
        mt: 2,
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            bgcolor: "#0073E6",
            color: "white",
          }}
        >
          <ShoppingBag />
        </Box>
        <Typography level="title-lg">Catalogo Productos</Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        <Input
          placeholder="Busca un producto"
          startDecorator={<Search />}
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          endDecorator={
            <Button onClick={() => props.onSearch(search)}>Buscar</Button>
          }
        />
        <Button onClick={() => navigate("/product/create")}>
          Registrar Producto
        </Button>
      </Stack>
    </Box>
  );
};
