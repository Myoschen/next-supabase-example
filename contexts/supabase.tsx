'use client';
import { createContext, ReactNode, useState } from 'react';
import { createClient } from '@/utils/supabase-browser';

import type { SupabaseClient, Session } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../types/database';

type Nullable<T> = T | null;

type SupabaseContextType = {
  supabase: SupabaseClient<Database>;
  session: Nullable<Session>;
};

const SupabaseContext = createContext<SupabaseContextType | null>(null);

interface ProviderProps {
  children: ReactNode;
  session: Nullable<Session>;
}

function SupabaseProvider({ children, session }: ProviderProps) {
  const [supabase] = useState(() => createClient());

  return (
    <SupabaseContext.Provider value={{ supabase, session }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export { SupabaseContext, SupabaseProvider };
