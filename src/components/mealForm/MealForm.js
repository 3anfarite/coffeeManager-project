import React ,{ useState } from 'react'
import './mealForm.css'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { addMeal } from '../../redux/actions/meals';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MealForm = () => {
  
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState()
  const dispatch = useDispatch()


  const handleCategory = (e) =>{
    setCategory(e.target.value)
  }

  const handleTitle = (e) =>{
    setTitle(e.target.value)
  }

  const handlePrice=(e)=>{
    const val = parseFloat(e.target.value)
    if(isNaN(val)){
      setPrice("")
      return
    }
    setPrice(val);
  }

  const handleDescription = (e) =>{
    setDescription(e.target.value)
  }

  const handleSubmit = ()=>{
    if(title===''|| price===''){
      const notify = () => toast("Please enter valid data");
      notify();
      return;
    }
    const data = {
      title,
      price,
      description,
    }
    dispatch(addMeal(data))
  }

  

  return (
    <>
    {/* add meal section */}
      <div className="menu-form">
        <h4>Input Menu Category</h4>
        <div className="add-category">
          <input
                className="form-field"
                placeholder="Give a name to the meal"
                value={category}
                onChange={(e) => handleCategory(e)}
          />
        </div>
        <h4>Input Meal Info</h4>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
        <div className="form-item">
          <input
                className="form-field"
                placeholder="Give a name to the meal"
                value={title}
                onChange={(e) => handleTitle(e)}
          />
        </div>
        <div className="form-item">
          <input
                className="form-field"  
                placeholder="Set a price for this meal"
                value={price}
                onChange={(e) => handlePrice(e)}
          />
        </div>
        <div className="form-item">
          <textarea
                className="form-field"
                placeholder="Describe the meal"
                value={description}
                onChange={(e) => handleDescription(e)}
          />
        </div>
        {/* <div className="form-item">
          <label>Category</label>
          <input
                placeholder="Category"
                value={category}
          />
        </div> */}
        <div>
          <button className="add-meal-button"
                  onClick={handleSubmit}>
            <span class="button__text">Add</span>
            <span class="button__icon">
              <AddBoxOutlinedIcon/>
            </span>
            
          </button>
        </div>      
      </div>
    </>
  )
}

export default MealForm
