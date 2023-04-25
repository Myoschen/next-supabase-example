'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSupabase from '@/hooks/use-supabase';

interface Props {
  serverAccessToken?: string;
}

function SupabaseListener({ serverAccessToken }: Props) {
  const { supabase } = useSupabase();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        router.refresh();
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, supabase, router]);

  return null;
}

export default SupabaseListener;
