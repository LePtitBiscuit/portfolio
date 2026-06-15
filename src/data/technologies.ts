export interface Technology {
  name: string
  iconUrl: string
}

const simpleIconUrl = (slug: string): string => `https://cdn.simpleicons.org/${slug}/b3def8`

export const technologies: Technology[] = [
  { name: 'CI/CD Pipeline', iconUrl: simpleIconUrl('githubactions') },
  { name: 'GitLab', iconUrl: simpleIconUrl('gitlab') },
  { name: 'Docker', iconUrl: simpleIconUrl('docker') },
  { name: 'Kubernetes', iconUrl: simpleIconUrl('kubernetes') },
  { name: 'Vue.js', iconUrl: simpleIconUrl('vuedotjs') },
  { name: 'Nuxt', iconUrl: simpleIconUrl('nuxt') },
  { name: 'Nginx', iconUrl: simpleIconUrl('nginx') },
  { name: 'Apache', iconUrl: simpleIconUrl('apache') },
  { name: 'PHP', iconUrl: simpleIconUrl('php') },
  { name: 'Python', iconUrl: simpleIconUrl('python') },
  { name: 'TypeScript', iconUrl: simpleIconUrl('typescript') },
  { name: 'JavaScript', iconUrl: simpleIconUrl('javascript') },
  { name: 'n8n', iconUrl: simpleIconUrl('n8n') },
  { name: 'Airtable', iconUrl: simpleIconUrl('airtable') },
  { name: 'Figma', iconUrl: simpleIconUrl('figma') },
  { name: 'Prisma', iconUrl: simpleIconUrl('prisma') },
  { name: 'PostgreSQL', iconUrl: simpleIconUrl('postgresql') },
  { name: 'MariaDB', iconUrl: simpleIconUrl('mariadb') },
  { name: 'Linux', iconUrl: simpleIconUrl('linux') },
  { name: 'Proxmox', iconUrl: simpleIconUrl('proxmox') },
  { name: 'Rust', iconUrl: simpleIconUrl('rust') },
  { name: 'REST API', iconUrl: simpleIconUrl('openapiinitiative') },
]
