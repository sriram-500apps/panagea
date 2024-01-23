interface FormField {
  type: string
  label: string
  name: string
  placeholder: string
  isRequired?: boolean
  options?: string[]
  customProps?: Record<string, any>
  fields?: FormField[]
}

export function flattenFormFields(fields: FormField[]): FormField[] {
  let flattenedFields: FormField[] = []

  fields.forEach((field) => {
    flattenedFields.push(field)

    if (field.type === 'grouped' || field.type === 'wizard') {
      if (field.fields) {
        flattenedFields = flattenedFields.concat(
          flattenFormFields(field.fields)
        )
      }
    }
  })

  return flattenedFields
}
