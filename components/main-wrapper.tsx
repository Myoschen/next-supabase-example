import { ReactNode } from 'react';

function MainWrapper({ children }: { children: ReactNode }) {
  return <main className="text-zinc-200">{children}</main>;
}
export default MainWrapper;
