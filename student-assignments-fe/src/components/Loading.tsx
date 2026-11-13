export default function AssignmentLoading({ titleLoading }: { titleLoading: string }) {
  return (
    <div className='col-span-full bg-white flex flex-col items-center justify-center py-20 px-6 border-2 border-black rounded-xl'>
      <div className='w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin' />
      <p className='mt-4 text-md text-black-500'>{titleLoading}</p>
    </div>
  );
}
