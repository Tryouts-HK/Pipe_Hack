import React, { useState, useEffect } from 'react';

interface Notification {
  id: number;
  message: string;
  isRead: boolean;
}

interface NotificationControllerProps {
//   fetchNotificationsUrl: string;
//   markAsReadUrl: string;
}

export const NotificationController: React.FC<NotificationControllerProps> = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotificationsUrl = 'https://api.example.com/notifications';
    const markAsReadUrl = 'https://api.example.com/markAsRead';

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(fetchNotificationsUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data = await response.json();
        setNotifications(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [fetchNotificationsUrl]);

  const markAsRead = async (id: number) => {
    try {
      const response = await fetch(`${markAsReadUrl}/${id}`, {
        method: 'POST', // or 'PUT' depending on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isRead: true }),
      });

      if (!response.ok) {
        throw new Error('Failed to mark notification as read');
      }

      // Update local state after successful mark as read
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === id ? { ...notification, isRead: true } : notification
        )
      );
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) {
    return <p>Loading notifications...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
        {notifications.length === 0 ? (
          <p>No notifications available</p>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id} className="mt-4">
                <div className={`p-4 rounded-md ${notification.isRead ? 'bg-gray-200' : 'bg-blue-100'}`}>
                  <p className="text-gray-800">{notification.message}</p>
                  {!notification.isRead && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="mt-2 inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


