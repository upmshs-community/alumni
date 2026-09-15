'use client';
import { useMemo, useState } from 'react';
import { alumni } from '../../lib/mock';

export default function AlumniPage() {
  const [q, setQ] = useState('');
  const [batch, setBatch] = useState('all');
  const rows = useMemo(() => alumni.filter(a => {
    const matchesQ = a.full_name.toLowerCase().includes(q.toLowerCase()) || (a.province || '').toLowerCase().includes(q.toLowerCase());
    const matchesBatch = batch === 'all' || a.batch_number === Number(batch);
    return matchesQ && matchesBatch;
  }), [q, batch]);

  return <>
    <div className="topbar"><div><div className="kicker">Registry</div><h1>Alumni Records</h1><p>Search and filter alumni by cohort, licensure, career, and location.</p></div><button className="btn">+ Add alumnus</button></div>
    <div className="filters">
      <input className="input" placeholder="Search name or province" value={q} onChange={e=>setQ(e.target.value)} />
      <select value={batch} onChange={e=>setBatch(e.target.value)}><option value="all">All batches</option>{[18,19,20,21,22].map(b=><option key={b} value={b}>MD Batch {b}</option>)}</select>
    </div>
    <div className="table-wrap"><table><thead><tr><th>Name</th><th>Batch</th><th>Graduation</th><th>PLE</th><th>License</th><th>Current status</th><th>Location</th><th>Verification</th></tr></thead><tbody>
      {rows.map(a => <tr key={a.id}><td><strong>{a.full_name}</strong></td><td>{a.batch_number}</td><td>{a.graduation_date || '—'}</td><td>{a.ple_status}</td><td><span className={`status ${a.license_status==='Licensed'?'good':'warn'}`}>{a.license_status}</span></td><td>{a.current_status || '—'}{a.specialty ? ` · ${a.specialty}` : ''}</td><td>{a.province || '—'}{a.region ? `, ${a.region}` : ''}</td><td><span className={`status ${a.verification_status==='Verified'?'good':'warn'}`}>{a.verification_status}</span></td></tr>)}
    </tbody></table></div>
  </>;
}
