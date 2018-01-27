export interface IFiltersState {
    enabled: boolean;
    expanded: boolean;
}

export interface IRouteData {
    title: string;
    isListView: boolean;
    filters: IFiltersState;
    isEditingEnabled: boolean;
}
