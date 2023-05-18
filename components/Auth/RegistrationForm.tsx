import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { RegistrationType } from '@/types/AuthTypes';

import Notification from '../Notification/Notification';
import { PageWrapper } from './PageWrapper';

import { useAuth } from '@/context/AuthContext';

const RegistrationForm = () => {
  const [data, setData] = useState<RegistrationType>({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState<Boolean>(false);

  // Use the signUp method from the AuthContext
  const { signUp } = useAuth();
  const router = useRouter();

  const handleRegistration = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      await signUp(data.email, data.password);
      setLoading(false);
      Notification('success', 'Register Success');
      router.push('/');
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
      Notification('error', 'Server error');
    }
    console.log(data);
  };

  // Destructure data from the data object
  const { ...allData } = data;

  // Disable submit button until all fields are filled in
  const canSubmit = [...Object.values(allData)].every(Boolean);

  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-sm p-4 py-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 sm:py-10 md:p-8 md:py-14 dark:bg-gray-800 dark:border-gray-700">
          <form action="" onSubmit={handleRegistration} className="group">
            <h5 className="text-2xl sm:text-3xl font-medium sm:font-semibold text-gray-900 dark:text-white text-center mb-2">
              Register
            </h5>
            <p className="text-center text-md mb-8">
              Fill in the form below to create a new account
            </p>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                autoComplete="off"
                required
                pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="name@company.com"
                onChange={(e: any) => {
                  setData({
                    ...data,
                    email: e.target.value,
                  });
                }}
              />
              <span className="mt-1 hidden text-sm text-red-400">
                Please enter a valid email address.{' '}
              </span>
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                pattern=".{8,}"
                required
                onChange={(e: any) => {
                  setData({
                    ...data,
                    password: e.target.value,
                  });
                }}
              />
              <span className="mt-1 hidden text-sm text-red-400">
                Password must be at least 8 characters.{' '}
              </span>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="flex justify-center w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mb-8 mt-2 disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:pointer-events-none group-invalid:opacity-70"
            >
              {loading ? (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                'Create account'
              )}
            </button>
            <div className="text-md font-medium text-gray-500 dark:text-gray-300 flex text-center justify-center items-center">
              <NextLink
                href="/"
                className="text-gray-500 hover:text-gray-800 hover:underline dark:text-gray-200 dark:hover:text-white flex justify-between items-center w-32"
              >
                <FiChevronLeft className="text-xl" /> Login Instead
              </NextLink>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RegistrationForm;
