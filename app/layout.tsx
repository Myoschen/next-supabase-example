import './globals.css';
import { Work_Sans } from 'next/font/google';
import AuthPanel from '@/components/auth-panel';
import SupabaseListener from '@/components/supabase-listener';
import { SupabaseProvider } from '@/contexts/supabase';
import { createClient } from '@/utils/supabase-server';

export const metadata = {
  title: 'Next.js RSC with Supabase',
  description: 'An example use Next.js RSC with Supabase.',
};

const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--ff-work-sans',
  preload: false,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className={work_sans.variable}>
      <body className="flex min-h-screen flex-col items-center gap-y-8 p-24 font-work-sans">
        {/* https://beta.nextjs.org/docs/rendering/server-and-client-components#rendering-third-party-context-providers-in-server-components */}
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <AuthPanel />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
