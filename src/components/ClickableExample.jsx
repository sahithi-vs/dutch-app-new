import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * ClickableExample
 *
 * Renders an example sentence where every Dutch word is clickable.
 * Clicking a word shows a small popup with its English meaning (looked up
 * from the full word bank passed as `allWords`).
 *
 * Props:
 *   example   – string like "Wat betekent dat woord? (What does that word mean?)"
 *   allWords  – array of { dutch, english, ... } from getAllWords()
 *   className – optional extra classes for the wrapper <p>
 *   style     – optional inline styles for the wrapper <p>
 */
export default function ClickableExample({ example, allWords, className = '', style }) {
  const [popup, setPopup] = useState(null); // { word, meaning, x, y }
  const containerRef = useRef(null);

  // Build a lookup map once: normalised dutch → english
  const lookup = useCallback(() => {
    const map = {};
    if (!allWords) return map;
    allWords.forEach(w => {
      if (w.dutch && w.english) {
        map[w.dutch.toLowerCase().trim()] = w.english;
      }
    });
    return map;
  }, [allWords]);

  // Close popup when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setPopup(null);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  if (!example) return null;

  // Split example into Dutch part and the bracketed English translation
  const bracketMatch = example.match(/^(.*?)(\s*\(.*\)\s*)$/s);
  const dutchPart = bracketMatch ? bracketMatch[1] : example;
  const englishPart = bracketMatch ? bracketMatch[2] : '';

  // Tokenise: split into word-tokens and non-word-tokens (spaces, punctuation)
  // We keep the delimiters so we can reconstruct the sentence faithfully.
  const tokens = dutchPart.split(/(\s+|[^\w\u00C0-\u024F]+)/);

  const wordMap = lookup();

  const findMeaning = (raw) => {
    const clean = raw.toLowerCase().replace(/[^a-z\u00C0-\u024F]/gi, '');
    if (!clean) return null;
    // Exact match first
    if (wordMap[clean]) return wordMap[clean];
    // Try the raw token (with apostrophes etc)
    if (wordMap[raw.toLowerCase()]) return wordMap[raw.toLowerCase()];
    // Partial: find any entry whose dutch starts with this token (handles 't, 'k etc)
    const entry = Object.entries(wordMap).find(([k]) => k === clean || k.startsWith(clean));
    return entry ? entry[1] : null;
  };

  const handleWordClick = (e, token) => {
    e.stopPropagation();
    const meaning = findMeaning(token);
    if (!meaning) return; // no tooltip for unknown words

    const rect = e.target.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setPopup(prev => {
      // Toggle off if same word clicked again
      if (prev && prev.word === token && prev.meaning === meaning) return null;
      return {
        word: token,
        meaning,
        // Position relative to container
        top: rect.bottom - containerRect.top + 6,
        left: Math.min(
          rect.left - containerRect.left,
          containerRect.width - 180  // keep within bounds
        ),
      };
    });
  };

  const isWordToken = (t) => /[\w\u00C0-\u024F]/.test(t);

  return (
    <span ref={containerRef} className={`relative inline ${className}`} style={style}>
      {tokens.map((token, i) => {
        if (!isWordToken(token)) {
          return <span key={i}>{token}</span>;
        }
        const meaning = findMeaning(token);
        const clickable = !!meaning;
        return (
          <span
            key={i}
            onClick={clickable ? (e) => handleWordClick(e, token) : undefined}
            className={
              clickable
                ? 'cursor-pointer underline decoration-dotted decoration-current underline-offset-2 hover:opacity-70 transition-opacity'
                : ''
            }
            title={clickable ? meaning : undefined}
          >
            {token}
          </span>
        );
      })}
      {/* Bracketed English part — not clickable, shown as-is */}
      {englishPart && <span className="text-gray-400">{englishPart}</span>}

      {/* Popup tooltip */}
      {popup && (
        <span
          className="absolute z-50 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl pointer-events-none whitespace-nowrap"
          style={{ top: popup.top, left: Math.max(0, popup.left) }}
        >
          <span className="font-bold text-yellow-300">{popup.word}</span>
          <span className="text-gray-300 mx-1">→</span>
          {popup.meaning}
          {/* Little arrow */}
          <span
            className="absolute -top-1.5 left-3 w-3 h-3 bg-gray-900 rotate-45"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          />
        </span>
      )}
    </span>
  );
}
