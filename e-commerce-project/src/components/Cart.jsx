import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart, incrementItem } from "../services/cartSlice";
import { Link } from 'react-router-dom';
import hero from "../components/Images/Shopping.jpg"

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
      <Container className="align-items-center justify-content-center d-flex flex-column relative">
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative w-full z-10 flex flex-col bg-white backdrop-blur-sm bg-opacity-40 font-bold text-3xl p-10 items-center">
            <Alert variant="warning" className="mb-10 mt-2">Your cart is empty‼️</Alert>
            <Link to="/productlist" className="absolute p-4 flex mt-10">
              Let's go Shopping 😁🛒
            </Link>
          </div>

        </div>
        
        
      </Container>
    );
  }

  const totalPrice = cartItems
  .reduce((sum, item) => sum + item.price * item.quantity, 0)
  .toFixed(2);



  return (
    <Container>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${hero})` }} 
      >

        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative w-full z-10 flex flex-col bg-white backdrop-blur-sm bg-opacity-40 p-4 items-center">

          <h3 className="pt-4 align-middle text-center text-3xl font-bold">Your Shopping Cart 🛒</h3>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button variant="danger" className="mb-3 bg-red-600 rounded-full p-4 text-white font-semibold" onClick={handleClearCart}>
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
                  <div className="flex gap-2 p-4">
                    <Button variant="outline-danger" onClick={() => handleRemove(item.id)} className="bg-red-600 p-4 rounded-full">
                      Remove
                    </Button>
                    <Button variant="outline-primary" className="bg-blue-600 p-4 rounded-full" onClick={() => handleIncrement(item.id)}>
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
              <Button variant="success" className=" p-4 rounded-full bg-blue-600 mb-3" onClick={() => alert('Checkout process coming soon!')}>
                Proceed to Checkout
              </Button>
          </Col>

          
        </div>
         
      </div>
      
    </Container>
  );
};

export default Cart;