import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart, incrementItem } from "../services/cartSlice";
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <Container style={{marginTop:"15%"}} className="align-items-center justify-content-center d-flex flex-column">
        <Alert variant="warning">Your cart is empty. Let’s go shopping!</Alert>
        <Link to="/products" className="text-decoration-none mb-3 d-block">
          ← Continue Shopping
        </Link>
      </Container>
    );
  }

  const totalPrice = cartItems
  .reduce((sum, item) => sum + item.price * item.quantity, 0)
  .toFixed(2);



  return (
    <Container className="mt-4">
      <h3>Your Cart</h3>
      <Button variant="danger" className="mb-3" onClick={handleClearCart}>
        Clear Cart
      </Button>
      <Link to="/products" className="text-decoration-none mb-3 d-block">
       ← Continue Shopping
      </Link>
      <Row>
        {cartItems.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.image} style={{ maxHeight: '15rem', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text><strong>Quantity:</strong> {item.quantity}</Card.Text>
                <Card.Text><strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}</Card.Text>
                
                  <Button variant="outline-danger" onClick={() => handleRemove(item.id)}>
                    Remove
                  </Button>
                  <Button variant="outline-primary" className="ms-2" onClick={() => handleIncrement(item.id)}>
                    Add
                  </Button> 
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>  
        <Col>
          <h5>Total: ${totalPrice}</h5>
            <Button variant="success" className="mb-3" onClick={() => alert('Checkout process coming soon!')}>
              Proceed to Checkout
            </Button>
        </Col>
    </Container>
  );
};

export default Cart;