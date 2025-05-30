import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductDetails = () => {

	const {productId} = useParams()


const products = [
  {
    id: "1",
    name: "Product 1",
    price: "$699",
    description: "A high-quality DSLR camera with 24MP resolution, 4K video recording, and optical zoom.",
    availableColors: ["Black", "Gray", "Silver"],
    returnPolicy: "30-day return policy with full refund.",
    image: "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "2",
    name: "Product 2",
    price: "$49",
    description: "A premium ceramic cup and plate set, perfect for elegant dining and everyday use.",
    availableColors: ["White", "Blue", "Green"],
    returnPolicy: "15-day return policy for unused items.",
    image: "https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "3",
    name: "Product 3",
    price: "$25",
    description: "A lightweight, long-lasting foundation cream that provides full coverage and a natural glow.",
    availableColors: ["Ivory", "Beige", "Tan"],
    returnPolicy: "10-day return policy for unopened products.",
    image: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "4",
    name: "Product 4",
    price: "$120",
    description: "A complete beauty kit including lipstick, eyeliner, blush, and skincare essentials.",
    availableColors: ["Pink", "Red", "Nude"],
    returnPolicy: "30-day return policy with exchange option.",
    image : "https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];
  const productData = products.find((product) => product.id === productId)
console.log(productData)

return(
  <>
  <Header/>
  <main className="container py-4">
    <h2>{productData.name}</h2>
    <img 
       src={productData.image} 
       alt={productData.name} 
       style={{ width: "50%", height: "350px", objectFit: "cover" }} 
/>
    <p>Price: {productData.price}</p>
    <p>Description: {productData.description}</p>
    <p>Avaliable Colors: {productData.availableColors}</p>
    <p>Return Policy: {productData.returnPolicy}</p>


  </main>

  <Footer/>
  </>
)
}
export default ProductDetails;
