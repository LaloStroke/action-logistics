const LocationsConfigFields: FormField[] = [
  {
    placeholder: 'Id',
    type: 'text',
    name: 'ID',
    label: 'ID',
    widthInDesktop: 'half',
  },
  {
    placeholder: 'Associated Assets',
    type: 'number',
    name: 'Associated Assets',
    label: 'Associated Assets',
    widthInDesktop: 'half',
  },
  {
    placeholder: 'Location',
    type: 'select',
    name: 'Location',
    optionsSelect: ['Location 1', 'Location 2', 'Location 3'],
    label: 'Location',
    widthInDesktop: 'half',
  },
  {
    placeholder: 'Owner',
    type: 'select',
    optionsSelect: ['Owner 1', 'Owner 2', 'Owner 3'],
    name: 'Owner',
    label: 'Owner',
    widthInDesktop: 'half',
  },
  {
    placeholder: 'Sections',
    type: 'select',
    name: 'Sections',
    optionsSelect: ['Section 1', 'Section 2', 'Section 3'],
    label: 'Sections',
    widthInDesktop: 'full',
  },
];

export { LocationsConfigFields };
