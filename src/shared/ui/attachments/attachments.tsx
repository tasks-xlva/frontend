import { Upload } from 'antd'
import { ComponentProps, useCallback, useEffect, useState } from 'react'

import { api, routes } from 'shared/api'

interface Props {
  value?: string[]
  onChange?: (value: string[]) => void
}

export const Attachments = ({ value, onChange }: Props) => {
  const [fileList, setFileList] = useState<
    ComponentProps<typeof Upload>[`fileList`]
  >([])

  const handleUpload = useCallback<
    Exclude<ComponentProps<typeof Upload>[`customRequest`], undefined>
  >(async ({ file, onProgress, onError, onSuccess }) => {
    try {
      const formData = new FormData()
      formData.append(`file`, file)
      const { data } = await api.post(routes.files, formData, {
        onUploadProgress: onProgress,
      })
      console.log(onSuccess, data)
      if (onSuccess) {
        onSuccess(data.file)
      }
    } catch (error: any) {
      if (onError) {
        onError(error)
      }
    }
  }, [])

  const handleChange = useCallback<
    Exclude<ComponentProps<typeof Upload>[`onChange`], undefined>
  >(
    ({ fileList }) => {
      setFileList(fileList)
      if (onChange) {
        onChange(fileList.map((file) => file.response))
      }
    },
    [onChange],
  )

  useEffect(() => {
    if (!fileList?.length) {
      setFileList(
        value?.map((url) => ({ url, uid: url, name: url, response: url })),
      )
    }
  }, [fileList?.length, value])

  return (
    <Upload
      customRequest={handleUpload}
      fileList={fileList}
      listType='picture-card'
      onChange={handleChange}
    >
      {`Загрузить`}
    </Upload>
  )
}
