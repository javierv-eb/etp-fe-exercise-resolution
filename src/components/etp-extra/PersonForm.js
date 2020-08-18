import React from 'react';

import InputField from 'eventbrite_design_system/inputField/InputField';
import {
    STYLE_BASIC,
} from 'eventbrite_design_system/inputField/constants';
import {
    STYLE_FILL,
    SIZE_RESPONSIVE,
} from 'eventbrite_design_system/button/constants'
import Button from 'eventbrite_design_system/button/Button';

export default class PersonForm extends React.PureComponent {
    render() {
        return (
            <section>
                <form>
                    <div className="eds-g-cell eds-g-cell-10-12 eds-l-pad-top-2">
                        <InputField
                            id="person-name"
                            label="Name"
                            style={STYLE_BASIC}
                            placeholder="Add a name"
                        />
                    </div>
                    <div className="eds-g-cell eds-g-cell-10-12 eds-l-pad-top-2">
                        <InputField
                            id="person-lastname"
                            label="last-name"
                            style={STYLE_BASIC}
                            placeholder="Add a lastname"
                        />
                    </div>

                    <Button style={STYLE_FILL}
                        size={SIZE_RESPONSIVE}
                    >
                        Add Person
                    </Button>
                </form>
            </section>
        )
    }
};