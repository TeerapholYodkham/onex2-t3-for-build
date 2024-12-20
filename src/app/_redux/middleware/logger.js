const logger = store => next => action => {
  const type = action.type.split('/')
  const slice = type[0]
  const reducer = type[1]
  console.groupCollapsed(`[${slice}] ${reducer}`)
  // console.log('before :', store.getState()[slice])

  let result = next(action)
  // console.log('payload :', result.payload)
  // console.log('after :', store.getState()[slice])
  console.groupEnd()
  return result
}

export default logger
