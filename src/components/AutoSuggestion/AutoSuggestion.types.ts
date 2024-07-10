export interface IKeys {
    categoryKey: string;
    categoryTitle: string;
    categoryOnClick: () => void | undefined;
}

export interface IAutoSuggestionProps<T> {
    data: T[];
    keys: IKeys[];
    placeholder?: string;
    onSelect: (item: T) => void;
    minCharLength: number;
}
