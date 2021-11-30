import { Radio, RadioChangeEvent } from 'antd'
import { useState } from 'react'

import { Modal } from 'shared/ui'

import styles from './student-modal.module.scss'

interface Props {
  id: number | null
  onClose: () => void
  onSave?: (role: string) => void
}

export const StudentModal = ({ id, onClose, onSave }: Props) => {
  const [role, setRole] = useState<string | null>(null)
  const options = [
    { label: `Админ`, value: `ADMIN` },
    { label: `Редактор`, value: `EDITOR` },
    { label: `Участник`, value: `MEMBER` },
  ]

  const onChange = (e: RadioChangeEvent) => {
    const newRole = options.find((item) => (item.label === e.target.value))
    newRole && setRole(newRole.value)
  }

  return (
    <Modal
      title={id}
      visible={Boolean(id)}
      onCancel={onClose}
      onOk={() => role && onSave && onSave(role)}
    >
      <Radio.Group
        buttonStyle='solid'
        className={styles.radios}
        optionType='button'
        options={options}
        onChange={onChange}
      />
    </Modal>
  )
}
