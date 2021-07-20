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
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <UserAvatar /> <p style={{ margin: 0, paddingLeft: 5 }}>{user.name}</p>
      </div>

      <Row gutter={[20, 20]} style={{ width: 250 }} justify="center">
        {phoneNums.map(num => (
          <Col>
            <Avatar
              size={43}
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
