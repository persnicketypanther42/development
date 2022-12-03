import React, {Component} from 'react';
import './css/reset.css';
import './css/App.css';

import {Button, Card, CardContent, Typography} from '@mui/material';

class CartItem extends Component {

    toggleUpdateCart = () => {
        this.props.updateCart(this.props.product.id);
    }

    render() {
        

        return (
            <Card className="Cart-card">
                <CardContent className="Card-Content">
                    <Typography className="Cart-product-names" variant="h5" component="h2">
                        {this.props.product.name}
                    </Typography>
                    <Button variant="contained"
                            color="secondary"
                            className="Card-Button"
                            onClick={() => this.toggleUpdateCart()}>
                    Remove from Cart
                    </Button>
                </CardContent>
            </Card>
        );
    }
}

export default CartItem;