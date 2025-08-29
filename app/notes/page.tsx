import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { fetchNotes } from '@/lib/api';
import { NotesClient } from './Notes.client';

async function Notes() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes'],
    queryFn: () => fetchNotes(1, ''),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}

export default Notes;
