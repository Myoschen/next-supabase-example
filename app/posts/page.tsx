import Link from 'next/link';
import MainWrapper from '@/components/main-wrapper';
import { createClient } from '@/utils/supabase-server';

export const revalidate = 60;

async function Posts() {
  const supabase = createClient();
  const { data: posts } = await supabase.from('posts').select('*');

  if (!posts) {
    return <p>No posts in database.</p>;
  }

  return (
    <MainWrapper>
      <div className="grid justify-items-center">
        <div>
          <h1 className="text-2xl font-semibold">Posts</h1>
          {/* 
            https://medium.com/unalai/%E8%AA%8D%E8%AD%98-html-pre-tag-3be6d5f32e54
            white-space: pre 連續的空白會被保留，只有遇到 <br> 元素或是換行符號時才會換行。 
            <pre>
              https://blog.infolink.com.tw/2021/javescirpt-tricks-json-stringify/
              {JSON.stringify(posts, null, 2)}
            </pre> 
          */}
          <ul className="mt-4 space-y-2">
            {posts.length
              ? posts.map((post, idx) => (
                  <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                      {idx + 1}. {post.title}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <Link href="/" className="mt-8 text-sm hover:underline">
          Back to Home page
        </Link>
      </div>
    </MainWrapper>
  );
}

export default Posts;
