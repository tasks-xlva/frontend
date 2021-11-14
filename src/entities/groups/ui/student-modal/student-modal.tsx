import { Modal } from 'shared/ui'
import { Radio } from 'antd'

interface Props {
  id: number | null
  onClose: () => void
}

export const StudentModal = ({ id, onClose }: Props) => {
  const options = [
    { label: 'Админ', value: 2 },
    { label: 'Редактор', value: 1 },
    { label: 'Участник', value: 0 },
  ]

  return (
    <Modal title={id} visible={Boolean(id)} onCancel={onClose}>
      <Radio.Group options={options} optionType='button' buttonStyle='solid' />
    </Modal>
  )
}
