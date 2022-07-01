import Header from "../../Component/Header/Header";
import Body from "../../Component/Body/Body";
import Footer from "../../Component/Footer/Footer";
import Helmet from "../../Component/Helmet/Helmet";


const Homepage = () => {
  return ( 
    <Helmet title=" Trang chủ">
      <Header/>
      <Body/>
      <Footer/>
    </Helmet>
   );
}
 
export default Homepage;