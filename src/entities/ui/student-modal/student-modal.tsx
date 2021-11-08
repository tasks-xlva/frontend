import { Button, Modal, Typography } from 'antd'

interface Props {
  id: number | null
  onClose: () => void
}

export const StudentModal = ({ id, onClose }: Props) => {
  return (
    <>
      <Modal
        visible={Boolean(id)}
        onCancel={onClose}
        footer={[
          <Button block type='primary' key='submit'>
            Сохранить
          </Button>,
        ]}
      >
        <Typography.Title>{id}</Typography.Title>
      </Modal>
    </>
  )
}
