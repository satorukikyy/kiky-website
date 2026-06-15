import HeroSection from '@/components/sections/HeroSection'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesPreview from '@/components/sections/ServicesPreview'
import ProjectsPreview from '@/components/sections/ProjectsPreview'
import HomeCTA from '@/components/sections/CertificationsStrip'
import Marquee from '@/components/ui/Marquee'
import { marqueeItems } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee items={marqueeItems} />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <HomeCTA />
    </>
  )
}
