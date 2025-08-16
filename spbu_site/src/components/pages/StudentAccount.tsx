import React, { useEffect } from 'react';

const StudentAccount: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://application.spbu.ru/rus-sign-in';
  }, []);

  return null;
};

export default StudentAccount;
