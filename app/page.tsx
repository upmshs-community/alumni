import { alumni, cohorts } from '../lib/mock';

export default function Dashboard() {
  const admitted = cohorts.reduce((s, c) => s + (c.admitted_count || 0), 0);
  const completed = cohorts.reduce((s, c) => s + (c.completed_count || 0), 0);
  const licensed = cohorts.reduce((s, c) => s + (c.licensed_count || 0), 0);
  const verified = alumni.filter(a => a.verification_status === 'Verified' || a.verification_status === 'Admin-confirmed').length;

  return <>
    <div className="topbar">
      <div><div className="kicker">UP Manila School of Health Sciences</div><h1>Department of Medicine Alumni Dashboard</h1><p>Track graduation, licensure, practice location, specialty, and community service.</p></div>
      <span className="badge">● MVP Ready</span>
    </div>

    <div className="notice">Historical records should be migrated with a verification flag. Handwritten entries, corrections, and missing licensure fields should not be treated as final until reviewed.</div>

    <div className="grid stats section">
      <div className="card"><div className="label">Admitted (seeded batches)</div><div className="stat-value">{admitted}</div></div>
      <div className="card"><div className="label">Completed (recorded)</div><div className="stat-value">{completed}</div></div>
      <div className="card"><div className="label">Licensed (recorded)</div><div className="stat-value">{licensed}</div></div>
      <div className="card"><div className="label">Verified sample profiles</div><div className="stat-value">{verified}</div></div>
    </div>

    <div className="grid two-col section">
      <div className="card">
        <div className="section-title"><h2>Recent cohort tracking</h2></div>
        {cohorts.slice(-5).map(c => {
          const completedPct = c.admitted_count && c.completed_count ? Math.round(c.completed_count / c.admitted_count * 100) : 0;
          return <div key={c.batch_number} style={{marginBottom:16}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}><strong>MD Batch {c.batch_number}</strong><span className="label">{c.completed_count ?? '—'} / {c.admitted_count ?? '—'} completed</span></div>
            <div className="progress"><span style={{width:`${completedPct}%`}} /></div>
          </div>
        })}
      </div>
      <div className="card">
        <div className="section-title"><h2>Outcome fields</h2></div>
        <p className="label">Recommended longitudinal tracking for each alumnus:</p>
        <p>PLE status and licensure</p><p>Current institution and position</p><p>Residency / specialty / fellowship</p><p>Practice municipality, province, and region</p><p>Rural or underserved-community service</p><p>Last verified date and source</p>
      </div>
    </div>
  </>;
}
