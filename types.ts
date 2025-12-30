
export enum FlowType {
  JOB_SEEKER = 'JOB_SEEKER',
  EMPLOYER = 'EMPLOYER',
  ADMIN_MODERATOR = 'ADMIN_MODERATOR'
}

export interface FlowStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
  subSteps?: FlowStep[];
}

export interface SchemaTable {
  name: string;
  columns: {
    name: string;
    type: string;
    isPrimary?: boolean;
    isForeign?: boolean;
  }[];
}
