// src/components/Section.tsx
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
