import { createContext, ReactNode, useEffect, useReducer } from 'react'
import screenSizeReducer from './screenSizeReducer'

interface Props {
  children: ReactNode
}
export interface IinitialState {
  viewSize: string
}

const initialState: IinitialState = {
  viewSize: 'sd'
}
export const ScreenSizeContext = createContext(initialState)

export default function ScreenSizeProvider({ children }: Props) {
  const [state, dispatch] = useReducer(screenSizeReducer, initialState)
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 768) {
        dispatch({ type: 'CHANGE_VIEWPORT', payload: 'sd' })
      } else if (window.innerWidth < 1024) {
        dispatch({ type: 'CHANGE_VIEWPORT', payload: 'md' })
      } else {
        dispatch({ type: 'CHANGE_VIEWPORT', payload: 'ld' })
      }
    }
    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])
  return (
    <ScreenSizeContext.Provider
      value={{
        viewSize: state.viewSize
      }}
    >
      {children}
    </ScreenSizeContext.Provider>
  )
}
