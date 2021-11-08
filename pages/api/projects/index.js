import { projectList } from '../../../projects'

export default function handler(req, res) {
  res.status(200).json(projectList)
}
