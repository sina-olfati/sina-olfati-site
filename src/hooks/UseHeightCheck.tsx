import { useEffect, useState } from 'react'; 
 
const useHeightCheck = () => { 
  const [isHeightHigher, setIsHeightHigher] = useState(false); 
 
  useEffect(() => { 
    const handleScroll = () => { 
      setIsHeightHigher(window.scrollY > 50); 
    }; 
 
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial height 
 
    return () => { 
      window.removeEventListener('resize', handleScroll); 
    }; 
  }, []); 
 
  return isHeightHigher; 
}; 

export default useHeightCheck

// import { useEffect, useState } from 'react'; 
 
// const useHeightCheck = () => { 
//   const [isHeightHigher, setIsHeightHigher] = useState(false); 
 
//   useEffect(() => { 
//     const handleResize = () => { 
//       setIsHeightHigher(window.innerHeight > 200); 
//     }; 
 
//     window.addEventListener('resize', handleResize); 
//     handleResize(); // Check initial height 
 
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//     }; 
//   }, []); 
 
//   return isHeightHigher; 
// }; 

// export default useHeightCheck