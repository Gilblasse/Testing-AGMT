import React, { useState, useEffect } from 'react';
import UserAvatar from './UserAvatar';
import { user } from './data';
import { Avatar, Row, Col, Input } from 'antd';
import './style.css';

const phoneNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function App() {
  const [pin, setPin] = useState([]);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const inputs = [
    { val: input1, set: setInput1 },
    { val: input2, set: setInput2 },
    { val: input3, set: setInput3 },
    { val: input4, set: setInput4 }
  ];

  const handleClick = e => {
    if (pin.length < 4) {
      setPin(prv => [...prv, e.target.innerText]);
    }
  };

  const handleBackspace = () => {
    if (pin.length > 0) {
      const reaminingPin = pin.slice(0, pin.length - 1);
      inputs[pin.length - 1].set('');
      setPin(reaminingPin);
    }
  };

  const addPinToInput = () => {
    const recentPin = pin[pin.length - 1];
    const idx = pin.indexOf(recentPin);

    if (idx >= 0) {
      inputs[idx].set(recentPin);
    }
  };

  useEffect(() => addPinToInput(), [pin]);

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

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 35
        }}
      >
        <p>Please Enter Your 4 Digit Pin</p>
        <Input.Group size="large">
          <Row gutter={30} justify="center" style={{ width: '390px' }}>
            <Col span={6}>
              <Input
                defaultValue=""
                className="digit-input"
                value={input1}
                disabled
              />
            </Col>
            <Col span={6}>
              <Input
                defaultValue=""
                className="digit-input"
                value={input2}
                disabled
              />
            </Col>
            <Col span={6}>
              <Input
                defaultValue=""
                className="digit-input"
                value={input3}
                disabled
              />
            </Col>
            <Col span={6}>
              <Input
                defaultValue=""
                className="digit-input"
                value={input4}
                disabled
              />
            </Col>
          </Row>
        </Input.Group>
      </div>

      <Row
        gutter={[40, 35]}
        style={{ width: 400, marginTop: 30 }}
        justify="center"
      >
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

        <Row justify="end" style={{ width: '100%' }}>
          <Col pull={4}>
            <svg
              onClick={handleBackspace}
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: '3.2rem',
                width: '3.2rem',
                color: 'rgb(221, 221, 221)',
                cursor: 'pointer'
              }}
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
              />
            </svg>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
