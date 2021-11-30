import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useSubject } from 'entities/subjects/api'
import { useEditSubject } from 'pages/subject/lib/use-edit-subject'
import { Grid } from 'shared/ui'
import { SubjectForm } from 'widgets/subjects/ui'

export const Subject = () => {
  let { subjectId } = useParams<{ subjectId: string }>()
  const { subject } = useSubject(subjectId)
  const { handleEditSubject } = useEditSubject(subjectId)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Grid>
      <SubjectForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        values={subject}
        onSubmit={handleEditSubject}
      />
    </Grid>
  )
}
