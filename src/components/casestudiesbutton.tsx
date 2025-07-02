// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE
// import * as Headless from '@headlessui/react';
// import { clsx } from 'clsx';
// import { Link } from './link';

// const variants = {
//   primary: clsx('inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-950 text-white font-medium shadow-md'),
//   secondary: clsx('inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/15 text-gray-950 font-medium shadow-md ring-1 ring-[#D15052]/15'),
//   outline: clsx('inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 text-gray-950 font-medium shadow-sm'),
//   purpleOutline: clsx(
//     'inline-flex items-center justify-center px-6 py-2 rounded-full',
//     'bg-secondary text-white border border-secondary',
//     'hover:bg-secondary/80 transition-colors'
//   ),
// };



// type ButtonProps = {
//   variant?: keyof typeof variants;
//   startContent?: React.ReactNode;
// } & (
//   | React.ComponentPropsWithoutRef<typeof Link>
//   | (Headless.ButtonProps & { href?: undefined })
// );

// export function Button({
//   variant = 'primary',
//   className,
//   startContent,
//   children,
//   ...props
// }: ButtonProps) {
//   const content = (
//     <>
//       {startContent && <span className="mr-2">{startContent}</span>}
//       {children}
//     </>
//   );

//   className = clsx(className, variants[variant]);

//   if (typeof props.href === 'undefined') {
//     return <Headless.Button as="button" {...props} className={className}>{content}</Headless.Button>;
//   }

//   return <Link {...props} className={className}>{content}</Link>;
// }




//////////////////////////
//////////////////////////
//////////////////////////
//// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE | -FUNCTIONAL

import * as Headless from '@headlessui/react';
import { clsx } from 'clsx';
import Link from 'next/link'; // ✅ Replaces broken './link' import

const variants = {
  primary: clsx('inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-950 text-white font-medium shadow-md'),
  secondary: clsx('inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/15 text-gray-950 font-medium shadow-md ring-1 ring-[#D15052]/15'),
  outline: clsx('inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 text-gray-950 font-medium shadow-sm'),
  purpleOutline: clsx(
    'inline-flex items-center justify-center px-6 py-2 rounded-full',
    'bg-secondary text-white border border-secondary',
    'hover:bg-secondary/80 transition-colors'
  ),
};

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  startContent?: React.ReactNode;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
);

export function Button({
  variant = 'primary',
  className,
  startContent,
  children,
  ...props
}: ButtonProps) {
  const content = (
    <>
      {startContent && <span className="mr-2">{startContent}</span>}
      {children}
    </>
  );

  const safeVariant: Variant = variant in variants ? variant : 'primary'; // ✅ Protect against TS7053
  className = clsx(className, variants[safeVariant]);

  if (typeof props.href === 'undefined') {
    return (
      <Headless.Button as="button" {...props} className={className}>
        {content}
      </Headless.Button>
    );
  }

  return (
    <Link {...props} className={className}>
      {content}
    </Link>
  );
}
