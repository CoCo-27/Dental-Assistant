import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from './Logo.svg';

import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const { logOut } = useAuth();
  const router = useRouter();

  return (
    <header className="w-full py-1 fixed h-[96px] flex items-center font-semibold justify-between bg-gradient-to-r from-slate-300 to-white  shadow-md z-10 px-3 transition-all duration-300">
      <div
        id="logo"
        className="lg:text-xl p-2 mr-4 inline-flex items-center font-serif font-bold"
      >
        <Link href="/">
          <Image src={Logo} alt="logo" width={240} height={50} />
        </Link>
      </div>

      <div className="w-full grow inline-flex lg:flex-grow flex-row-reverse">
        <div className={`lg:inline-flex lg:flex-row flex flex-col`}>
          <button
            className="lg:inline-flex px-3 text-black py-2 rounded hover:bg-gray-400 hover:text-white"
            onClick={() => {
              logOut();
              router.push('/');
            }}
          >
            Log out
          </button>
        </div>
        {/* <button
          onClick={() => setShowNav(!showNav)}
          type="button"
          className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 -53 384 384"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Header;
