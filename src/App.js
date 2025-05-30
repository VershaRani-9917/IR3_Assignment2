import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Link} from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="mb-4 ">Featured Products</h1>
        
        <div className="row g-4">
         <div className="col">
            <div className="card h-80 shadow-lg">
              <img
                src="https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="card-img-top"
                alt="Product 1"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/products/1" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-80 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="card-img-top"
                alt="Product 2"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/products/2" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>


          <div className="col">
            <div className="card h-80 shadow-lg">
              <img
                src="https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="card-img-top"
                alt="Product 3"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/products/3" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
