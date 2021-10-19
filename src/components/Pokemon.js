import React from 'react'
import { Card,Button,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToFav} from '../actions/index';
import { db } from '../firebase_config';
import firebase from 'firebase/compat/app';


const Pokemon = ({ pokemon }) => {
    const dispatch = useDispatch();
    const addfav = ({ pokemon }) => {
        const data = {
          id: pokemon.id,
          name: pokemon.name,
          photoUrl: pokemon.sprites.front_default || '',
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       }
       db.collection('fav')
       .where('id','==',data.id)
       .get()
       .then((docm)=> {
         if(!docm.empty){
           console.log('Item Already Exist')
         }
         else{
          db.collection('fav').add(data)
          dispatch(addToFav(data))
        console.log('Favourite added')
         }
       })
        
      }
    
      return (
        <>
        <Card className="my-3 p-3 rounded text-center shadow mb-5 bg -white ">
              
              
                <Card.Img
                  style={{ width: '10rem' }}
                  src={pokemon.sprites.front_default}
                  variant="top"
                />
              
              <Card.Body
                className={`${pokemon.types[0].type.name} rounded text white`}
              >
               
                  <Card.Title as="div">
                    <h4>
                      {pokemon.id}. {pokemon.name}
                    </h4>
                  </Card.Title>
               
                <Col>
                  <Button onClick={() => addfav({ pokemon })}>
                   Add Favourite 💖
                  </Button>
                </Col>
                <Col>
                <Link to={`/pokemon/${pokemon.id}`}><Button type="button" className="btn btn-warning mt-2 pl-2">Pokemon Details</Button></Link> 
                
                </Col>
              </Card.Body>
            </Card>
         
           
        </>
      )
    }
    
export default React.memo(Pokemon)
