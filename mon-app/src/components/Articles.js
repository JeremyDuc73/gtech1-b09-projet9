import { Card,Button } from 'react-bootstrap';

function Article(props){
  console.log(props);
  return (
    <>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"http://localhost:1337"+(props.article.attributes.img.data && props.article.attributes.img.data.attributes.url)} />
          <Card.Body>
              <Card.Title>{props.article.attributes.name}</Card.Title>
              <Card.Text>
                  {props.article.attributes.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
    </>
  );
}

export default Article;
