import { allPosts } from 'contentlayer/generated'

import { PostCard } from '@/components/molecules/PostCard'

export default function Home() {
  const posts = allPosts

  return (
    <main>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ullam
        aliquam commodi perferendis vero? Ex eveniet expedita suscipit
        asperiores ullam! Tempora natus, quam aspernatur laudantium dicta iste
        ab deserunt accusantium.
      </div>

      <div>
        {posts.map((post) => (
          <PostCard key={post._id} />
        ))}
      </div>
    </main>
  )
}
