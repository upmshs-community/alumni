import { Alumni, Cohort } from './types';

export const cohorts: Cohort[] = [
  { batch_number: 1, admitted_count: 12, completed_count: 12, licensed_count: 9, notes: 'Historical ledger; verify counts during migration.' },
  { batch_number: 2, admitted_count: 13, completed_count: 13, licensed_count: 9, notes: 'Historical ledger; verify counts during migration.' },
  { batch_number: 3, admitted_count: 14, completed_count: 12, licensed_count: 8, notes: 'Historical ledger; verify counts during migration.' },
  { batch_number: 18, admitted_count: 20, completed_count: 20, notes: 'Later cohort; licensure entries require validation.' },
  { batch_number: 19, admitted_count: 22, completed_count: 21, notes: 'Later cohort; licensure entries require validation.' },
  { batch_number: 20, admitted_count: 21, notes: 'Current historical record page had no completion/licensure totals filled in.' },
  { batch_number: 21, admitted_count: 14, notes: 'Current historical record page had no completion/licensure totals filled in.' },
  { batch_number: 22, admitted_count: 16, academic_year: '2023–2024', notes: 'Current historical record page had no completion/licensure totals filled in.' }
];

export const alumni: Alumni[] = [
  {
    id: 'sample-1',
    batch_number: 18,
    full_name: 'Sample Alumni A',
    graduation_date: '2023-08-11',
    ple_status: 'Passed',
    license_status: 'Licensed',
    current_status: 'General Practitioner',
    institution: 'Rural Health Unit',
    province: 'Leyte',
    region: 'Eastern Visayas',
    rural_service: true,
    verification_status: 'Verified'
  },
  {
    id: 'sample-2',
    batch_number: 19,
    full_name: 'Sample Alumni B',
    graduation_date: '2024-08-09',
    ple_status: 'Not recorded',
    license_status: 'For verification',
    current_status: 'Residency Training',
    specialty: 'Internal Medicine',
    institution: 'Teaching Hospital',
    province: 'Metro Manila',
    region: 'NCR',
    rural_service: false,
    verification_status: 'Needs verification'
  }
];
