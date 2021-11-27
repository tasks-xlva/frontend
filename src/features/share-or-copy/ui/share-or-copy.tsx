import { CopyOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import copy from 'copy-to-clipboard'

import { useShare } from 'shared/lib'

type Props = Omit<
  Exclude<Parameters<typeof navigator.share>[0], undefined>,
  `files`
>

export const ShareOrCopy = (props: Props) => {
  const { url } = props

  const { isAvailable, handleShare } = useShare()

  return isAvailable ? (
    <ShareAltOutlined onClick={() => handleShare(props)} />
  ) : (
    <Tooltip title='Ссылка скопирована' trigger='click'>
      <CopyOutlined onClick={() => url && copy(url)} />
    </Tooltip>
  )
}
