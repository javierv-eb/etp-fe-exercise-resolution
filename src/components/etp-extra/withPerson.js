import React from 'react';

import PersonList from './PersonList';

const withPerson = (Component) => {
    const PersonInfo = (props) => (
        <>
            <Component {...props} />
            <PersonList {...props} />
        </>
    );

    return PersonInfo;
};

export default withPerson;
