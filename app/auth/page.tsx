import MainWrapper from '@/components/main-wrapper';
import { createClient } from '@/utils/supabase-server';
import Link from 'next/link';

async function Auth() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <MainWrapper>
      <div className="grid justify-items-center">
        <div className="text-center font-work-sans">
          <h1 className="text-2xl font-semibold text-emerald-800">
            Authenticated
          </h1>
          <p className="mt-2 text-sm text-zinc-200">
            email: {session?.user.email}
          </p>
        </div>
        <Link href="/" className="mt-8 text-sm hover:underline">
          Back to Home page
        </Link>
      </div>
    </MainWrapper>
  );
}
export default Auth;
