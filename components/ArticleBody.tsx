import { CalloutBox } from "@/components/CalloutBox";
import type { ArticleBlock } from "@/lib/content/types";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose-site mx-auto max-w-3xl">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.text}</p>;
          case "heading":
            return block.level === 2 ? (
              <h2 key={index}>{block.text}</h2>
            ) : (
              <h3 key={index}>{block.text}</h3>
            );
          case "list":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <CalloutBox key={index} tone="info">
                {block.text}
              </CalloutBox>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
