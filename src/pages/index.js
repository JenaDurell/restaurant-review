import * as React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import ReviewPreview from "./ReviewPreview";

const IndexPage = () => {
  return (
    <div>
      <Header pageName="Restaurant Reviews!" />

    
      <div className='review'>
       
          
           <ReviewPreview/>
          
      </div>
    </div>
  );
};

export default IndexPage;
