export function findCenterCoordinates(boundingBox: string[]): number[] {
  const middleLat = (parseFloat(boundingBox[0]) + parseFloat(boundingBox[1])) / 2
  const middleLon = (parseFloat(boundingBox[2]) + parseFloat(boundingBox[3])) / 2
  return [middleLon, middleLat]
}
