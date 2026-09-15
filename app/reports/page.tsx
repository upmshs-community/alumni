export default function ReportsPage() {
  return <>
    <div className="topbar"><div><div className="kicker">Analytics</div><h1>Department Reports</h1><p>Generate outcomes reports for program evaluation, accreditation, and alumni engagement.</p></div></div>
    <div className="grid two-col">
      <div className="card"><h2>Academic & licensure</h2><p>Admission → completion rate by batch</p><p>Graduation trends</p><p>PLE attempts and pass rate</p><p>Time from graduation to licensure</p><p>Unverified licensure records</p></div>
      <div className="card"><h2>Workforce & service</h2><p>Current practice location</p><p>Eastern Visayas retention</p><p>Rural / underserved-community service</p><p>Government vs private practice</p><p>Residency and specialty distribution</p></div>
    </div>
  </>;
}
