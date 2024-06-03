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
      return date.toLocaleTimeString('jp-JP', { timeZone: 'Asia/Tokyo', hour12: false });
    };

    const formatDate = (date: Date) => {
      return date.toLocaleDateString('vi-VN');
    };

  return (
    <div className="clock-container">
      <div className="branding">Nguyễn Quốc Đạt Originals</div> 
      <div className="time">{formatTime(time)}</div>
      <div className="date">{formatDate(time)}</div>
    </div>
  );
};

export default Clock;