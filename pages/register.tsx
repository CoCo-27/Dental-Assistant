import React from 'react';

import Head from 'next/head';

import RegistrationForm from '@/components/Auth/RegistrationForm';

const register = () => {
  return (
    <>
      <Head>
        <title>Dental Assistant</title>
        <meta name="description" content="ChatGPT but better." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://wunschlachen.de/wp-content/themes/wunschlachen-2.1.0/favicon.png"
        />
      </Head>

      <main className="bg-gradient-to-tr from-slate-500 to-white min-h-screen">
        <RegistrationForm />
      </main>
    </>
  );
};

export default register;
