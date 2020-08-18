import React from 'react';
import isEmpty from 'lodash/isEmpty';

import EmptyState from 'eventbrite_design_system/emptyState/EmptyState';
import GhostGraphicSvg from 'eventbrite_design_system/iconography/icons/GhostGraphic';

const PersonList = ({
    persons = []
}) => (
        isEmpty(persons)
            ? (
                <div className="eds-l-pad-top-20">
                    <EmptyState
                        graphicType={<GhostGraphicSvg />}
                        title="No People!!!"
                    />
                </div>
            )
            :
            (<>
                <div className="eds-align--space-between eds-l-pad-all-4 eds-l-mar-top-10 eds-bg-color--grey-100">
                    <span>Name</span>
                    <span>Last Name</span>
                </div>
                {persons.map(
                    ({ name, lastName }) => (
                        <div className="eds-align--space-between eds-l-pad-all-4">
                            <span>{name}</span>
                            <span>{lastName}</span>
                        </div>
                    )
                )}
            </>
            )

    );

export default PersonList;
