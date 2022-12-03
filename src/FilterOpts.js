import React, {Component} from 'react';
import './css/reset.css';

import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

class FilterOpts extends Component {

    filterItems = (selected) => {
        return (
            <FormControlLabel
                control={<Checkbox onChange={ () => this.props.updateFilters(this.props.filterTitle, selected) } value={selected} />}
                label={selected}
                key={selected}
            />
        )
    }

    formatTitle = (title) => {
        const stripped = title.split('Type')[0];
        return stripped.charAt(0).toUpperCase() + stripped.slice(1) + " Type";
    }

    render() {

        const selectables = this.props.selectFrom.map((selection) => this.filterItems(selection));

        return (
            <FormControl component="fieldset">
                <FormLabel className="Legend" component="legend">Filter {this.formatTitle(this.props.filterTitle)}:</FormLabel>
                <FormGroup className="Interxn-group">
                    {selectables}
                </FormGroup>
            </FormControl>
        );

    }


}

export default FilterOpts;
