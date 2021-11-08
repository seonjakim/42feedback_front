import { cadetIds } from '../../../cadets'

export default function handler(req, res) {
  res.status(200).json(cadetIds)
}
