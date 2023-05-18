import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Rightbar = <T,>() => {
  const { t } = useTranslation('rightbar');
  const [selectBtn, setSelectBtn] = useState(0);

  return (
    <div
      className={`top-0 right-0 pt-4 z-1 flex h-full w-full flex-none flex-col space-y-2 bg-white px-4 gap-4 text-[14px] transition-all sm:relative sm:top-0 shadow-md`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 items-center">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-jxtyyz"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="BookTwoToneIcon"
            width={'2rem'}
            height={'2rem'}
            fill="#1976d2"
          >
            <path d="m13 13-3-2.25L7 13V4H6v16h12V4h-5z" opacity=".3"></path>
            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"></path>
          </svg>
          <h5 className="text-black font-bold text-2xl">
            {t('Dental Library')}
          </h5>
        </div>
        <div className="flex flex-row mt-4 p-4 bg-[#e5f6fd] rounded-md">
          <div className="flex w-12 h-12 pb-4 pr-4">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="InfoOutlinedIcon"
              fill="#1976d2"
            >
              <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
            </svg>
          </div>
          <span className="text-black text-base">
            {t(
              'This is future feature. After you start converstaion, Dental Assistant will collect research materials here',
            )}
          </span>
        </div>
      </div>

      {/* ---------- Medical Information ----------- */}
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 items-center">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-jxtyyz"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="MedicalInformationIcon"
            width={'2rem'}
            height={'2rem'}
            fill="#1976d2"
          >
            <path d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9-3h2v5h-2V4zm0 12H9v2H7v-2H5v-2h2v-2h2v2h2v2zm2-1.5V13h6v1.5h-6zm0 3V16h4v1.5h-4z"></path>
          </svg>
          <h5 className="text-black font-bold text-2xl">
            {t('Medical Information')}
          </h5>
        </div>
        <div className="flex flex-row mt-4">
          <span className="text-black text-base">
            {t(
              'Provide your medical information for more persionalized and informative suggestions',
            )}
          </span>
        </div>
        <div className="flex flex-row mt-4">
          <button
            className={`w-1/2 cursor-pointer p-2 rounded-l-md border border-y-black/20 border-l-black/20 ${
              selectBtn === 0
                ? 'bg-[#00000014] text-black'
                : 'bg-white text-black/20'
            }`}
            onClick={() => setSelectBtn(0)}
          >
            {t('IMPERIAL')}
          </button>
          <button
            className={`w-1/2 cursor-pointer p-2 rounded-r-md border border-black/20 ${
              selectBtn === 1
                ? 'bg-[#00000014] text-black'
                : 'bg-white text-black/20'
            }`}
            onClick={() => setSelectBtn(1)}
          >
            {t('METRIC')}
          </button>
        </div>
      </div>

      {/* ---------- Core ----------- */}
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 items-center">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-jxtyyz"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="FilterTiltShiftIcon"
            width={'2rem'}
            height={'2rem'}
            fill="#1976d2"
          >
            <path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9 1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z"></path>
          </svg>
          <h5 className="text-black font-bold text-2xl">{t('Core')}</h5>
        </div>
        <div className="p-4 grid grid-cols-2">
          <div className="p-2">
            <input
              type={'text'}
              id="age"
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-md border p-2.5 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="yr"
            />
          </div>
          <div className="p-2">
            <input
              type={'text'}
              id="weight"
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-md border p-2.5 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="lb"
            />
          </div>
          <div className="p-2 flex gap-2">
            <input
              type={'text'}
              id="height"
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-md border p-2.5 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="ft"
            />
            <input
              type={'text'}
              id="height"
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-md border p-2.5 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="in"
            />
          </div>
          <div className="relative z-0 p-2">
            <input
              type={'text'}
              name="symptoms"
              id="symptoms"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[#00000014] rounded-t-md border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="symptoms"
              className="peer-focus:font-medium px-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t('Symptoms')}
            </label>
          </div>
          <div className="relative z-0 p-2">
            <input
              type={'text'}
              name="allergies"
              id="allergies"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[#00000014] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="allergies"
              className="peer-focus:font-medium px-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t('Allergies')}
            </label>
          </div>
          <div className="p-2">{t('Medications')}</div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
