type PostDataLayerProps = {
  params: {
    slug: string
  }
}

export default function PostDataLayer({ params }: PostDataLayerProps) {
  console.log({ params })

  return (
    <div>
      <h1>Post Data Layer</h1>
    </div>
  )
}
