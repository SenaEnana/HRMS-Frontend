import React, { useEffect, useState } from 'react';


const mockNotifications = [
    {
        id: 1,
        title: 'Welcome',
        message: 'Welcome to the system!',
        timestamp: new Date(),
        isRead: false,
        employeeId: 1,
        employee: { id: 1, name: 'John Doe' },
    },
    {
        id: 2,
        title: 'System Update',
        message: 'The system will be down for maintenance at midnight.',
        timestamp: new Date(),
        isRead: false,
        employeeId: 1,
        employee: { id: 1, name: 'John Doe' },
    },
    // Add more mock notifications as needed
];

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [newNotificationCount, setNewNotificationCount] = useState(0);

    useEffect(() => {
        // Simulate fetching notifications from the backend
        setTimeout(() => {
            setNotifications(mockNotifications);
            setNewNotificationCount(mockNotifications.filter(notification => !notification.isRead).length);
        }, 1000);
    }, []);

    const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
                notification.id === id ? { ...notification, isRead: true } : notification
            )
        );
        setNewNotificationCount((prevCount) => prevCount - 1);
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
                            marginBottom: '20px', // Add margin-bottom for spacing between notifications
                            padding: '15px', // Add padding for space inside each notification
                            borderRadius: '10px', // Add border radius for curved corners
                            cursor: 'pointer', // Add cursor pointer for clickable effect
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
                                        Employee: {notification.employee.name}
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
