import React from 'react'
import { Card,Button,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToFav} from '../actions/index';
import { db } from '../firebase_config';
import firebase from 'firebase/compat/app'


const Pokemon = ({ pokemon }) => {
    const dispatch = useDispatch();
    const addfav = ({ pokemon }) => {
        const data = {
          id: pokemon.id,
          name: pokemon.name,
          photoUrl: pokemon.sprites.front_default || '',
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
        db.collection('fav').add(data)
        dispatch(addToFav(data))
        console.log(data);
      }
    
      return (
        <>
        
            <Card className="my-3 p-3 rounded text-center shadow mb-5 bg -white ">
              <Link to={`/pokemon/${pokemon.id}`}>
                <Card.Img
                  style={{ width: '8rem' }}
                  src={pokemon.sprites.front_default}
                  variant="top"
                />
              </Link>
              <Card.Body
                className={`${pokemon.types[0].type.name} rounded text white`}
              >
                <Link to={`/pokemon/${pokemon.id}`} className="link-name">
                  <Card.Title as="div">
                    <strong>
                      {pokemon.id}. {pokemon.name}
                    </strong>
                  </Card.Title>
                </Link>
                <Col>
                  <Button onClick={() => addfav({ pokemon })}>
                    Add Favourite
                  </Button>
                </Col>
              </Card.Body>
            </Card>
         
        </>
      )
    }
    
    export default React.memo(Pokemon)
