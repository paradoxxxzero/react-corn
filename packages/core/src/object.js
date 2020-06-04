export const nullishToEmptyString = v => (v === null || v === void 0 ? '' : v)

export const emptyStringToNull = v => (v === '' ? null : v)

// Get a sub object value (ie. obj['a.b.0.key'])
export const get = (data, key) =>
  nullishToEmptyString(
    key.includes('.')
      ? key.split('.').reduce((pointer, part) => pointer && pointer[part], data)
      : data[key]
  )

export const update = (o, name, value) => {
  if (name.includes('.')) {
    const [key, ...rest] = name.split('.')
    if (!o[key]) {
      o[key] = {}
    }
    update(o[key], rest.join('.'), value)
  } else {
    o[name] = value
  }
}

export const copy = o =>
  Object.fromEntries(
    Object.entries(o).map(([k, v]) => [
      k,
      v !== null && v !== undefined && typeof v === 'object'
        ? copy(v)
        : Array.isArray(v)
        ? [...v]
        : v,
    ])
  )

export const merge = (item, transient, names = null) => {
  if (!Object.keys(transient).length) {
    return item
  }
  if (names) {
    const newItem = {}
    names.forEach(name => {
      update(
        newItem,
        name,
        Object.keys(transient).includes(name)
          ? emptyStringToNull(transient[name])
          : get(item, name)
      )
    })
    return newItem
  }
  const itemCopy = copy(item)
  Object.entries(transient).forEach(([name, value]) =>
    update(itemCopy, name, emptyStringToNull(value))
  )
  return itemCopy
}
