// src/constants/types.ts
export interface DepartmentSection {
  heading: string;
  content: string;
  scripture?: string;
  items?: string[];
}

export interface Department {
  title: string;
  description: string;
  image: string;
  sections: DepartmentSection[];
}

export type DepartmentSlug =
  | "mayordomia"
  | "diaconos"
  | "conquistadores"
  | "ministerios-personales"
  | "comunicaciones"
  | "escuela-sabatica"
  | "jovenes"
  | "universitarios"
  | "educacion"
  | "capellania"
  | "familia"
  | "salud"
  | "dorcas"
  | "evangelismo"
  | "tesoreria"
  | "secretaria";