import React from 'react';
import { Avatar } from 'antd';
import { user } from './data';
import './style.css';

export default function UserAvatar({ size }) {
  const [firstName, lastName] = user.name.split(' ');
  const userInitial = `${firstName[0]}${lastName[0]}`;

  return (
    <>
      {user.userImgUrl ? (
        <Avatar src={user.userImgUrl} size={size} />
      ) : (
        <Avatar size={size}>{userInitial}</Avatar>
      )}
    </>
  );
}
