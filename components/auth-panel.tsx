'use client';
import useSupabase from '@/hooks/use-supabase';

function AuthPanel() {
  const { supabase, session } = useSupabase();

  const handleSignUpWithEmail = async () => {
    const { error } = await supabase.auth.signUp({});
  };

  const handleSignInWithEmail = async () => {
    const { error } = await supabase.auth.signInWithPassword({});
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
  };

  return (
    <div className="flex items-center gap-x-2">
      {session ? (
        <button
          className="cursor-default rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-200 transition-colors hover:bg-zinc-700"
          type="button"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      ) : (
        <>
          <button
            className="cursor-default rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-200 transition-colors hover:bg-zinc-700"
            type="button"
            onClick={handleSignUpWithEmail}
          >
            Sign Up
          </button>
          <button
            className="cursor-default rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-200 transition-colors hover:bg-zinc-700"
            type="button"
            onClick={handleSignInWithEmail}
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
}

export default AuthPanel;
