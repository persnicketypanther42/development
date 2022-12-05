import React, {Component} from 'react';
import './css/reset.css';

import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';

class SortOpts extends Component {

    handleSort = (e) => {
        this.setState({
            sort: e.target.value
        });
        this.props.updateSort(e.target.value);
    }

    render() {
        return (
            <FormControl className="MuiFormControl-root" component="fieldset">
                <FormLabel className="Legend">Sort By:</FormLabel>
                <RadioGroup className="Interxn-group"
                            row aria-label="sort"
                            name="sort"
                            value={this.props.sort}
                            defaultChecked={this.props.sort}
                            onChange={this.handleSort}>
                    <FormControlLabel value="rating" control={<Radio />} label="Customer Ratings" />
                    <FormControlLabel value="price" control={<Radio />} label="Price" />
                </RadioGroup>
            </FormControl>
        );
    }

}

export default SortOpts;
