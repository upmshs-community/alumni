type VerificationStatus = "Admin-confirmed" | "Alumni-confirmed" | "Needs verification";
type AlumniRecord = {
  id: number;
  name: string;
  batch: number;
  gradYear: number;
  ple: string;
  license: string;
  career: string;
  specialty: string;
  institution: string;
  location: string;
  region: string;
  verification: VerificationStatus;
  rural: boolean;
  notes: string;
};

type Cohort = {
  batch: number;
  academicYear: string;
  admitted: number;
  completed: number;
  graduated: number;
  licensed: number;
};

type UpdateRequest = {
  id: number;
  alumnus: string;
  change: string;
  submitted: string;
};

const seedAlumni: AlumniRecord[] = [
  { id: 1, name: "Sample Alumna A, MD", batch: 18, gradYear: 2022, ple: "Passed", license: "Licensed", career: "Family Medicine Resident", specialty: "Family Medicine", institution: "Sample Medical Center", location: "Leyte", region: "Eastern Visayas", verification: "Admin-confirmed", rural: true, notes: "Demonstration record only." },
  { id: 2, name: "Sample Alumnus B, MD", batch: 19, gradYear: 2023, ple: "Passed", license: "Licensed", career: "General Practitioner", specialty: "General Practice", institution: "Municipal Health Office", location: "Samar", region: "Eastern Visayas", verification: "Alumni-confirmed", rural: true, notes: "Demonstration record only." },
  { id: 3, name: "Sample Alumna C, MD", batch: 20, gradYear: 2024, ple: "For verification", license: "For verification", career: "Postgraduate Internship / Transition", specialty: "Not recorded", institution: "Not recorded", location: "Metro Manila", region: "NCR", verification: "Needs verification", rural: false, notes: "Demonstration record only." },
  { id: 4, name: "Sample Alumnus D, MD", batch: 17, gradYear: 2021, ple: "Passed", license: "Licensed", career: "Internal Medicine Resident", specialty: "Internal Medicine", institution: "Regional Medical Center", location: "Cebu", region: "Central Visayas", verification: "Admin-confirmed", rural: false, notes: "Demonstration record only." },
  { id: 5, name: "Sample Alumna E, MD", batch: 16, gradYear: 2020, ple: "Passed", license: "Licensed", career: "Rural Health Physician", specialty: "Primary Care", institution: "Rural Health Unit", location: "Northern Samar", region: "Eastern Visayas", verification: "Alumni-confirmed", rural: true, notes: "Demonstration record only." },
  { id: 6, name: "Sample Alumnus F, MD", batch: 15, gradYear: 2019, ple: "Passed", license: "Licensed", career: "Pediatrics Specialist", specialty: "Pediatrics", institution: "Provincial Hospital", location: "Bohol", region: "Central Visayas", verification: "Admin-confirmed", rural: false, notes: "Demonstration record only." },
  { id: 7, name: "Sample Alumna G, MD", batch: 21, gradYear: 2025, ple: "Passed", license: "Licensed", career: "General Practitioner", specialty: "General Practice", institution: "District Hospital", location: "Southern Leyte", region: "Eastern Visayas", verification: "Needs verification", rural: true, notes: "Demonstration record only." },
  { id: 8, name: "Sample Alumnus H, MD", batch: 14, gradYear: 2018, ple: "Passed", license: "Licensed", career: "Public Health Physician", specialty: "Public Health", institution: "Local Government Unit", location: "Davao del Norte", region: "Davao Region", verification: "Admin-confirmed", rural: true, notes: "Demonstration record only." }
];

