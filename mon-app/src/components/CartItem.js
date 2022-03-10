import { Card,Container } from 'react-bootstrap';
import './CartItem.css'

function CartItem(props){
  console.log(props);
  return (
    <>
      <Card id='ItemCard' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"http://localhost:1337"+(props.element.img.data && props.element.img.data.attributes.url)} />
        <hr></hr>
        <Card.Body id='cardbody'>
          <Card.Title id='itemtitle'>{props.element.name}</Card.Title>
          <Card.Text id='itemdescription'>
            {props.element.description}
          </Card.Text>
          <Container id='itembottom'>
            <Card.Text id='itemprice'>
              {props.element.price}€
            </Card.Text>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default CartItem;
