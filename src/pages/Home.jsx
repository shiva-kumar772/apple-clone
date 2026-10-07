import Header from "../components/Header";
import Info from "../components/Info";
import Section from "../components/Section";
import Products from "../components/Products";
import { productsSection } from "../constants/constant";

const Home = () =>{
    return(
        <div>
            <Header />
            <Info />
            <Section Data={productsSection.iphonePro}/>
            <Section Data={productsSection.iphone}/>
            <Section Data={productsSection.macbookpro} />
            <Products />

        </div>
    )
}

export default Home;