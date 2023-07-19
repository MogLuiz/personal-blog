import Image from 'next/image'

export const Logo = () => (
  <Image
    aria-label="Logo do projeto"
    className="pb-4 pt-4"
    src="/assets/images/logo.svg"
    alt="Logo"
    width={220}
    height={340}
  />
)
