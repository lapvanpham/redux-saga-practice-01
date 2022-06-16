import {LOGIN } from './constants'

export default function login (account) {
  return {
    type: LOGIN,
    payload: account,
  }
}