import React from 'react';

/**
 * Lightweight markdown renderer for chatbot messages.
 * Handles:
 *   **text**  → <strong>text</strong>
 *   \n        → line break
 *   Everything else renders as plain text
 */
export function FormattedText({ text }: { text: string }) {
  // Split on ** markers to identify bold segments
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-bold text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        // Split on \n for line breaks
        const lines = part.split('\n');
        return lines.map((line, j) => (
          <React.Fragment key={`${i}-${j}`}>
            {j > 0 && <br />}
            {line}
          </React.Fragment>
        ));
      })}
    </>
  );
}
