import { Box } from "@mui/joy";
import { Navbar } from "./components/Navbar";
import { useHome } from "./components/hook";
import { Loading } from "../shared/types/components/Loading";
import { ProductList } from "./components/ProductList";

const Page = () => {
  const { loading, products, onSearch } = useHome();

  return (
    <Box sx={{ height: "100vh", p: 4 }}>
      <Navbar onSearch={onSearch} />
      <Box
        borderRadius={4}
        width="100%"
        height={500}
        bgcolor="white"
        display="flex"
        alignItems={loading ? "center" : "start"}
        justifyContent={loading ? "center" : "start"}
        flexWrap="wrap"
        p={4}
        mt={5}
        gap={4}
      >
        {loading ? <Loading /> : <ProductList products={products} />}
      </Box>
    </Box>
  );
};

export default Page;
