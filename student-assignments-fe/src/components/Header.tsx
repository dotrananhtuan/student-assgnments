'use client';

import { useApp } from '@/context/AppContext';

function VietnamFlag() {
  return (
    <svg className='w-4 h-3 rounded-[2px] shrink-0 shadow-xs' viewBox='0 0 30 23'>
      <rect width='30' height='23' fill='#DA251D' />
      <polygon
        points='15,4 16.76,9.41 22.46,9.41 17.85,12.76 19.61,18.18 15,14.83 10.39,18.18 12.15,12.76 7.54,9.41 13.24,9.41'
        fill='#FFFF00'
      />
    </svg>
  );
}

function UKFlag() {
  return (
    <svg className='w-4 h-3 rounded-[2px] shrink-0 shadow-xs' viewBox='0 0 60 30'>
      <clipPath id='uk-clip'>
        <path d='M0,0 v30 h60 v-30 z' />
      </clipPath>
      <g clipPath='url(#uk-clip)'>
        <path d='M0,0 v30 h60 v-30 z' fill='#012169' />
        <path d='M0,0 L60,30 M60,0 L0,30' stroke='#fff' strokeWidth='6' />
        <path d='M0,0 L60,30 M60,0 L0,30' stroke='#C8102E' strokeWidth='4' />
        <path d='M30,0 v30 M0,15 h60' stroke='#fff' strokeWidth='10' />
        <path d='M30,0 v30 M0,15 h60' stroke='#C8102E' strokeWidth='6' />
      </g>
    </svg>
  );
}

export default function Header(props: any) {
  const { loading, onClick } = props;
  const { lang, t, setLang } = useApp();

  return (
    <header className='sticky top-0 z-10 border-black border-2 bg-[#0099ff] rounded-2xl'>
      <div className='mx-auto px-3 sm:px-5 h-14 sm:h-16 flex items-center justify-between rounded-2xl gap-2'>
        {/* Logo / Tên hệ thống */}
        <div className='flex items-center gap-2 min-w-0'>
          <span className='w-8 h-8 shrink-0 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm'>
            IM
          </span>

          <span className='font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 truncate'>
            {t('appName')}
          </span>
        </div>

        {/* Các nút điều khiển bên phải */}
        <div className='flex items-center gap-2 sm:gap-3 shrink-0'>
          {/* Nút làm mới */}
          <button
            type='button'
            onClick={onClick}
            disabled={loading}
            className='flex items-center justify-center gap-2 px-2.5 sm:px-3 py-2 rounded-md text-xs font-semibold border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <svg
              className={`w-4 h-4 shrink-0 ${loading ? 'animate-spin' : ''}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 4v5h5M20 20v-5h-5M5.5 9A7 7 0 0 1 18 6l2 3M4 15l2 3a7 7 0 0 0 12.5-3'
              />
            </svg>

            <span className='hidden sm:inline'>{t('refresh')}</span>
          </button>

          {/* Dropdown ngôn ngữ */}
          <div className='relative group'>
            <button
              type='button'
              className='flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-md text-xs font-semibold border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer'
            >
              {lang === 'vi' ? (
                <>
                  <VietnamFlag />
                  <span>VI</span>
                </>
              ) : (
                <>
                  <UKFlag />
                  <span>EN</span>
                </>
              )}

              <svg
                className='w-3.5 h-3.5 text-gray-500 transition-transform duration-200 group-hover:rotate-180'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
              </svg>
            </button>

            {/* Menu xổ xuống */}
            <div className='absolute right-0 top-full pt-1.5 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150 z-20'>
              <div className='rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg py-1 overflow-hidden'>
                <button
                  type='button'
                  onClick={() => setLang('vi')}
                  className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                    lang === 'vi'
                      ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <span className='flex items-center gap-2'>
                    <VietnamFlag />
                    <span>Tiếng Việt</span>
                  </span>
                  {lang === 'vi' && <span>✓</span>}
                </button>

                <button
                  type='button'
                  onClick={() => setLang('en')}
                  className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                    lang === 'en'
                      ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <span className='flex items-center gap-2'>
                    <UKFlag />
                    <span>English</span>
                  </span>
                  {lang === 'en' && <span>✓</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
