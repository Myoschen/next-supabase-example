import Link from 'next/link';
import { notFound } from 'next/navigation';
import MainWrapper from '@/components/main-wrapper';
import { createClient } from '@/utils/supabase-server';

export const revalidate = 60;

// export async function generateStaticParams() {
//   const supabase = createServerComponentSupabaseClient<Database>({
//     headers,
//     cookies,
//   });
//   const { data: posts } = await supabase.from('posts').select('id');

//   return posts?.map(({ id }) => ({
//     id,
//   }));
// }

async function Post({ params: { id } }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: post } = await supabase
    .from('posts')
    .select()
    .match({ id })
    .single();

  if (!post) {
    notFound();
  }

  return (
    <MainWrapper>
      <div className="grid justify-items-center">
        <div className="space-y-2">
          <h1 className="text-2xl">{post.title}</h1>
          <time dateTime={post.created_at}>{post.created_at}</time>
        </div>
        <Link href="/posts" className="mt-8 text-sm hover:underline">
          Back to Posts page
        </Link>
      </div>
    </MainWrapper>
  );
}

export default Post;
