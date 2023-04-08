import {
    Pane, Heading, SearchInput, majorScale, SelectMenu, Button
} from 'evergreen-ui'
import DirectoryCard from '../../components/DirectoryCard';
import HubView from '../../components/HubView';
import SelectFilter from '../../components/SelectFilter';

const major_options = [
    { label: 'Computer Science', value: 'COS' },
    { label: 'Operations Research and Financial Engineering', value: 'ORF' },
    { label: 'Mathematics', value: 'MAT' },
];
const year_options = [
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
    { label: '2026', value: '2026' },
    { label: '2027', value: '2027' },
]
const res_options = [
    { label: 'Mathey', value: 'Mathey' },
    { label: 'Rocky', value: 'Rocky' },
    { label: 'Whitman', value: 'Whitman' },
    { label: 'Forbes', value: 'Forbes' },
    { label: 'Butler', value: 'Butler' },
    { label: 'Yeh', value: 'Yeh' },
    { label: 'New College West', value: 'New College West' },
];
const eating_options = [
    { label: 'Cap & Gown', value: 'Cap' },
    { label: 'Tower', value: 'Tower' },
    { label: 'Colonial', value: 'Colonial' }
];

export default (() => (
    <HubView>
    <SearchInput 
        placeholder="Search by name or netid" 
        width="100%"
        height={majorScale(5)}
    />
    <SelectFilter
        options={major_options}
        title="Major"
        buttonText="Filter by Major"
        field="majors"
    >
    </SelectFilter>
    <SelectFilter
        options={year_options}
        title="Class Year"
        buttonText="Filter by Class Year"
        field="years"
    >
    </SelectFilter>
    <SelectFilter
        options={res_options}
        title="Residential College"
        buttonText="Filter by Residential College"
        field="residential colleges"
    >
    </SelectFilter>
    <SelectFilter
        options={eating_options}
        title="Eating Club"
        buttonText="Filter by Eating Club"
        field="eating clubs"
    >
    </SelectFilter>
    <Pane 
    marginTop={majorScale(4)}
    display="flex"
    flexDirection="row">
        <DirectoryCard />
        <DirectoryCard />
        <DirectoryCard />
    </Pane>
    
    </HubView>
));