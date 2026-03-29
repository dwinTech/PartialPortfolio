type SectionHeadingProps = {
  title: string;
  description: string;
  align?: "left" | "center" | "right";
  children?: React.ReactNode; 
};

export function SectionHeading({
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
      
      {/* LEFT */}
      <div className={`space-y-2 ${alignmentClasses[align]}`}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="max-w-[700px] text-muted-foreground mb-6">
          {description}
        </p>
      </div>

      {/* RIGHT (CUSTOM BUTTON HERE) */}
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}