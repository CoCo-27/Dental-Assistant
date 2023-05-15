import { IconReportMedical } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {}

export const ChatLoader: FC<Props> = () => {
  return (
    <div
      className="group px-[8rem] border-b border-black/10 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100"
      style={{ overflowWrap: 'anywhere' }}
    >
      <div className="flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl">
        <div className="min-w-[40px] items-end">
          <IconReportMedical size={30} strokeWidth={1} />
        </div>
        <span className="animate-pulse cursor-default mt-1">
          &#x25CF; &#x25CF; &#x25CF;
        </span>
      </div>
    </div>
  );
};
