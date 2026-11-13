type AssignmentErrorProps = {
  onRetry: () => void;
};

export default function AssignmentError({ onRetry }: AssignmentErrorProps) {
  return (
    <div className='col-span-full bg-white flex flex-col items-center justify-center py-20 px-6 border-2 border-black rounded-xl'>
      <div className='text-red-500 mb-3 flex items-center justify-center'>
        <svg className='w-16 h-16' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
          />
        </svg>
      </div>
      <p className='text-gray-700 font-medium'>Không thể tải danh sách bài tập</p>
      <button
        onClick={onRetry}
        className='mt-5 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors'
      >
        Thử lại
      </button>
    </div>
  );
}
