import React from 'react';
import UserAvatar from './UserAvatar';
import { user } from './data';
import { Avatar, Row, Col } from 'antd';

// import './style.css';
const phoneNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export default function App() {
  const handleClick = e => {
    console.log(e.target.innerHTML);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 35 }}>
        <UserAvatar />{' '}
        <p
          style={{ margin: 0, paddingLeft: 5, fontSize: 14, color: '#6b6b6b' }}
        >
          {user.name}
        </p>
      </div>

      <Row gutter={[40, 35]} style={{ width: 400 }} justify="center">
        {phoneNums.map(num => (
          <Col key={num}>
            <Avatar
              size={63}
              onClick={handleClick}
              className="dial"
              style={{ cursor: 'pointer' }}
            >
              {num}
            </Avatar>
          </Col>
        ))}
      </Row>
    </div>
  );
}
