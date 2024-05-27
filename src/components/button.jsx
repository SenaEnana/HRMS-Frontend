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


