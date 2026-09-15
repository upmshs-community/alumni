import { cohorts } from '../../lib/mock';

export default function CohortsPage() {
  return <>
    <div className="topbar"><div><div className="kicker">Cohorts</div><h1>MD Batch Tracking</h1><p>Preserves the original ledger structure while adding longitudinal outcomes.</p></div></div>
    <div className="table-wrap"><table><thead><tr><th>Batch</th><th>Academic year</th><th>Admitted</th><th>Completed</th><th>Licensed</th><th>Completion rate</th><th>Notes</th></tr></thead><tbody>
      {cohorts.map(c => { const rate = c.admitted_count && c.completed_count ? `${Math.round(c.completed_count/c.admitted_count*100)}%` : '—'; return <tr key={c.batch_number}><td><strong>MD {c.batch_number}</strong></td><td>{c.academic_year || '—'}</td><td>{c.admitted_count ?? '—'}</td><td>{c.completed_count ?? '—'}</td><td>{c.licensed_count ?? '—'}</td><td>{rate}</td><td>{c.notes || '—'}</td></tr> })}
    </tbody></table></div>
  </>;
}
