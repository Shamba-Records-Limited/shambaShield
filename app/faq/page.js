import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";


const FaqPage = () => {
    return (
      <ThrownLayout>
        <PageBanner pageName={"faq"} />

        <div className="faq-area">
        <div className="container">
          <div className="flex">
           
            <div className=" w-full p-2">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      </ThrownLayout>
      
       
        

    );
  };
  
 
 

export default FaqPage;