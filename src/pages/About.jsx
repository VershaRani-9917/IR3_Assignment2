import Footer from "../components/Footer";
import Header from "../components/Header"

function About(){
	return(
		<>
    <Header/>
		<main className="container py-4">
			<h1>About Our Ecommerce Platform</h1>
			<div>
			<p>Welcome to this e-commerce website! Here, you can explore and purchase a variety of goods and services. We're excited to have you and hope you find what you're looking for.</p>
			
			

			<p> E-commerce, or electronic commerce, is the buying and selling of goods or services over the internet.
It's a way for businesses to reach customers and conduct transactions online, rather than in a physical store.
  E-commerce websites allow businesses to process orders, accept payments, manage shipping and logistics, and provide customer service. 
</p>


			<p>Online shopping allows customers to browse and purchase products from anywhere, at any time.</p>


			<p>E-commerce allows businesses to reach a global audience, not just those who can visit a physical store.


			Setting up and maintaining an online store can be less expensive than a physical store.
Data and analytics:
E-commerce platforms provide valuable data about customer behavior and preferences, which can be used to improve the business. </p>
</div>
	</main>
		<Footer/>
		</>
	)
}

export default About;