// Button.js
import { useState } from 'react';

function Button({ onLock, onUnlock }) {
    const [isLocked, setIsLocked] = useState(true);

    const handleClick = () => {
        if (isLocked) {
            onUnlock();
        } else {
            onLock();
        }
        setIsLocked(!isLocked);
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            {isLocked ? 'Lock' : 'Unlock'}
        </button>
    );
}

export default Button;


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
