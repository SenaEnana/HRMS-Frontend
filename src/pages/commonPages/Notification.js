import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [newNotificationCount, setNewNotificationCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
          console.error('Token not found in session storage');
          return;
        }
  
        const isValid = isTokenValid(token);
        if (!isValid) {
          console.error('Invalid token');
          return;
        }
        const userId = getUserIdFromToken(token);
      const response = await fetch(`http://localhost:5100/Notification/GetUnreadNotificationsList?userId=${userId}`);
      const data = await response.json();
      console.log(data);
      setNotifications(data);
      setNewNotificationCount(data.filter((notification) => !notification.isRead).length);
    };

    fetchNotifications();
  }, []);
  function isTokenValid(token) {
    if (!token) {
      return false;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();

      return currentTime < expirationTime;
    } catch (error) {
      console.error('Error decoding or validating token:', error);
      return false;
    }
  }

  function getUserIdFromToken(token) {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  }

  const markAsRead = async (id) => {
    const response = await fetch(`http://localhost:5100/Notification/MarkAsRead/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isRead: true }),
    });

    if (response.ok) {
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === id ? { ...notification, isRead: true } : notification
        )
      );
    } else {
      
      console.error('Error marking notification as read:', response.statusText);
    }
  };

  const toggleDetails = (id) => {
    setSelectedNotification(id === selectedNotification ? null : id);
  };

  return (
    <div>
      <h2 className="text-left text-black mb-4 mt-4 ml-24">
        Notifications {newNotificationCount > 0 && `(${newNotificationCount})`}
      </h2>
      <ul className="list-unstyled" style={{ padding: '10px' }}>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            style={{
              backgroundColor: notification.isRead ? 'lightgray' : 'lightblue',
              marginBottom: '20px',
              padding: '15px',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            onClick={() => toggleDetails(notification.id)}
          >
            <h4 className="text-black">{notification.title}</h4>
            {selectedNotification === notification.id && (
              <div>
                <p className="text-black">{notification.message}</p>
                <p>
                  <small className="text-black">
                    {new Date(notification.timestamp).toLocaleString()}
                  </small>
                </p>
                <p>
                  <small className="text-black">
                  </small>
                </p>
                {!notification.isRead && (
                  <button onClick={() => markAsRead(notification.id)}>
                    Mark as Read
                  </button>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
