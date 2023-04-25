'use client';
import { useContext } from 'react';
import { SupabaseContext } from '../contexts/supabase';

function useSupabase() {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used inside SupabaseContext!');
  }
  return context;
}

export default useSupabase;
