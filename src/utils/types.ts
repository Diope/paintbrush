export type RootState = {
  stroke: Stroke
  strokeHistory: Stroke[]
  historyIdx: number
}

export type Stroke = {
  points: Point[]
  color: string
}

export type Point = {
  x: number
  y: number
}