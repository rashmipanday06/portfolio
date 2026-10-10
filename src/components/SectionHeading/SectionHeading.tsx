
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
