import AnimatedText from "./AnimatedText";

const AnimatedTextPage: React.FC = () => {
    
  
    return (
        <>
        <div className="w-full h-screen relative">
          <div className="absolute top-0 w-full">
            <AnimatedText />
          </div>
  
          <div className="w-full h-3/4 absolute"></div>
          <div className="w-full h-1/4 bg-gray-900 z-40 absolute bottom-0"></div>
        </div>
      </>
    );
  };
  
  export default AnimatedTextPage;