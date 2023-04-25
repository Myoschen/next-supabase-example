import { cookies, headers } from 'next/headers';
import { Database } from '@/types/database';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

export const createClient = () =>
  createServerComponentSupabaseClient<Database>({ headers, cookies });
