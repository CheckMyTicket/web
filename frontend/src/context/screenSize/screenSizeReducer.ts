import { IinitialState } from './screenSizeProvider'

type actionProps = { type: 'CHANGE_VIEWPORT'; payload: string }

export default function screenSizeReducer(
  state: IinitialState,
  action: actionProps
) {
  switch (action.type) {
    case 'CHANGE_VIEWPORT':
      if (state.viewSize !== action.payload) {
        return { ...state, viewSize: action.payload }
      }
      return state
    default:
      return state
  }
}
