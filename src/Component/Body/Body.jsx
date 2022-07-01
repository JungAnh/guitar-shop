import Amponsale from "./Amponsale/Amponsale";
import Banner from "./Banner/Banner";
import Guitaronsale from "./Guitaronsale/Guitaronsale";
import Topselleramp from "./Topselleramp/Topselleramp";
import Topsellerguitar from "./Topsellerguitar/Topsellerguitar";


const Body = () => {
  return (
    <div>
      <Banner/> 
      <Guitaronsale />
      <Amponsale/>
      <Topsellerguitar/>
      <Topselleramp/>
    </div>
    
    
   );
}
 
export default Body;