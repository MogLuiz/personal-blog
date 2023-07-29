import Image from 'next/image'
import Link from 'next/link'

import { Tag } from '@/components/atoms/Tag'

import { BlogPost } from '@/models'

export const PostCard = ({
  readingTime,
  slug,
  date,
  description,
  image,
  title,
  tags
}: BlogPost) => (
  <Link href={slug}>
    <div className="relative h-80 w-full">
      <Image
        src={image}
        fill
        alt="title"
        priority
        className="rounded-xl object-cover object-center"
      />
    </div>

    <div className="pt-3">
      <div className="mb-3 flex flex-wrap gap-2">
        {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>

      <time className="text-gray-400">
        {date} • {readingTime} minutos de leitura
      </time>

      <h3 className="mt-2 max-w-md text-ellipsis text-2xl font-medium text-gray-50">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">{description}</p>
    </div>
  </Link>
)
