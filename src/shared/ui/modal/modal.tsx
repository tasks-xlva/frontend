import { Button, Modal as AntModal, Typography } from 'antd'
import { ComponentProps, ReactNode, useEffect } from 'react'
import classNames from 'classnames'
import styles from './modal.module.scss'

interface Props extends Omit<ComponentProps<typeof AntModal>, 'closable'> {
  title: ReactNode
}

export const Modal = ({
  title,
  children,
  footer,
  onOk,
  className,
  ...rest
}: Props) => {
  const [modal] = AntModal.useModal()

  useEffect(() => {}, [modal])

  return (
    <>
      <AntModal
        {...rest}
        closable={false}
        className={classNames(styles.modal, className)}
        footer={false}
      >
        <Typography.Title level={4} className={styles.title}>
          {title}
        </Typography.Title>
        {children}
        <div className={styles.footer}>
          {footer || (
            <Button
              block
              type='primary'
              onClick={() => modal.info({ title: 'Use Hook!' })}
            >
              Сохранить
            </Button>
          )}
        </div>
      </AntModal>
    </>
  )
}
