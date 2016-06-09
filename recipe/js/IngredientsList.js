import React from 'react';
import { ListGroup, ListGroupItem, Button, ButtonToolbar, Modal } from 'react-bootstrap';


export default class IngredientsList extends React.Component {


  render() {
    var ingredientList = this.props.ingredients.map(function(ingredient) {
      return (
        <ListGroupItem>
          {ingredient}
        </ListGroupItem>
      );
    });
    return (
      <div>
        <ListGroup>
          {ingredientList}
        </ListGroup>



      </div>
    );
  }
}
