import React, { useState } from "react";

import "./autosuggestion.css";
import { IAutoSuggestionProps } from "./AutoSuggestion.types";

const AutoSuggestion = <T extends {}>({
  data,
  keys,
  placeholder = "Type to search...",
  onSelect,
  minCharLength = 2,
}: IAutoSuggestionProps<T>) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    let filteredSuggestions;

    if (event.target.value.length < minCharLength) {
      filteredSuggestions = [];
    } else {
      filteredSuggestions = data.reduce((acc, cur) => {
        keys.forEach((key) => {
          if (!acc.hasOwnProperty(key.categoryKey)) {
            acc[key.categoryKey] = [];
          }
          if (
            acc.hasOwnProperty(key.categoryKey) &&
            String(cur[key.categoryKey])
              .toLowerCase()
              .includes(inputValue.toLowerCase())
          ) {
            acc[key.categoryKey] = [...acc[key.categoryKey], cur];
          }
        });
        return acc;
      }, {});
    }

    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="smart-autosuggestion">
      <input
        type="text"
        className="smart-autosuggestion-input"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {Object.keys(suggestions).length ? (
        <div className="smart-autosuggestion-result">
          {Object.keys(suggestions).map((suggestionKey) =>
            suggestions[suggestionKey].length ? (
              <ul
                className={`smart-autosuggestion-result-items ${suggestionKey}`}
                key={suggestionKey}
              >
                <li>
                  {
                    keys.filter((k) => k.categoryKey === suggestionKey)[0]
                      .categoryTitle
                  }
                </li>
                {suggestions[suggestionKey].map((item, index) => (
                  <li key={index} onClick={() => onSelect(item)}>
                    <span>{String(item[suggestionKey])}</span>
                  </li>
                ))}
              </ul>
            ) : null
          )}
        </div>
      ) : null}
    </div>
  );
};

export default AutoSuggestion;
