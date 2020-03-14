import React from 'react';

const ChoirWizardContext = React.createContext({
    records: {},
    addRecord: () => {},
}) 

export default ChoirWizardContext;