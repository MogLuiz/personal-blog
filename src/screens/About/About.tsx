import { Link } from '@/components/atoms/Link'

import * as S from './styles'

export const AboutUILayer = () => (
  <main>
    <S.Title>Sobre mim</S.Title>

    <div style={{ height: '24rem', width: '100%', position: 'relative' }}>
      <S.Image
        src="/assets/images/image-post.jpeg"
        alt="Foto de exemplo"
        fill
      />
    </div>

    <S.Subtitle>Primeiramente, agradeço por estar aqui.</S.Subtitle>

    <S.Paragraph>
      Sou apaixonado por tecnologia e em como ela transforma a vida das pessoas.
      Adoro desafios que me tiram da zona de conforto e estou sempre em busca de
      evoluir tecnicamente.
    </S.Paragraph>

    <S.Paragraph>
      Sou apaixonado por tecnologia e em como ela transforma a vida das pessoas.
      Adoro desafios que me tiram da zona de conforto e estou sempre em busca de
      evoluir tecnicamente.
      <Link href="https://www.google.com">Aqui</Link>
    </S.Paragraph>

    <S.Paragraph>
      Sou apaixonado por tecnologia e em como ela transforma a vida das pessoas.
      Adoro desafios que me tiram da zona de conforto e estou sempre em busca de
      evoluir tecnicamente.
    </S.Paragraph>

    <S.Paragraph>
      Sou apaixonado por tecnologia e em como ela transforma a vida das pessoas.
      Adoro desafios que me tiram da zona de conforto e estou sempre em busca de
      evoluir tecnicamente.
    </S.Paragraph>
  </main>
)
