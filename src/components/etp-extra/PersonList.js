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
        : (
            <div>hola</div>
        )
);

export default PersonList;
