'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/ui/footer';
import { GradientBackground } from '@/components/ui/gradient-background';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isKeystaticRoute = pathname?.startsWith('/keystatic');

  if (isKeystaticRoute) {
    return <>{children}</>;
  }

  return (
    <GradientBackground>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </GradientBackground>
  );
}
