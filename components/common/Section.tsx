import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
  id={id}
  className={cn("py-12 md:py-24 lg:py-20", className)}
  {...props}
>
  <div className="mx-auto w-full max-w-6xl px-6">
    {children}
  </div>
</section>
     
    
  )
}