import { StatusTypes } from 'src/store/types.ts'

export const STATUS: Record<StatusTypes, StatusTypes> = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
}