const cohorts: Cohort[] = [
  { batch: 14, academicYear: "2014–2018", admitted: 18, completed: 17, graduated: 17, licensed: 16 },
  { batch: 15, academicYear: "2015–2019", admitted: 20, completed: 19, graduated: 18, licensed: 17 },
  { batch: 16, academicYear: "2016–2020", admitted: 19, completed: 18, graduated: 18, licensed: 17 },
  { batch: 17, academicYear: "2017–2021", admitted: 21, completed: 20, graduated: 20, licensed: 19 },
  { batch: 18, academicYear: "2018–2022", admitted: 20, completed: 19, graduated: 19, licensed: 18 },
  { batch: 19, academicYear: "2019–2023", admitted: 20, completed: 20, graduated: 19, licensed: 18 },
  { batch: 20, academicYear: "2020–2024", admitted: 18, completed: 17, graduated: 17, licensed: 13 },
  { batch: 21, academicYear: "2021–2025", admitted: 19, completed: 18, graduated: 18, licensed: 11 },
  { batch: 22, academicYear: "2023–2027", admitted: 16, completed: 0, graduated: 0, licensed: 0 }
];

let alumni: AlumniRecord[] = loadAlumni();
let requests: UpdateRequest[] = [
  { id: 1, alumnus: "Sample Alumna E, MD", change: "Updated current institution and municipality of practice.", submitted: "Sep 12, 2026" },
  { id: 2, alumnus: "Sample Alumnus B, MD", change: "Added residency application status and professional email.", submitted: "Sep 13, 2026" },
  { id: 3, alumnus: "Sample Alumna G, MD", change: "Submitted PLE result for Department verification.", submitted: "Sep 14, 2026" }
];

function loadAlumni(): AlumniRecord[] {
  try {
    const saved = localStorage.getItem("shs-alumni-records");
    return saved ? JSON.parse(saved) : structuredClone(seedAlumni);
  } catch {
    return structuredClone(seedAlumni);
  }
}

function saveAlumni(): void {
  localStorage.setItem("shs-alumni-records", JSON.stringify(alumni));
}

function byId<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el as T;
}

