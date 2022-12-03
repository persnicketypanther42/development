import React, {Component} from 'react';
import './css/reset.css';
import './css/App.css';

import {Button, Card, CardContent, Typography} from '@mui/material';

class ListItem extends Component {  

    toggleUpdateCart = () => {
        this.props.updateCart(this.props.product.id);
    }

    render() {

        return (
            <Card className="List-card">
                <CardContent className="Card-Content">
                    <Typography className="List-product-names" variant="h5" component="h2">
                        {this.props.product.name}
                    </Typography>
                    <br />
                    <Typography variant="body4" component="p">
                        ${this.props.product.price}
                    </Typography>
                    <br />
                    <Typography variant="body4" component="p">
                        {this.props.product.rating} out of 5 Stars
                    </Typography>
                    <br />
                    <Button variant="contained"
                            color={this.props.inCart ? "secondary" : "primary"}
                            className="Card-Button"
                            onClick={() => this.toggleUpdateCart()}>
                    {this.props.inCart ? 'Remove from Cart' : 'Add to Cart'}
                    </Button>
                </CardContent>
                <img src={this.props.product.image} alt={this.props.product.name} width="200" height="200" />
            </Card>
        );

    }
}

export default ListItem;
