// components/AssignCard.jsx
import { useApp } from '@/context/AppContext';
import { STATUS_CONFIG, StudentAssignment } from '@/types/assignment.type';

interface AssignCardProps {
  assignment: StudentAssignment;
}

export default function AssignCard({ assignment }: AssignCardProps) {
  const { t, lang } = useApp();

  const formatDateTime = (isoString: string | null): string => {
    if (!isoString) return '—';
    const date = new Date(isoString);
    return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-US', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: lang === 'en',
    }).format(date);
  };

  return (
    <div className='bg-white rounded-2xl border-2 border-black hover:shadow-md transition-shadow duration-200 p-4 flex flex-col justify-between'>
      <div className=''>
        <div className='flex items-center gap-2 mb-3'>
          {assignment.status.map((status) => {
            const statusInfo = STATUS_CONFIG[status];

            return (
              <span
                key={status}
                className={`text-xs font-semibold px-3 py-1 rounded-lg ${statusInfo.badgeClass}`}
              >
                {t(statusInfo.label)}
              </span>
            );
          })}
        </div>

        <h3 className='text-lg font-bold text-[#0099ff] mb-2 line-clamp-2'>{assignment.title}</h3>
      </div>

      {/* Hạn nộp */}
      <div className='border-t border-slate-100 pt-4 mt-2 space-y-2'>
        <div className='flex items-center justify-between bg-slate-50 px-3 py-2 rounded-xl border border-slate-300 text-xs'>
          <span className='text-slate-600 font-medium flex items-center gap-1.5'>
            <svg
              className='w-3.5 h-3.5 text-slate-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            {t('deadline')}:
          </span>
          <span className='font-semibold text-slate-800'>
            {formatDateTime(assignment.deadline)}
          </span>
        </div>

        {/* Thời gian nộp */}
        {assignment.submittedAt ? (
          <div className='flex items-center justify-between bg-emerald-100/70 px-3 py-2 rounded-xl border border-emerald-400 text-xs'>
            <span className='text-emerald-900 font-semibold flex items-center gap-1.5'>
              <svg
                className='w-3.5 h-3.5 text-emerald-700'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              {t('submitted_at')}:
            </span>
            <span className='font-bold text-emerald-900'>
              {formatDateTime(assignment.submittedAt)}
            </span>
          </div>
        ) : (
          <div className='flex items-center justify-between bg-slate-50/40 px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-400'>
            <span className='flex items-center gap-1.5'>
              <svg
                className='w-3.5 h-3.5 text-slate-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              {t('submitted_at')}:
            </span>
            <span className='italic'>{t('not_submitted')}</span>
          </div>
        )}
      </div>
    </div>
  );
}
