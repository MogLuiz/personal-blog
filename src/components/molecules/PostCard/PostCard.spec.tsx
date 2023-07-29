import { render, screen } from '@testing-library/react'

import { PostCard } from '.'

describe('Components > Molecules - PostCard', () => {
  it('should be able to render the post card correctly', () => {
    render(
      <PostCard
        readingTime={5}
        body={{ code: 'code', raw: 'text' }}
        slug="slug"
        date="2021-10-10"
        description="description"
        image="/image.png"
        title="title"
        tags={['tag1', 'tag2']}
      />
    )

    const postCard = screen.getByRole('link', { name: /title/i })

    expect(postCard).toBeVisible()
    expect(postCard).toHaveAttribute('href', 'slug')
    expect(screen.getByText(/tag1/i)).toBeVisible()
    expect(screen.getByText(/tag2/i)).toBeVisible()
    expect(screen.getByText(/2021-10-10/i)).toBeVisible()
    expect(screen.getByText(/5 minutos de leitura/i)).toBeVisible()
    expect(screen.getByText(/title/i)).toBeVisible()
    expect(screen.getByText(/description/i)).toBeVisible()
  })
})
