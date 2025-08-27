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
      <Container style={{marginTop:"15%"}} className="align-items-center justify-content-center d-flex flex-column relative">
        <div className="justify-items-center text font-bold text-3xl p-4">
          <Alert variant="warning">Your cart is empty‼️</Alert>
          <Link to="/productlist" className="absolute p-4 flex gap-2">
            Let's go Shopping 😁🛒
          </Link>
        </div>
        
      </Container>
    );
  }

  const totalPrice = cartItems
  .reduce((sum, item) => sum + item.price * item.quantity, 0)
  .toFixed(2);



  return (
    <Container className="relative mt-4">
      <h3 className="pt-4 align-middle text-center text-3xl font-bold">Your Shopping Cart 🛒</h3>
      <div className="absolute bottom-4 right-4 flex gap-2">
          <Button variant="danger" className="mb-3 bg-red-600 border rounded-full p-4 text-white font-semibold" onClick={handleClearCart}>
            Clear Cart
          </Button>
          <Link to="/productlist" className="p-4">
            Let's continue shopping 🛒
          </Link>
      </div>
      
      <Row className="relative">
        {cartItems.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="mb-4 p-4">
              <Card.Img variant="top" src={item.image} style={{ maxHeight: '15rem', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text><strong>Quantity:</strong> {item.quantity}</Card.Text>
                <Card.Text><strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}</Card.Text>
                <div className="gap-2 p-4">
                  <Button variant="outline-danger" onClick={() => handleRemove(item.id)} className="bg-red-600 p-4 border rounded-full">
                    Remove
                  </Button>
                  <Button variant="outline-primary" className="bg-blue-600 p-4 border rounded-full" onClick={() => handleIncrement(item.id)}>
                    Add
                  </Button>
                </div>
                   
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>  
        <Col>
          <h5 className="text-2xl font-bold p-6">Total: ${totalPrice}</h5>
            <Button variant="success" className=" border p-4 rounded-full bg-blue-600 mb-3" onClick={() => alert('Checkout process coming soon!')}>
              Proceed to Checkout
            </Button>
        </Col>
    </Container>
  );
};

export default Cart;