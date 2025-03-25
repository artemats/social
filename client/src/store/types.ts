export type StatusTypes = 'IDLE' | 'PENDING' | 'FULFILLED' | 'REJECTED'

export type sliceStateProps<T, E = Error> = {
  data: T
  status?: StatusTypes
  error: E | null
}
