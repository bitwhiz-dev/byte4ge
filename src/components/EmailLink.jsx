import React from 'react';

const EmailLink = () => {
  const email = 'contact@byte4ge.com';
  const subject = 'Hello!';
  const body = 'Type your Message here:';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <button>
      <a href={mailtoLink} className="text-dimWhite flex font-poppins font-normal py-[2px]">
        ✉️ contact@byte4ge.com
      </a>
    </button>
  );
};

export default EmailLink;