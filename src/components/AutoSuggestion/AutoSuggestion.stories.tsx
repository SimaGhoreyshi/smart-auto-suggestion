// AutoSuggestion.stories.tsx

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import AutoSuggestion, { IAutoSuggestionProps } from "./AutoSuggestion";

export default {
  title: "AutoSuggestion",
  component: AutoSuggestion,
} as Meta;

const Template: StoryFn<IAutoSuggestionProps<any>> = (args) => (
  <AutoSuggestion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 },
    { name: "Doe2", age: 45 },
    { name: "Doe3", age: 55 },
    { name: "Doe4", age: 30 },
  ],
  keys: [
    { categoryKey: "name", categoryTitle: "name" },
    { categoryKey: "age", categoryTitle: "age" },
  ],
  placeholder: "Search...",
  onSelect: (item) => alert(JSON.stringify(item)),
};
