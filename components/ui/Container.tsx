import { clsx } from "@/lib/clsx";

type ContainerSize = "prose" | "md" | "lg" | "xl";

const SIZES: Record<ContainerSize, string> = {
  prose: "max-w-prose",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
};

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

export function Container({ size = "xl", className, children, ...rest }: ContainerProps) {
  return (
    <div className={clsx("mx-auto w-full px-6 sm:px-8", SIZES[size], className)} {...rest}>
      {children}
    </div>
  );
}
