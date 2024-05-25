//the following are the new code
import { useState, useEffect } from "react";

function Button({ userId, onLock, onUnlock }) {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const storedState = localStorage.getItem(`user-${userId}-lock-state`);
    if (storedState !== null) {
      setIsLocked(JSON.parse(storedState));
    }
  }, [userId]);

  const handleClick = () => {
    if (isLocked) {
      onUnlock();
    } else {
      onLock();
    }
    const newLockState = !isLocked;
    setIsLocked(newLockState);
    localStorage.setItem(
      `user-${userId}-lock-state`,
      JSON.stringify(newLockState)
    );
  };

  return (
    <button className="btn btn-secondary me-2" onClick={handleClick}>
      {isLocked ? "Lock" : "Unlock"}
    </button>
  );
}

export default Button;


//the following are the old code 
 // Button.js
// import { useState } from "react";

// function Button({ onLock, onUnlock }) {
//   const [isLocked, setIsLocked] = useState(true);

//   const handleClick = () => {
//     if (isLocked) {
//       onUnlock();
//     } else {
//       onLock();
//     }
//     setIsLocked(!isLocked);
//   };

//   return (
//     <button className="btn btn-outline-secondary me-2" onClick={handleClick}>
//       {isLocked ? "Lock" : "Unlock"}
//     </button>
//   );
// }

// export default Button;

// import { useState } from 'react';

// function Button() {
//     const [buttonText, setButtonText] = useState('Read More');

//     const handleClick = () => {
//         // Toggle button text
//         setButtonText(buttonText === 'Lock' ? 'Unlock' : 'Lock');
//     };

//     return (
//         <div className="container mt-5">

//             <button className="btn btn-primary" onClick={handleClick}>
//                 {buttonText}
//             </button>
//         </div>
//     );
// }

// export default Button;
