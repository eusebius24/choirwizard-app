import React, { useContext } from 'react';


const ChoirWizardContext = React.createContext({
    records: [],
    addRecord: () => {},
    editRecord: () => {},
    deleteItemRequest: () => {},
    deleteRecord: () => {},
    searchRequest: () => {},
    updateItemRequest: () => {},
    getAllItems: () => {},
}) 

export const useAppContext = () => {
    useContext(ChoirWizardContext)
}

export default ChoirWizardContext;