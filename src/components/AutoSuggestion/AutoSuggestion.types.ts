export interface IAutoSuggestionProps<T> {
    data: T[];
    keys: (keyof T)[];
    placeholder?: string;
    onSelect: (item: T) => void;
}
