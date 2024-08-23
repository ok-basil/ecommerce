import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "@/components/ProductDisplay/ProductDisplay";
import DescriptionBox from "@/components/DescriptionBox/DescriptionBox";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";

const Product = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("Product must be used within a ShopContextProvider");
  }

  const { allProduct } = context;
  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productId))

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product;