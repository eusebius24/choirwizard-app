import React from 'react';

const ChoirWizardContext = React.createContext({
    records: {},
    addRecord: () => {},
    editRecord: () => {},
    deleteItemRequest: () => {},
    deleteRecord: () => {},
    searchRequest: () => {},
}) 

export default ChoirWizardContext;