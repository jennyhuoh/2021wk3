import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
import Menu from "../components/Menu";

function Home() {
    return(
        <div className="bg-color">
        <div className="container grid-container">
            <Header 
                title = "NORDIC NEST Shopping Cart"
                slogan = "An example made by Create-React-App."
            />
            <Menu />
            <ProductList />
            <Footer />            
        </div>
    </div>
    );
}

export default Home;