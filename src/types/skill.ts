export interface SkillImage {
  src: string
  description: string
}

export interface CriticalLearning {
  code: string
  title: string
  description: string
  main_points: string[]
  project_context?: string
  images?: SkillImage[]
  impact?: string[]
  visuals?: string[]
}

export interface SkillLevel {
  name: string
  description: string
  critical_learnings: CriticalLearning[]
}

export interface Skill {
  title: string
  description: string
  icon: string
  levels: SkillLevel[]
}

export interface FlatLearning extends CriticalLearning {
  levelIndex: number
  levelName: string
  indexInLevel: number
  totalInLevel: number
}
