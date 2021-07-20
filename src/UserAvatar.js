import React from 'react';
import { Avatar } from 'antd';
import { user } from './data';
import './style.css';

export default function UserAvatar() {
  const [firstName, lastName] = user.name.split(' ');
  const userInitial = `${firstName[0]}${lastName[0]}`;

  return (
    <>
      {user.userImgUrl ? (
        <Avatar src={user.userImgUrl} />
      ) : (
        <Avatar>{userInitial}</Avatar>
      )}
    </>
  );
}
