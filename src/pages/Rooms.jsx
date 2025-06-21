import React, { useEffect, useState } from 'react';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("http://localhost:3000/rooms"); 
        if (!res.ok) throw new Error('Failed to fetch rooms');
        const data = await res.json();
        setRooms(data);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Rooms</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
        {rooms.map((room) => (
          <div
            key={room._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              width: "300px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
            }}
          >
            <img
              src={room.imageUrl}
              alt={room.name}
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "10px" }}>{room.name}</h3>
            <p><strong>Amenities:</strong> {Array.isArray(room.amenities) ? room.amenities.join(', ') : 'N/A'}</p>
            <p><strong>Max Count:</strong> {room.maxCount}</p>
            <p><strong>Phone:</strong> {room.phoneNumber}</p>
            <button style={{ marginRight: "10px" }}>Book Now</button>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
