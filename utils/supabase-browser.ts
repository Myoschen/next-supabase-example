import { Database } from '@/types/database';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

export const createClient = () => createBrowserSupabaseClient<Database>();
