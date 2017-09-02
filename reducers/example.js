import { UPDATE_EXAMPLE } from '../actions/example'

const DEFAULT_STATE = {
  example: {
    exampleData: 0
  }
}

export default function example(state = DEFAULT_STATE, action) {
  console.log(UPDATE_EXAMPLE)
  switch(action.type) {
    case UPDATE_EXAMPLE:
      return {
        ...state,
        example: action.example
      }
      default:
        return state
  }
}
