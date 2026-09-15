import Link from 'next/link';
import React from 'react';

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          UPM SHS AlumniTrack
          <small>School of Health Sciences<br/>Department of Medicine</small>
        </div>
        <nav className="nav">
          <Link href="/">Dashboard</Link>
          <Link href="/alumni">Alumni Registry</Link>
          <Link href="/cohorts">MD Batches</Link>
          <Link href="/updates">Alumni Updates</Link>
          <Link href="/reports">Reports</Link>
        </nav>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
