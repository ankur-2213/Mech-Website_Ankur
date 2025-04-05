import React from 'react';
import './Epage1.css';
import provide2 from '../../assets/Workshop.jpg';

const Epage2 = () => {
  return (
    <div>
      
    <div className="container8">
      <h1 className="heading1">In-House Training Program:</h1>
      <div className="content-wrapper">
        <div className="image-container ">
          <img className="fotu8 " src={provide2} alt="Welding Training Program" width="300" height="300"  class="center" />
        </div>
        <div className="description8">
          <p>
            We provide comprehensive in-house training programs for individuals and organizations looking to enhance 
            their welding skills and knowledge. Our training programs cover a wide range of topics, including welding 
            techniques, safety practices, equipment operation, and industry standards. Led by experienced instructors, 
            our hands-on training sessions are designed to equip participants with the practical skills and theoretical 
            understanding necessary to excel in the field of welding. Whether you're a beginner looking to learn the 
            basics or an experienced welder seeking advanced training, our in-house programs offer valuable learning 
            opportunities for all skill levels.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Epage2;
