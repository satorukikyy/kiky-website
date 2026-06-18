import Link from 'next/link'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-c-border mt-24">
      <div className="max-w-[720px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="font-body font-bold text-[14px] text-c-text">
          {personalInfo.nickname.toLowerCase()}
          <span className="text-c-purple">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="/rss.xml"
            className="font-mono text-[11px] text-c-subtle hover:text-c-purple transition-colors"
            title="RSS Feed"
          >
            rss
          </a>
          <p className="font-mono text-[12px] text-c-subtle">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
