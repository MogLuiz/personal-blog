import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/config'
import { PostScreen } from '@/screens/Post'
import { getPostBySlug } from '@/services/PostService'

type PostDataLayerProps = {
  params: {
    slug: string
  }
}

export default function PostDataLayer({ params }: PostDataLayerProps) {
  const { post } = getPostBySlug(params.slug)

  if (!post) notFound()

  return <PostScreen post={post} />
}

export function generateMetadata({ params }: PostDataLayerProps): Metadata {
  const { post } = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post não encontrado'
    }
  }

  return {
    title: post.title,
    description: post.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}/${post.slug}`,
      title: post.title,
      description: post.description,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${post.image}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${siteConfig.url}${post.image}`]
    }
  }
}
