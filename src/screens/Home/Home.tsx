import { Post } from 'contentlayer/generated'

import { PostCard } from '@/components/molecules/PostCard'

type HomeProps = {
  allPosts: Post[]
}

export const Home = ({ allPosts }: HomeProps) => (
  <main>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ullam
      aliquam commodi perferendis vero? Ex eveniet expedita suscipit asperiores
      ullam! Tempora natus, quam aspernatur laudantium dicta iste ab deserunt
      accusantium.
    </div>

    <div>
      {allPosts.map((post) => (
        <PostCard key={post._id} />
      ))}
    </div>
  </main>
)
