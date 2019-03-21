declare interface IEventsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  TenantIdFieldLabel: string;
  LocationIdFieldLabel: string;
  Header: string;
}

declare module 'EventsWebPartStrings' {
  const strings: IEventsWebPartStrings;
  export = strings;
}
