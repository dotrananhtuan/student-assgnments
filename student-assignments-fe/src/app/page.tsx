'use client';

import Header from '@/components/Header';
import { StudentAssignment } from '@/types/assignment.type';
import { useCallback, useEffect, useState } from 'react';
import AssignCard from './components/AssignCard';
import AssignmentLoading from '@/components/Loading';
import AssignmentError from '@/components/Error';
import { useApp } from '@/context/AppContext';

export default function HomePage() {
  const [assignments, setAssignments] = useState<StudentAssignment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useApp();

  const fetchAssignments = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('http://localhost:3001/assignments/my-assignments');
      if (!res.ok) {
        throw new Error(`Lỗi kết nối server: ${res.status}`);
      }
      const data: StudentAssignment[] = await res.json();
      setAssignments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi, vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAssignments();
  }, [fetchAssignments]);

  return (
    <main className='min-h-screen background py-6 xl:px-32 lg:px-20 px-6'>
      <Header loading={loading} onClick={fetchAssignments} />

      <div className='relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8'>
        {/* Loading */}
        {loading && <AssignmentLoading titleLoading={t('loading')} />}

        {/* Error */}
        {!loading && error && <AssignmentError onRetry={fetchAssignments} />}

        {/* Success */}
        {!loading &&
          !error &&
          assignments.length > 0 &&
          assignments.map((assign, index) => <AssignCard key={index} assignment={assign} />)}

        {/* Empty */}
        {!loading && !error && assignments.length === 0 && (
          <div className='col-span-full bg-white bor text-center py-20 text-gray-500  border-2 border-black rounded-xl'>
            {t('empty')}
          </div>
        )}
      </div>
    </main>
  );
}
