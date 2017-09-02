export const UPDATE_EXAMPLE = 'UPDATE_EXAMPLE'

export function updateExampleData(newValue) {
  console.log('i am being called')
  return {
      type: UPDATE_EXAMPLE,
      example: {
        exampleData: newValue
      }
    }
}
