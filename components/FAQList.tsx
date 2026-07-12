export function FAQList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="mt-8 grid gap-3">
      {items.map((item, index) => (
        <details
          key={`${index}-${item.question}`}
          className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
        >
          <summary className="cursor-pointer font-bold text-brand-navy dark:text-white">
            {item.question}
          </summary>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
