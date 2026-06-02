import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return <div className="min-h-screen bg-slate-50 text-slate-900">{children}</div>;
}
