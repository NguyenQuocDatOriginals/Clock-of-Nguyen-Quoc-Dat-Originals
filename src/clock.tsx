import React, { useEffect, useState } from 'react';
import './clock.scss';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', { hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('vi-VN');
  };

  return (
    <div className="clock-container">
      <div className="branding no-select">Nguyễn Quốc Đạt Originals</div> 
      <div className="time no-select">{formatTime(time)}</div>
      <div className="date no-select">{formatDate(time)}</div>
    </div>
  );
};

export default Clock;