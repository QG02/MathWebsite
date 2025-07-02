import image from '../assets/MY.jpg';

function Home() {
  return (
    <div className="intro-container">
      <div className="left-box">
	<h1>Welcome to Golden Ratio Tutoring!</h1>
	  <h2>
	      Here, I’m dedicated to helping you unlock your true potential in math. Whether you’re struggling with the basics or aiming for higher-level concepts, I provide personalized, patient guidance tailored just for you. Together, we’ll build your confidence and make math not just understandable, but enjoyable. <br/>Remember — every big achievement starts with a single step. <br/>Let’s take that step together!
	  </h2>
      </div>
      <div className="right-box"><img src={image} alt="GRT Logo"/></div>
    </div>
 );
}

export default Home;
