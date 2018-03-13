import Future from 'fluture'

const thunkRes = () => dispatch =>
  dispatch({ type: 'RESOLVE' })

const thunkRej = () => dispatch =>
  dispatch({ type: 'REJECT' })

export const resolve = () =>
  Future.after(10, undefined)
    .bimap(thunkRej, thunkRes)

export const reject = () =>
  Future.rejectAfter(10, undefined)
    .bimap(thunkRej, thunkRes)