function showToast(message: string): void {
  const toast = byId<HTMLDivElement>("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setView(view: string): void {
  document.querySelectorAll<HTMLElement>(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll<HTMLButtonElement>(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  byId<HTMLElement>(`view-${view}`).classList.add("active");
  byId<HTMLElement>("sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function pct(numerator: number, denominator: number): number {
  return denominator ? Math.round((numerator / denominator) * 100) : 0;
}

function renderStats(): void {
  const total = alumni.length;
  const licensed = alumni.filter(a => a.license === "Licensed").length;
  const rural = alumni.filter(a => a.rural).length;
  const verified = alumni.filter(a => a.verification !== "Needs verification").length;
  const stats = [
    ["Alumni Records", total, "Current prototype dataset", "◎"],
    ["Licensed Physicians", licensed, `${pct(licensed,total)}% of records`, "✓"],
    ["Rural / Underserved Service", rural, `${pct(rural,total)}% of records`, "⌖"],
    ["Verified / Confirmed", verified, `${pct(verified,total)}% of records`, "◉"]
  ];
  byId("statsGrid").innerHTML = stats.map(([label,value,foot,icon]) => `
    <article class="stat-card">
      <div class="stat-top"><span class="label">${label}</span><span class="stat-icon">${icon}</span></div>
      <div class="stat-value">${value}</div><div class="stat-foot">${foot}</div>
    </article>`).join("");
}

function renderBatchBars(): void {
  const mode = byId<HTMLSelectElement>("batchRangeSelect").value;
  const list = mode === "recent" ? cohorts.slice(-5) : cohorts;
  byId("batchBars").innerHTML = list.map(c => {
    const completion = pct(c.completed,c.admitted);
    return `<div class="batch-row">
      <div class="batch-name">MD ${c.batch}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${completion}%"></div></div>
      <div class="batch-metrics"><span>Admitted <b>${c.admitted}</b></span><span>Completed <b>${c.completed}</b></span><span>Licensed <b>${c.licensed}</b></span></div>
    </div>`;
  }).join("");
}

function renderVerification(): void {
  const counts: Record<VerificationStatus, number> = {
    "Admin-confirmed": alumni.filter(a => a.verification === "Admin-confirmed").length,
    "Alumni-confirmed": alumni.filter(a => a.verification === "Alumni-confirmed").length,
    "Needs verification": alumni.filter(a => a.verification === "Needs verification").length
  };
  const confirmed = counts["Admin-confirmed"] + counts["Alumni-confirmed"];
  const percent = pct(confirmed, alumni.length);
  byId("verificationPct").textContent = `${percent}%`;
  byId<HTMLDivElement>("verificationDonut").style.background = `conic-gradient(var(--green) 0deg ${percent*3.6}deg, #e8ebee ${percent*3.6}deg 360deg)`;
  byId("verificationLegend").innerHTML = Object.entries(counts).map(([label,value]) => `<div class="legend-item"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function renderCareer(): void {
  const groups = alumni.reduce<Record<string,number>>((acc,a) => { acc[a.career] = (acc[a.career] || 0) + 1; return acc; }, {});
  const rows = Object.entries(groups).sort((a,b) => b[1]-a[1]).slice(0,6);
  const max = Math.max(...rows.map(r => r[1]),1);
  byId("careerList").innerHTML = rows.map(([label,value]) => `<div class="rank-row"><span class="rank-label">${label}</span><strong>${value}</strong><div class="rank-bar"><i style="width:${value/max*100}%"></i></div></div>`).join("");
}

function renderRegions(): void {
  const groups = alumni.reduce<Record<string,number>>((acc,a) => { acc[a.region] = (acc[a.region] || 0) + 1; return acc; }, {});
  byId("regionGrid").innerHTML = Object.entries(groups).sort((a,b) => b[1]-a[1]).slice(0,8).map(([region,value]) => `<div class="region-card"><strong>${value}</strong><span>${region}</span></div>`).join("");
}

function verificationClass(s: VerificationStatus): string {
  return s === "Admin-confirmed" ? "verified" : s === "Alumni-confirmed" ? "alumni" : "needs";
}

function renderAlumniTable(): void {
  const q = byId<HTMLInputElement>("searchInput").value.toLowerCase().trim();
  const batch = byId<HTMLSelectElement>("batchFilter").value;
  const status = byId<HTMLSelectElement>("statusFilter").value;
  const filtered = alumni.filter(a => {
    const haystack = `${a.name} ${a.institution} ${a.specialty} ${a.location} ${a.region} ${a.career}`.toLowerCase();
    return (!q || haystack.includes(q)) && (batch === "all" || String(a.batch) === batch) && (status === "all" || a.verification === status);
  });
  byId("resultCount").textContent = String(filtered.length);
  const body = byId<HTMLTableSectionElement>("alumniTableBody");
  if (!filtered.length) { body.innerHTML = `<tr><td colspan="8" class="empty-state">No matching alumni records.</td></tr>`; return; }
  body.innerHTML = filtered.sort((a,b) => b.batch-a.batch || a.name.localeCompare(b.name)).map(a => `<tr>
    <td class="name-cell"><strong>${a.name}</strong><small>${a.specialty}</small></td>
    <td>MD ${a.batch}</td><td>${a.gradYear}</td><td>${a.ple}<br><small>${a.license}</small></td>
    <td>${a.career}<br><small>${a.institution}</small></td><td>${a.location}<br><small>${a.region}</small></td>
    <td><span class="status-badge ${verificationClass(a.verification)}">${a.verification}</span></td>
    <td><button class="row-action" data-profile="${a.id}">View</button></td>
  </tr>`).join("");
}

function renderBatchFilter(): void {
  const select = byId<HTMLSelectElement>("batchFilter");
  const batches = [...new Set(alumni.map(a=>a.batch))].sort((a,b)=>b-a);
  select.innerHTML = `<option value="all">All batches</option>` + batches.map(b=>`<option value="${b}">MD ${b}</option>`).join("");
}

function renderBatchCards(): void {
  byId("batchCardGrid").innerHTML = cohorts.slice().reverse().map(c => {
    const comp = pct(c.completed,c.admitted); const lic = pct(c.licensed,c.graduated);
    return `<article class="batch-card"><div class="batch-card-top"><div><p class="eyebrow">Cohort</p><h3>MD ${c.batch}${ordinal(c.batch)} Batch</h3><span class="batch-year">${c.academicYear}</span></div><span class="status-badge needs">Sample</span></div>
      <div class="batch-stat-grid"><div class="mini-stat"><b>${c.admitted}</b><span>Admitted</span></div><div class="mini-stat"><b>${c.completed}</b><span>Completed</span></div><div class="mini-stat"><b>${c.graduated}</b><span>Graduated</span></div><div class="mini-stat"><b>${c.licensed}</b><span>Licensed</span></div></div>
      <div class="progress-line"><i style="width:${comp}%"></i></div><div class="batch-card-footer"><span>Completion ${comp}%</span><span>Licensure ${lic}%</span></div>
    </article>`;
  }).join("");
}

function ordinal(n:number): string {
  const mod10=n%10, mod100=n%100; if(mod10===1&&mod100!==11)return "st"; if(mod10===2&&mod100!==12)return "nd"; if(mod10===3&&mod100!==13)return "rd"; return "th";
}

function renderReports(): void {
  const licensed = alumni.filter(a=>a.license === "Licensed").length;
  const rural = alumni.filter(a=>a.rural).length;
  const verified = alumni.filter(a=>a.verification !== "Needs verification").length;
  const regions = new Set(alumni.map(a=>a.region)).size;
  const reports = [
    ["Licensure Outcomes","✓",`${pct(licensed,alumni.length)}%`,"Share of prototype records marked licensed."],
    ["Rural Service","⌖",`${pct(rural,alumni.length)}%`,"Share with rural or underserved service recorded."],
    ["Data Verification","◉",`${pct(verified,alumni.length)}%`,"Share confirmed by alumni or Department admin."],
    ["Geographic Reach","▦",`${regions}`,"Regions represented in the current prototype dataset."],
    ["Active Update Requests","↻",`${requests.length}`,"Alumni-submitted changes awaiting review."],
    ["Cohorts in Tracker","◎",`${cohorts.length}`,"Sample cohort cards currently configured."]
  ];
  byId("reportGrid").innerHTML = reports.map(([title,icon,value,desc])=>`<article class="report-card"><div class="report-icon">${icon}</div><h3>${title}</h3><p>${desc}</p><div class="report-value">${value}</div></article>`).join("");
}

function renderRequests(): void {
  byId("pendingPill").textContent = String(requests.length);
  const list = byId("updateRequestList");
  if(!requests.length){ list.innerHTML=`<div class="panel empty-state">No pending update requests.</div>`; return; }
  list.innerHTML = requests.map(r=>`<article class="request-card"><div><h3>${r.alumnus}</h3><p>${r.change}<br><small>Submitted ${r.submitted}</small></p></div><div class="request-actions"><button class="ghost-button" data-reject="${r.id}">Reject</button><button class="primary-button" data-approve="${r.id}">Approve</button></div></article>`).join("");
}

function renderAll(): void {
  renderStats(); renderBatchBars(); renderVerification(); renderCareer(); renderRegions(); renderBatchFilter(); renderAlumniTable(); renderBatchCards(); renderReports(); renderRequests();
  byId("lastUpdated").textContent = new Date().toLocaleDateString("en-PH", { year:"numeric", month:"short", day:"numeric" });
}

function openAlumniDialog(record?: AlumniRecord): void {
  const dialog = byId<HTMLDialogElement>("alumniDialog");
  byId("dialogTitle").textContent = record ? "Edit Alumni Record" : "Add Alumni Record";
  byId<HTMLInputElement>("editId").value = record ? String(record.id) : "";
  byId<HTMLInputElement>("fullName").value = record?.name || "";
  byId<HTMLInputElement>("batchNo").value = record ? String(record.batch) : "";
  byId<HTMLInputElement>("gradYear").value = record ? String(record.gradYear) : "";
  byId<HTMLSelectElement>("pleStatus").value = record?.ple || "Passed";
  byId<HTMLSelectElement>("licenseStatus").value = record?.license || "Licensed";
  byId<HTMLInputElement>("careerStatus").value = record?.career || "";
  byId<HTMLInputElement>("specialty").value = record?.specialty || "";
  byId<HTMLInputElement>("institution").value = record?.institution || "";
  byId<HTMLInputElement>("location").value = record?.location || "";
  byId<HTMLInputElement>("region").value = record?.region || "";
  byId<HTMLSelectElement>("verification").value = record?.verification || "Needs verification";
  byId<HTMLSelectElement>("rural").value = record?.rural ? "true" : "false";
  byId<HTMLTextAreaElement>("notes").value = record?.notes || "";
  dialog.showModal();
}

function saveForm(event: SubmitEvent): void {
  event.preventDefault();
  const editId = Number(byId<HTMLInputElement>("editId").value || 0);
  const item: AlumniRecord = {
    id: editId || Math.max(0,...alumni.map(a=>a.id)) + 1,
    name: byId<HTMLInputElement>("fullName").value.trim(),
    batch: Number(byId<HTMLInputElement>("batchNo").value),
    gradYear: Number(byId<HTMLInputElement>("gradYear").value),
    ple: byId<HTMLSelectElement>("pleStatus").value,
    license: byId<HTMLSelectElement>("licenseStatus").value,
    career: byId<HTMLInputElement>("careerStatus").value.trim() || "Not recorded",
    specialty: byId<HTMLInputElement>("specialty").value.trim() || "Not recorded",
    institution: byId<HTMLInputElement>("institution").value.trim() || "Not recorded",
    location: byId<HTMLInputElement>("location").value.trim() || "Not recorded",
    region: byId<HTMLInputElement>("region").value.trim() || "Not recorded",
    verification: byId<HTMLSelectElement>("verification").value as VerificationStatus,
    rural: byId<HTMLSelectElement>("rural").value === "true",
    notes: byId<HTMLTextAreaElement>("notes").value.trim()
  };
  if(editId){ alumni = alumni.map(a=>a.id===editId?item:a); showToast("Alumni record updated."); }
  else { alumni.push(item); showToast("Alumni record added."); }
  saveAlumni(); byId<HTMLDialogElement>("alumniDialog").close(); renderAll();
}

function openProfile(id:number): void {
  const a = alumni.find(x=>x.id===id); if(!a)return;
  const dialog = byId<HTMLDialogElement>("profileDialog");
  byId("profileContent").innerHTML = `<div class="dialog-header"><div><p class="eyebrow">Alumni profile</p><h3>${a.name}</h3></div><button class="icon-button" data-close-profile>×</button></div>
    <div class="profile-grid">
      ${profileItem("MD Batch",`MD ${a.batch}`)}${profileItem("Graduated",String(a.gradYear))}${profileItem("PLE",a.ple)}${profileItem("License",a.license)}
      ${profileItem("Career",a.career)}${profileItem("Specialty",a.specialty)}${profileItem("Institution",a.institution)}${profileItem("Location",`${a.location}, ${a.region}`)}
      ${profileItem("Verification",a.verification)}${profileItem("Rural / underserved service",a.rural?"Yes":"No / not recorded")}
    </div><div class="profile-item" style="margin-top:12px"><span>Source / notes</span><strong>${a.notes || "None"}</strong></div>
    <div class="dialog-actions"><button class="ghost-button" data-close-profile>Close</button><button class="primary-button" data-edit="${a.id}">Edit Record</button></div>`;
  dialog.showModal();
}

function profileItem(label:string,value:string):string { return `<div class="profile-item"><span>${label}</span><strong>${value}</strong></div>`; }

function csvEscape(value:unknown):string { const s=String(value??""); return `"${s.replaceAll('"','""')}"`; }
function downloadCSV(): void {
  const headers = ["Name","MD Batch","Year Graduated","PLE","License","Career","Specialty","Institution","Location","Region","Verification","Rural Service","Notes"];
  const rows = alumni.map(a=>[a.name,a.batch,a.gradYear,a.ple,a.license,a.career,a.specialty,a.institution,a.location,a.region,a.verification,a.rural?"Yes":"No",a.notes]);
  const csv = [headers,...rows].map(r=>r.map(csvEscape).join(",")).join("\n");
  downloadBlob(csv,"upm-shs-alumni-records.csv","text/csv;charset=utf-8");
}
function downloadSummary(): void {
  const headers=["MD Batch","Academic Year","Admitted","Completed","Graduated","Licensed","Completion Rate","Licensure Rate"];
  const rows=cohorts.map(c=>[c.batch,c.academicYear,c.admitted,c.completed,c.graduated,c.licensed,`${pct(c.completed,c.admitted)}%`,`${pct(c.licensed,c.graduated)}%`]);
  const csv=[headers,...rows].map(r=>r.map(csvEscape).join(",")).join("\n");
  downloadBlob(csv,"upm-shs-alumni-cohort-summary.csv","text/csv;charset=utf-8");
}
function downloadBlob(content:string,filename:string,type:string):void {
  const blob=new Blob([content],{type}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=filename; a.click(); URL.revokeObjectURL(url);
}

function handleRequests(target: HTMLElement): void {
  const approve = target.closest<HTMLElement>("[data-approve]");
  const reject = target.closest<HTMLElement>("[data-reject]");
  if(approve){ requests=requests.filter(r=>r.id!==Number(approve.dataset.approve)); showToast("Update request approved (prototype). "); renderRequests(); renderReports(); }
  if(reject){ requests=requests.filter(r=>r.id!==Number(reject.dataset.reject)); showToast("Update request rejected (prototype). "); renderRequests(); renderReports(); }
}

function attachEvents(): void {
  document.querySelectorAll<HTMLButtonElement>(".nav-item").forEach(btn=>btn.addEventListener("click",()=>setView(btn.dataset.view!)));
  document.querySelectorAll<HTMLButtonElement>("[data-view-jump]").forEach(btn=>btn.addEventListener("click",()=>setView(btn.dataset.viewJump!)));
  byId("menuButton").addEventListener("click",()=>byId("sidebar").classList.toggle("open"));
  byId("addAlumniBtn").addEventListener("click",()=>openAlumniDialog());
  byId("addAlumniBtn2").addEventListener("click",()=>openAlumniDialog());
  byId("exportBtn").addEventListener("click",downloadCSV);
  byId("downloadReportBtn").addEventListener("click",downloadSummary);
  byId("batchRangeSelect").addEventListener("change",renderBatchBars);
  byId("searchInput").addEventListener("input",renderAlumniTable);
  byId("batchFilter").addEventListener("change",renderAlumniTable);
  byId("statusFilter").addEventListener("change",renderAlumniTable);
  byId("clearFiltersBtn").addEventListener("click",()=>{byId<HTMLInputElement>("searchInput").value="";byId<HTMLSelectElement>("batchFilter").value="all";byId<HTMLSelectElement>("statusFilter").value="all";renderAlumniTable();});
  byId<HTMLFormElement>("alumniForm").addEventListener("submit",saveForm);
  byId("alumniTableBody").addEventListener("click",e=>{ const t=e.target as HTMLElement; const b=t.closest<HTMLElement>("[data-profile]"); if(b)openProfile(Number(b.dataset.profile)); });
  byId("profileContent").addEventListener("click",e=>{ const t=e.target as HTMLElement; if(t.closest("[data-close-profile]"))byId<HTMLDialogElement>("profileDialog").close(); const b=t.closest<HTMLElement>("[data-edit]"); if(b){ const a=alumni.find(x=>x.id===Number(b.dataset.edit)); byId<HTMLDialogElement>("profileDialog").close(); if(a)openAlumniDialog(a); }});
  byId("updateRequestList").addEventListener("click",e=>handleRequests(e.target as HTMLElement));
}

attachEvents();
renderAll();
