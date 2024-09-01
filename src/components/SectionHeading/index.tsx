import { ReactNode } from 'react';

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className={'text-xl text-text-primary font-bold'}>{children}</h2>;
}
