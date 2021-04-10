import { sample } from "lodash"


export const videoPaths = [
  "/videos/sl001.mp4",
  "/videos/sl002.mp4"
]

export function getRandomVideo(): string{
  return sample(videoPaths)
}
