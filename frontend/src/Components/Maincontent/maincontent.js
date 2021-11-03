import Servicecontent from "../Maincontent/maincontent-service";
import Pricingcontent from "../Maincontent/maincontent-pricing";
import Calltoaction from "./maincontent-call-to-action";
import Testimonial from "./main-content-testimonial";
import Clientlogo from "./main-content-client-logo-area";
import Contact from "./main-content-contact";

const maincontent = () => {
  return (
    <div>
      <Servicecontent />
      <Pricingcontent />
      <Calltoaction />
      <Testimonial />
      <Clientlogo />
      <Contact />
    </div>
  );
};

export default maincontent;
