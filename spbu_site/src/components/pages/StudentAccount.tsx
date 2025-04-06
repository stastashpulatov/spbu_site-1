import React, { useEffect } from 'react';

const StudentAccount: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://my.spbu.ru/Login.aspx?ReturnUrl=/';
  }, []);

  return null;
};

export default StudentAccount;
