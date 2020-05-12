export const nullishToEmptyString = v => (v === null || v === void 0 ? '' : v)

export const emptyStringToNull = v => (v === '' ? null : v)

// Get a sub object value (ie. obj['a.b.0.key'])
export const get = (data, key) =>
  nullishToEmptyString(
    key.split('.').reduce((pointer, part) => pointer && pointer[part], data)
  )

export const update = (o, name, value) => {
  if (name.includes('.')) {
    const [key, ...rest] = name.split('.')
    return { ...o, [key]: update(o[key], rest.join('.'), value) }
  }
  return { ...o, [name]: value }
}

export const merge = (item, transient) =>
  // TODO: improve this
  Object.entries(transient).reduce(
    (o, [name, value]) => update(o, name, emptyStringToNull(value)),
    item
  )
