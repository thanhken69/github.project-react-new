import React, { useEffect, useState } from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './style'
import CartItem from './CartItem.jsx/CartItem'
import { Link } from 'react-router-dom'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles()
    // const isEmty = !cart.line_items.lenght
    // console.log(items[0])
    const isEmty = !cart.line_items.length
    console.log(isEmty)



    const EmtyCart = () => (
        <Typography variant='subtitle1'>You have no items in your shopping cart,
            <Link to='/' className={classes.link} >start adding something!</Link>
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={2}>
                {cart.line_items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom >Your Shopping Cart</Typography>
            {isEmty ? <EmtyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
