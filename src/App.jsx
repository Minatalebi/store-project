import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductsProvider from "./context/ProductsProvider";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        //اتوماتیک ریدایرکت به صفحه محصول
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </ProductsProvider>  
  );
}


export default App;
