import { Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'

interface FooterProps {
  onPrivacyClick: () => void
}

export function Footer({ onPrivacyClick }: FooterProps) {
  return (
    <footer className="bg-primary text-text-inverse py-10">
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-heading text-xl">ARCA</span>
              <span className="text-sm text-text-inverse/60">
                Akademia Rozwoju Człowieka Aktywnego
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={14} className="text-text-inverse/60" />
              <a
                href="mailto:ziarkowskicezary@gmail.com"
                className="text-text-inverse/60 hover:text-text-inverse transition-colors"
              >
                ziarkowskicezary@gmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-text-inverse/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-inverse/40">
            <span>&copy; {new Date().getFullYear()} Cezary Ziarkowski</span>
            <button
              onClick={onPrivacyClick}
              className="hover:text-text-inverse/60 transition-colors cursor-pointer"
            >
              Polityka prywatności
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
