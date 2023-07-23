import { X as CloseIcon, List as OpenIcon } from '@phosphor-icons/react'

type ToggleButtonProps = {
  isOpenMenu: boolean
  handleToggleMenu: () => void
}

export const ToggleButton = ({
  isOpenMenu,
  handleToggleMenu
}: ToggleButtonProps) => {
  const accessibilityButtonATitle = isOpenMenu ? 'Fechar' : 'Abrir'

  return (
    <button onClick={handleToggleMenu} title={accessibilityButtonATitle}>
      {isOpenMenu ? (
        <CloseIcon size={32} data-testid="close-icon" />
      ) : (
        <OpenIcon size={32} data-testid="open-icon" />
      )}
    </button>
  )
}
