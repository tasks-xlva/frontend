// TODO переделать весь компонент господи какой же это кал

import { Upload } from 'antd'
import { ComponentProps, useCallback, useEffect, useState } from 'react'

import { api, routes } from 'shared/api'

interface Props {
  value?: Components.Schemas.File[]
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
      const { data } = await api.post<Components.Schemas.File>(
        routes.files,
        formData,
        {
          onUploadProgress: onProgress,
        },
      )
      console.log(onSuccess, data)
      if (onSuccess) {
        onSuccess(data)
      }
    } catch (error: any) {
      if (onError) {
        onError(error)
      }
    }
  }, [])

  const handleChange = useCallback<
    (
      event: Pick<
        Parameters<
          Exclude<ComponentProps<typeof Upload>[`onChange`], undefined>
        >[0],
        `fileList`
      >,
    ) => void
  >(
    ({ fileList }) => {
      setFileList(fileList)
      if (onChange) {
        onChange(fileList.map((file) => file.response.id))
      }
    },
    [onChange],
  )

  useEffect(() => {
    if (!fileList?.length) {
      handleChange({
        fileList:
          value?.map(({ file }) => ({
            url: file,
            uid: file,
            name: file,
            response: file,
          })) || [],
      })
    }
  }, [fileList?.length, handleChange, value])

  return (
    <Upload
      customRequest={handleUpload}
      fileList={fileList}
      listType='picture-card'
      onChange={handleChange}
    >
      Загрузить
    </Upload>
  )
}
