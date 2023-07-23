import { X as CloseIcon, List as OpenIcon } from '@phosphor-icons/react'

type ToggleButtonProps = {
  isOpenMenu: boolean
  handleToggleMenu: () => void
}

export const ToggleButton = ({
  isOpenMenu,
  handleToggleMenu
}: ToggleButtonProps) => (
  <>
    <button>
      <CloseIcon size={32} data-testid="close-icon" />
    </button>
  </>
)
