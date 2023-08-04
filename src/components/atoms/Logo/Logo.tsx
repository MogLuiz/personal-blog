import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => (
  <Link href="/">
    <Image
      aria-label="Logo do projeto"
      className="pb-6 pt-6"
      src="/assets/images/logo.svg"
      alt="Logo"
      width={220}
      height={340}
    />
  </Link>
)
