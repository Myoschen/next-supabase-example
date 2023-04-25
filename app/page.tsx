import MainWrapper from '@/components/main-wrapper';
import Link from 'next/link';

export default async function Home() {
  return (
    <MainWrapper>
      <div className="mt-8 grid justify-items-center gap-y-2">
        <Link href="/posts" className="text-sm hover:underline">
          Go to the Posts page
        </Link>
        <Link href="/auth" className="text-sm hover:underline">
          Go to the Auth page
        </Link>
      </div>
    </MainWrapper>
  );
}
