interface Project {
  name: string
  desc: string
  repo: string
  web?: string
  doc?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'gigit',
    repo: 'gigit',
    desc: 'Gigit, a tool for downloading repository at a reasonable speed. It is written in Go, making it very efficient in starting any project.',
    doc: 'https://pkg.go.dev/github.com/nazhard/gigit',
  },
]
