import { STROKE_END, STROKE_START, STROKE_UPDATE } from './constants';
import { RootState } from 'src/utils/types';
import { Action } from './actions';

const initialState: RootState = {
  stroke: { points: [], color: '#23262E' },
  strokeHistory: [],
  historyIdx: 0,
};

export const reducer = (state: RootState = initialState, action: Action) => {
  switch (action.type) {
    case STROKE_START: {
      return {
        ...state,
        stroke: { ...state.stroke, points: [action.payload] },
      };
    }

    case STROKE_UPDATE: {
      return {
        ...state,
        stroke: {
          ...state.stroke.points,
          points: [...state.stroke.points, action.payload],
        },
      };
    }

    case STROKE_END: {
      return {
        ...state,
        stroke: { ...state.stroke, points: [] },
        strokeHistory: [...state.strokeHistory, state.stroke],
      };
    }

    default:
      return state;
  }
};

export const currentStrokeSelector = (state: RootState) => state.stroke;
