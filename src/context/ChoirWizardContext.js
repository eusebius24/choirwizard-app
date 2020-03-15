import React from 'react';

const ChoirWizardContext = React.createContext({
    records: {},
    addRecord: () => {},
    editRecord: () => {},
}) 

export default ChoirWizardContext;