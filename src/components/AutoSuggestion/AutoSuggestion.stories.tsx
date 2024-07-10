// AutoSuggestion.stories.tsx

import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import AutoSuggestion from "./AutoSuggestion";
import { IAutoSuggestionProps } from "./AutoSuggestion.types";

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
    { title: "آبکش", color: "زرد", category: "ظروف" },
    { title: "آبپاش", color: "قرمز", category: "باغبانی" },
    { title: "قوری", color: "آبی", category: "ظروف" },
    { title: "سبد", color: "سفید", category: "ظروف" },
    { title: "گلدان", color: "سرخابی", category: "باغبانی" },
    { title: "بشقاب", color: "آبی آسمانی", category: "ظروف" },
  ],
  keys: [
    { categoryKey: "title", categoryTitle: "نام محصول" },
    { categoryKey: "color", categoryTitle: "رنگ" },
    { categoryKey: "category", categoryTitle: "دسته بندی" },
  ],
  placeholder: "Search...",
  onSelect: (item) => alert(JSON.stringify(item)),
};
