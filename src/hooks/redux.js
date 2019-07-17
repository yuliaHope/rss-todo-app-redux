import { bindActionCreators } from 'redux'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useMemo } from 'react'

export function useActions(actions, deps) {
  const dispatch = useDispatch()
  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map(a => bindActionCreators(a, dispatch))
    }
    return bindActionCreators(actions, dispatch)
  }, deps ? [dispatch, ...deps] : [dispatch])
}

export function useShallowEqualSelector(selector) {
  return useSelector(selector, shallowEqual)
}