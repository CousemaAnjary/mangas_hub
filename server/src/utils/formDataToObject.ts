export function formDataToObject(formData: FormData): Record<string, any> {
  const obj: Record<string, any> = {}

  for (const [key, value] of formData.entries()) {
    // Si la clé existe déjà (ex: checkbox multiples), transforme en tableau
    if (key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value)
      } else {
        obj[key] = [obj[key], value]
      }
    } else {
      obj[key] = value
    }
  }

  return obj
}
