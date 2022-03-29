import {Point} from '../utils/types';
import { STROKE_END, STROKE_START, STROKE_UPDATE } from './constants';

export type Action = 
| {
    type: typeof STROKE_START
    payload: Point
  }
| {
    type: typeof STROKE_UPDATE
    payload: Point
  }
| {
    type: typeof STROKE_END
  }

export const strokeStart = (x: number, y: number) => {
  return {type: STROKE_START, payload: {x, y}}
}

export const strokeUpdate = (x: number, y: number) => {
  return {type: STROKE_UPDATE, payload: {x,y}}
}

export const strokeEnd = () => {
  return {type: STROKE_END}
}