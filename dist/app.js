const batches = [
    {
        batch: 18,
        academicYear: "AY 2017–2018",
        period: "3rd qtr (Feb–May 2018)",
        admitted: 20,
        completed: 20,
        graduated: 20,
        encodedRoster: 20,
        note: "Notebook annotations show 11 of 18 recorded passers in the April 2024 PLE release notes."
    },
    {
        batch: 19,
        academicYear: "AY 2018–2019",
        period: "3rd qtr (Mar–May 2019)",
        admitted: 22,
        completed: 21,
        graduated: 21,
        encodedRoster: 0,
        note: "Summary counts were encoded from the notebook. Individual roster transcription can be added next."
    },
    {
        batch: 20,
        academicYear: "AY 2020–2021",
        period: "1st qtr (Sept 7–Nov 20, 2020)",
        admitted: 21,
        completed: null,
        graduated: null,
        encodedRoster: 21,
        note: "Roster names encoded; graduation and licensure columns were still blank in the uploaded source page."
    },
    {
        batch: 21,
        academicYear: "AY 2021–2022",
        period: "2nd qtr (Jan 5–Mar 15, 2022)",
        admitted: 14,
        completed: null,
        graduated: null,
        encodedRoster: 14,
        note: "Roster names encoded; completion and licensure fields remain open for later updating."
    },
    {
        batch: 22,
        academicYear: "AY 2023–2024",
        period: "Q1 (Oct 2–Dec 15, 2023)",
        admitted: 16,
        completed: null,
        graduated: null,
        encodedRoster: 16,
        note: "Roster names encoded from the latest notebook page in the uploaded file."
    }
];
const batch18Names = [
    "Avondo, Gleynce Arteche",
    "Bapon, Crisanto Mabaga",
    "Basence, Cristine Mae Corpuz",
    "Colibao, Rosielen Atienza",
    "Dacaya, Jessa Vee Dizon",
    "Delantar, Gerlie Igloria",
    "Dingcong, Merry Ann Lamsis",
    "Dupingay, Kenneth Dayag",
    "Finanza, Arlyn Dinagas",
    "Galbo, Keshe Rose Baja",
    "Guarino, Michelle Sanchez",
    "Inocencio, Jener Grapo",
    "Mina, Hanielyn Suplente",
    "Omehang, Joemar Guiwon",
    "Peligro, James Jr. Mejorada",
    "Panserga, Ma. Dinah Claire Rosales",
    "Pilinon, Jasmih Kusid",
    "Recto, Mayshelle Notafte",
    "Trinidad, Kaye Michelle Perlas",
    "Yagyog, Faith Angayon"
];
const batch20Names = [
    "Athogan, Sarah Jane Madren",
    "Akiate, Kelly Mae Gamo",
    "Bilugon, Ghissette Kimayong",
    "Bumdalan, Inian Jaya Dumanang",
    "Cahug, Christine Mabel Barriantos",
    "Capogian, Wilmary Pajares",
    "Delos Reyes, Tony Jean Lagos",
    "Elizan, Gwendarelyn Almarciso",
    "Flores, Jinky Petros",
    "Gajo, Marjorie Calitas",
    "Guida, Arsheil Nanoy",
    "Habbiling, Hmarydle Rose Bawil",
    "Hipol, Roinyj Gamo",
    "Isidro, Ian Quijon",
    "Juli, Lady Faith Caturnon",
    "Kimayong, Attens Dinamgan",
    "Marihay, Carwin Saldana",
    "Pugong, Aurone Mae Dulman",
    "Rumord, Edgar Solomon B.",
    "Tordillo, Chynna Marie",
    "Umayat, Andry Ross Ducay"
];
const batch21Names = [
    "Abella, Eunice Mides Pi-og",
    "Baltwang, Krezelle Gay Calpali",
    "Bisok, Ronzon Karl Acosta",
    "Bruno, Neah Shane Lampayan",
    "Camianes, Darlene Ablanido",
    "Dacayanan, Nova Mirva Balsamo",
    "Gutierrez, Mark Jocprrey Habal",
    "Juanich, John Lorenze Gadot",
    "Kidit, Lestered Ciano",
    "Padawil, Mary Christy Bacoco",
    "Pecancillo, James Ornilla",
    "Rosauro, Jhoslay Anne Nudalo",
    "Sinsuat, Bai Mizya Harkishayne Vahos",
    "Nanawan, Christmar Chapson"
];
const batch22Names = [
    "Balasabas, Hynnah Andrea Am-is",
    "Balu, Eunice Salumbag",
    "Bangadan, Godfrey Ortega",
    "Brillantes, Abigail Namora",
    "Cabinan, Raphna Mae Pumihic",
    "Caldosa, Cingrudo Failey",
    "Forgino, Karl Jezh Matiga",
    "Muntos, Farry Ann Parks",
    "Novado, Edward Paul Madrono",
    "Opac, Angel Marie Zarate",
    "Pacario, Petra Jessica Pajones",
    "Pugon, Kati Kimmayung",
    "San Jose, Hanna Mae Daguinotan",
    "Tan, Kumanc Galbo",
    "Valmos, Elbel Civilian",
    "Uy, Judy Ann Lago"
];
function buildPeople() {
    let id = 1;
    const people = [];
    const pushBatch = (names, batch, academicYear, graduation, stage, remarks) => {
        names.forEach((name) => {
            people.push({ id: id++, name, batch, academicYear, graduation, stage, remarks });
        });
    };
    pushBatch(batch18Names, 18, "AY 2017–2018", "Aug 11, 2023", "Graduated", "Graduation date recorded in the uploaded notebook.");
    pushBatch(batch20Names, 20, "AY 2020–2021", "—", "Active Cohort", "Roster encoded; graduation column blank in the source page.");
    pushBatch(batch21Names, 21, "AY 2021–2022", "—", "Active Cohort", "Roster encoded; completion and licensure updates may be added later.");
    pushBatch(batch22Names, 22, "AY 2023–2024", "—", "Active Cohort", "Latest batch page encoded from the uploaded notebook.");
    return people;
}
const people = buildPeople();
const stageSummary = [
    { label: "Graduated (recent summarized batches)", value: 41, className: "fill-graduated" },
    { label: "Active / ongoing cohorts", value: 51, className: "fill-active" },
    { label: "Not yet completed / LOA noted", value: 1, className: "fill-graduated" }
];
const heroMetrics = [
    { value: 22, label: "Total notebook batches in the source record" },
    { value: 5, label: "Recent batches initialized in this starter build" },
    { value: 71, label: "Detailed roster entries currently encoded" },
    { value: 93, label: "Recent admitted count across batches 18–22" }
];
const statCards = [
    { label: "Detailed rosters encoded", value: "71", caption: "Batches 18, 20, 21, and 22" },
    { label: "Recent batch summaries", value: "5", caption: "Batches 18 to 22" },
    { label: "Graduates recorded", value: "41", caption: "Summarized across batches 18 and 19" },
    { label: "Ongoing cohort members", value: "51", caption: "Batches 20 to 22" }
];
const navButtons = Array.from(document.querySelectorAll(".nav-link"));
const views = Array.from(document.querySelectorAll(".view"));
const statsGrid = document.getElementById("statsGrid");
const heroMetricsEl = document.getElementById("heroMetrics");
const stageChart = document.getElementById("stageChart");
const encodedList = document.getElementById("encodedList");
const batchProgress = document.getElementById("batchProgress");
const batchCardGrid = document.getElementById("batchCardGrid");
const registryBody = document.getElementById("registryBody");
const resultCount = document.getElementById("resultCount");
const batchFilter = document.getElementById("batchFilter");
const stageFilter = document.getElementById("stageFilter");
const searchInput = document.getElementById("searchInput");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const downloadCsvBtn = document.getElementById("downloadCsvBtn");
function showView(targetView) {
    navButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.view === targetView);
    });
    views.forEach((view) => {
        view.classList.toggle("active", view.id === `view-${targetView}`);
    });
}
function renderHeroMetrics() {
    heroMetricsEl.innerHTML = heroMetrics
        .map((item) => `
        <article class="metric-box">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `)
        .join("");
}
function renderStats() {
    statsGrid.innerHTML = statCards
        .map((item) => `
        <article class="stat-card">
          <div class="label">${item.label}</div>
          <div class="value">${item.value}</div>
          <div class="caption">${item.caption}</div>
        </article>
      `)
        .join("");
}
function renderStageChart() {
    const maxValue = Math.max(...stageSummary.map((item) => item.value));
    stageChart.innerHTML = stageSummary
        .map((item) => `
        <div class="chart-row">
          <div class="chart-label">${item.label}</div>
          <div class="chart-track"><div class="chart-fill ${item.className}" style="width:${(item.value / maxValue) * 100}%"></div></div>
          <div class="chart-value">${item.value}</div>
        </div>
      `)
        .join("");
}
function renderEncodedList() {
    encodedList.innerHTML = batches
        .map((batch) => `
        <div class="list-row">
          <div>
            <strong>MD ${batch.batch}th Batch</strong><br />
            <span>${batch.academicYear}</span>
          </div>
          <span>${batch.encodedRoster > 0 ? `${batch.encodedRoster} roster rows encoded` : "summary only"}</span>
        </div>
      `)
        .join("");
}
function renderBatchProgress() {
    const maxAdmitted = Math.max(...batches.map((batch) => batch.admitted));
    batchProgress.innerHTML = batches
        .map((batch) => `
        <div class="batch-row">
          <div class="batch-name">MD ${batch.batch}</div>
          <div class="progress-track"><div class="progress-fill" style="width:${(batch.admitted / maxAdmitted) * 100}%"></div></div>
          <div class="batch-meta">Admitted: <strong>${batch.admitted}</strong></div>
        </div>
      `)
        .join("");
}
function renderBatchCards() {
    batchCardGrid.innerHTML = batches
        .map((batch) => {
        var _a, _b;
        return `
        <article class="batch-card">
          <h4>MD ${batch.batch}th Batch</h4>
          <p class="batch-sub">${batch.academicYear} · ${batch.period}</p>
          <div class="batch-mini-grid">
            <div class="mini-tile"><strong>${batch.admitted}</strong><span>Admitted</span></div>
            <div class="mini-tile"><strong>${(_a = batch.completed) !== null && _a !== void 0 ? _a : "—"}</strong><span>Completed</span></div>
            <div class="mini-tile"><strong>${(_b = batch.graduated) !== null && _b !== void 0 ? _b : "—"}</strong><span>Graduated</span></div>
            <div class="mini-tile"><strong>${batch.encodedRoster || "—"}</strong><span>Encoded roster rows</span></div>
          </div>
          <p class="batch-note">${batch.note}</p>
        </article>
      `;
    })
        .join("");
}
function populateBatchFilter() {
    batches
        .filter((batch) => batch.encodedRoster > 0)
        .forEach((batch) => {
        const option = document.createElement("option");
        option.value = String(batch.batch);
        option.textContent = `MD ${batch.batch}th Batch`;
        batchFilter.appendChild(option);
    });
}
function getFilteredPeople() {
    const query = searchInput.value.trim().toLowerCase();
    return people.filter((person) => {
        const matchesQuery = !query ||
            person.name.toLowerCase().includes(query) ||
            `md ${person.batch}`.toLowerCase().includes(query);
        const matchesBatch = batchFilter.value === "all" || String(person.batch) === batchFilter.value;
        const matchesStage = stageFilter.value === "all" || person.stage === stageFilter.value;
        return matchesQuery && matchesBatch && matchesStage;
    });
}
function renderRegistry() {
    const filtered = getFilteredPeople();
    resultCount.textContent = String(filtered.length);
    registryBody.innerHTML = filtered
        .map((person) => `
        <tr>
          <td><strong>${person.name}</strong></td>
          <td>MD ${person.batch}th Batch</td>
          <td>${person.academicYear}</td>
          <td>${person.graduation}</td>
          <td>
            <span class="stage-badge ${person.stage === "Graduated" ? "graduated" : "active"}">${person.stage}</span>
          </td>
          <td>${person.remarks}</td>
        </tr>
      `)
        .join("");
}
function downloadCsv() {
    const rows = [["Name", "Batch", "Academic Year", "Graduation", "Stage", "Remarks"]];
    people.forEach((person) => {
        rows.push([
            person.name,
            `MD ${person.batch}`,
            person.academicYear,
            person.graduation,
            person.stage,
            person.remarks
        ]);
    });
    const csv = rows
        .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
        .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "upm-shs-dom-alumni-registry.csv";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
}
function initEvents() {
    navButtons.forEach((button) => {
        button.addEventListener("click", () => {
            var _a;
            const targetView = (_a = button.dataset.view) !== null && _a !== void 0 ? _a : "dashboard";
            showView(targetView);
        });
    });
    [searchInput, batchFilter, stageFilter].forEach((element) => {
        element.addEventListener("input", renderRegistry);
        element.addEventListener("change", renderRegistry);
    });
    resetFiltersBtn.addEventListener("click", () => {
        searchInput.value = "";
        batchFilter.value = "all";
        stageFilter.value = "all";
        renderRegistry();
    });
    downloadCsvBtn.addEventListener("click", downloadCsv);
}
function init() {
    renderHeroMetrics();
    renderStats();
    renderStageChart();
    renderEncodedList();
    renderBatchProgress();
    renderBatchCards();
    populateBatchFilter();
    renderRegistry();
    initEvents();
}
init();
