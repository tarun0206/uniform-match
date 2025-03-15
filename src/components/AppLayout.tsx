
import React, { ReactNode } from 'react';
import { WhatsAppButton } from './WhatsAppButton';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#fecdd350_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-70"></div>
      
      {/* Main content */}
      <main className="relative z-0">
        {children}
      </main>
      
      {/* Fixed WhatsApp button */}
      <WhatsAppButton />
      
      {/* Footer */}
      <footer className="py-8 border-t border-rose-100 bg-white/50 backdrop-blur-sm mt-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-lg font-semibold text-rose-600">Sacred Connection</p>
              <p className="text-sm text-muted-foreground mt-1">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-rose-600 transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-rose-600 transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-rose-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
