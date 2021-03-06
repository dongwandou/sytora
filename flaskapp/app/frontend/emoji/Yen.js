import React from 'react';

export default function Yen(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path fill="#89664c" d="m0 46.5h64v9h-64z" />
      <path fill="#d3976e" d="m0 8.5h64v38h-64z" />
      <path fill="#94989b" d="m24 46.5h16v9h-16z" />
      <path fill="#89664c" d="m4 12.5h56v30h-56z" />
      <path fill="#d3976e" d="m7 15.5h50v24h-50z" />
      <circle cx={45} cy="27.5" r={8} fill="#89664c" />
      <path fill="#d0d0d0" d="m24 8.5h16v38h-16z" />
      <path fill="#fff" d="m22 21.2l-1.2-1.7-4.8 4.6-4.8-4.6-1.2 1.7 4.5 4.3h-2.3v2.2h2.8v2.3h-2.8v2.2h2.8v3.3h2v-3.3h2.8v-2.2h-2.8v-2.3h2.8v-2.2h-2.3z" />
    </svg>
  );
}
