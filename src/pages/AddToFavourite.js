import React,{useState,useEffect} from 'react'
import {useDispatch }  from "react-redux";
import { Link } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap'
import Cards from '../components/Cards'
import { removeToFav } from '../actions/index'
import { db } from '../firebase_config'
import Loader from '../components/Loader'

const AddToFavourite = () => {
  const [favourite, setFavourite] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  
  const length = favourite.length


  useEffect(() => {
    setLoading(true)
    function fetchData() {
      db.collection('fav')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => 
          setFavourite(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        )
    }
    fetchData()
    setLoading(false)
  }, [setLoading])
   
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          {favourite.map(({ id, data: { name, photoUrl } }) => (
            <Col key={id}>
              <Card
                key={id}
                style={{ width: '18rem' }}
                className="my-3 p-2 rounded item-center shadow mb-2 bg -white "
              >
                <Card.Img
                  className="text-center"
                  style={{ width: '15rem' }}
                  src={photoUrl}
                  variant="top"
                />

                <Card.Body>
                  <Card.Title as="div">
                    <strong>
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </strong>
                  </Card.Title>
                  <Button
                    onClick={() => dispatch(removeToFav(id))}
                    className="btn-danger"
                  >
                    Remove Favourite
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {length === 0 && <Cards>No Pokemon Found</Cards>}
      <Link to="/">
        <div className="text-center">
          <Button className="btn-primary my-3 ">Go back</Button>
        </div>
      </Link>
    </>
  )
}

export default AddToFavourite
