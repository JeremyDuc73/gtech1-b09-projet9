import { Card,Button,Row,Container } from 'react-bootstrap';
import './CartItem.css'

function CartItem(props){
  console.log(props);
  return (
    <>
      <Card id='ItemCard' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"http://localhost:1337"+(props.article.attributes.img.data && props.article.attributes.img.data.attributes.url)} />
        <hr></hr>
        <Card.Body id='cardbody'>
          <Card.Title id='itemtitle'>{props.article.attributes.name}</Card.Title>
          <Card.Text id='itemdescription'>
            {props.article.attributes.description}
          </Card.Text>
          <Container id='itembottom'>
            <Card.Text id='itemprice'>
              {props.article.attributes.price}€
            </Card.Text>
            <Row>
              <Button onClick={localStorage.setItem('article',props.article.attributes)} id='ItemButton' variant="primary">ADD TO CART</Button>
              {/* <Button id='ItemButton' variant="primary">GO TO PAGE</Button> */}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default CartItem;
