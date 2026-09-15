export type Alumni = {
  id: string;
  alumni_number?: string | null;
  batch_number: number;
  full_name: string;
  graduation_date?: string | null;
  ple_status: 'Passed' | 'Failed' | 'Not recorded' | 'Not taken';
  license_status: 'Licensed' | 'Not licensed' | 'For verification';
  current_status?: string | null;
  specialty?: string | null;
  institution?: string | null;
  province?: string | null;
  region?: string | null;
  rural_service?: boolean | null;
  verification_status: 'Verified' | 'Needs verification' | 'Alumni-confirmed' | 'Admin-confirmed';
};

export type Cohort = {
  batch_number: number;
  academic_year?: string;
  admitted_count?: number;
  completed_count?: number;
  licensed_count?: number;
  notes?: string;
};
