import React, { useState, useEffect, useRef } from 'react';

import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import './menu.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  icon: {
    width:"80px"
  }
}))


function Menu() {
  const classes = useStyles()
  const canvasRef = useRef(null)

  const [inputCategory, setInputCategory] = useState([
    { id: uuidv4(), category: '' },
  ]);

  

  useEffect(()=>{
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
    context.font = "20px";
    context.fillText("value", 10, 50); 
    context.save();
 
  })

  


  const [inputMeal, setInputMeal] = useState([
    { id: uuidv4(), mealName: '', price: '' },
  ]);

  const handleAddCategory = () => {
    setInputCategory([...inputCategory, { id: uuidv4(),  category: ''}])
  }

  const handleRemoveCategory = id => {
    const values  = [...inputCategory];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputCategory(values);
  }



  const handleAddMeal = () => {
    setInputMeal([...inputMeal, { id: uuidv4(),  mealName: '', price: '' }])
  }

  const handleRemoveMeal = id => {
    const values  = [...inputMeal];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputMeal(values);
  }

  return (
<>
    <Container>
      <h2>Add New Category</h2>
      <form className={classes.root} >
        { inputCategory.map(inputCat => (
          <div key={inputCat.id}>
            <TextField
              name="category"
              label="Category Name"
              variant="filled"
              value={inputCategory.category}
            />
            <IconButton className={classes.icon}
                        disabled={inputCategory.length === 1} onClick={() => handleRemoveCategory(inputCat.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton className={classes.icon}
              onClick={handleAddCategory}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        
      </form>
      <h3>Add New Meal and Price</h3>
      <form className={classes.root} >
        { inputMeal.map(inputM => (
          <div key={inputM.id}>
            <TextField
              name="mealName"
              label="Meal Name"
              variant="filled"
              value={inputMeal.meal}
              
            />
            <TextField
              name="price"
              label="Price"
              variant="filled"
              value={inputMeal.price}
             

            />
            <IconButton className={classes.icon}
                        disabled={inputMeal.length === 1} onClick={() => handleRemoveMeal(inputM.id)}>
                <RemoveIcon  />
            </IconButton>
            <IconButton className={classes.icon}
              onClick={handleAddMeal}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        
      </form>
    </Container>
    <div className='canvas_right'>
      
            <div className="canvas-container">
                <canvas ref={canvasRef} 
                        id="myCanvas" width="500" height="600"/> 
              
            </div>
    </div>
</>
    
  );
}

const Container = styled.div`
  padding-top: 2rem;
  position: absolute;
  left: 50px;
  max-height :650px;
  width: 50%;
  overflow-y: auto;
`;



export default Menu;
