import { SelectMenu, Button, majorScale } from 'evergreen-ui';
import { useState } from 'react';

export default function SelectFilter({ 
        children,
        options, 
        title="Select multiple options...",
        buttonText="",
        field=""
    }) {
    
    const [selectedItemsState, setSelectedItems] = useState([])
    const [selectedItemNamesState, setSelectedItemNames] = useState(null)

    return (
        <SelectMenu
            isMultiSelect
            title={title}
            options={options}
            selected={selectedItemsState}
            onSelect={(item) => {
                const selected = [...selectedItemsState, item.value]
                const selectedItems = selected
                const selectedItemsLength = selectedItems.length
                let selectedNames = ''
                if (selectedItemsLength === 0) {
                selectedNames = ''
                } else if (selectedItemsLength === 1) {
                selectedNames = selectedItems.toString()
                } else if (selectedItemsLength > 1) {
                selectedNames = selectedItemsLength.toString() + ' ' + field + ' selected...'
                }
                setSelectedItems(selectedItems)
                setSelectedItemNames(selectedNames)
            }}
            onDeselect={(item) => {
                const deselectedItemIndex = selectedItemsState.indexOf(item.value)
                const selectedItems = selectedItemsState.filter((_item, i) => i !== deselectedItemIndex)
                const selectedItemsLength = selectedItems.length
                let selectedNames = ''
                if (selectedItemsLength === 0) {
                selectedNames = ''
                } else if (selectedItemsLength === 1) {
                selectedNames = selectedItems.toString()
                } else if (selectedItemsLength > 1) {
                selectedNames = selectedItemsLength.toString() + ' selected...'
                }

                setSelectedItems(selectedItems)
                setSelectedItemNames(selectedNames)
            }}
            width={500}
        >
            <Button 
                width={majorScale(25)}
                marginTop={majorScale(2)}
                marginRight={majorScale(2)}
            >
                {selectedItemNamesState || buttonText}
            </Button>
        </SelectMenu>
    );
}