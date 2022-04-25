import React from "react";
import Link from 'next/link'

export default function MainHeader() {
  return <header>
      <div>
      <Link href="/">NextEvents Logo</Link>
      </div>
      <nav>
        <ul>
          <li><Link href='/events'>Browse All Events</Link></li>
        </ul>
      </nav>
  </header>;
}
