import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const heading = cva(['text-text-primary'], {
  variants: {
    level: {
      [2]: ['font-bold', 'text-xl'],
      [3]: ['text-lg'],
    },
  },
  defaultVariants: {
    level: 2,
  },
});

export function Heading({
  children,
  ...rest
}: { children: ReactNode } & VariantProps<typeof heading>) {
  const Wrapper = !rest.level ? 'h2' : (`h${rest.level}` as const);
  return <Wrapper className={heading(rest)}>{children}</Wrapper>;
}
