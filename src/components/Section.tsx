// src/components/Section.tsx
export default function Section({ title, content }: { title: string; content: string }) {
    return (
      <section>
        <h2>{title}</h2>
        <p>{content}</p>
      </section>
    );
  }