export default function UpdatesPage() {
  return <>
    <div className="topbar"><div><div className="kicker">Workflow</div><h1>Alumni Self-Updates</h1><p>Submitted changes stay pending until a Department of Medicine administrator reviews them.</p></div></div>
    <div className="grid two-col">
      <div className="card"><h2>Recommended alumni update form</h2><p className="label">Fields alumni may submit</p><p>Current institution and role</p><p>Specialty / residency / fellowship</p><p>Municipality, province, region, country</p><p>Rural or underserved service</p><p>Professional email and contact number</p><p>Mentorship / research / speaker availability</p></div>
      <div className="card"><h2>Admin review flow</h2><p>1. Alumni submits update</p><p>2. Record enters <strong>Pending Review</strong></p><p>3. Admin compares with existing profile</p><p>4. Admin approves or rejects</p><p>5. Audit log records the change</p></div>
    </div>
  </>;
}
