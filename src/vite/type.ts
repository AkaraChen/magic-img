export type Point = [number, number]

export type Line = Point[]

export type Lines = Line[]

export type PointMap = Map<string, Point>

export enum Directions {
  Left,
  LeftTop,
  Top,
  TopRight,
  Right,
  RightBottom,
  Bottom,
  BottomLeft,
}

enum Mode {
  combo,
  triangle,
  rect,
  ellipse,
  rotatedrect,
  beziers,
  rotatedellipse,
  polygon
}

export type LqipOptions = {
  width: number,
  height: number,
}

export type SqipOptions = {
  numberOfPrimitives: number
  blur: number
  mode: Mode
}

export type CucolorisOptions = {
  background: string
  color: string
  threshold: number
}

export type DrawOptions = {
  max: number
}

export type Options = {
  sqip: SqipOptions
  cucoloris: CucolorisOptions
  draw: DrawOptions
}