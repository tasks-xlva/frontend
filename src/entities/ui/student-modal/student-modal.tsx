import { Modal } from 'shared/ui'

interface Props {
  id: number | null
  onClose: () => void
}

export const StudentModal = ({ id, onClose }: Props) => {
  return (
    <>
      <Modal title={id} visible={Boolean(id)} onCancel={onClose} />
    </>
  )
}
