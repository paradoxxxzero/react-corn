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

export const cloneArray = array => {
  const keys = Object.keys(array)

  const clonedArray = new Array(keys.length)
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    const cur = array[k]
    if (typeof cur !== 'object' || cur === null) {
      clonedArray[k] = cur
    } else if (cur instanceof Date) {
      clonedArray[k] = new Date(cur)
    } else {
      clonedArray[k] = clone(cur)
    }
  }
  return clonedArray
}

export const clone = o => {
  if (typeof o !== 'object' || o === null) {
    return o
  }
  if (o instanceof Date) {
    return new Date(o)
  }
  if (Array.isArray(o)) {
    return cloneArray(o)
  }

  const cloned = {}
  for (let k in o) {
    if (Object.hasOwnProperty.call(o, k) === false) {
      continue
    }

    const cur = o[k]
    if (typeof cur !== 'object' || cur === null) {
      cloned[k] = cur
    } else if (cur instanceof Date) {
      cloned[k] = new Date(cur)
    } else {
      cloned[k] = clone(cur)
    }
  }
  return cloned
}

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
  const itemClone = clone(item)
  Object.entries(transient).forEach(([name, value]) =>
    update(itemClone, name, emptyStringToNull(value))
  )
  return itemClone
}
