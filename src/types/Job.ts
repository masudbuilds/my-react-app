export type JobType = "Full-time" | "Part-time" | "Contract";
export type JobCategory = "Frontend" | "Backend" | "Design";
export type FilterCategory = "All" | JobCategory;

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: JobType;
  category: JobCategory;
  salary: string;
  isSaved: boolean;
}
