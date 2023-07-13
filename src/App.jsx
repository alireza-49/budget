import { useState } from 'react'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AddIcon from '@mui/icons-material/Add';
import './App.css'
import Gerald_G_clematis_occidentalis from './assets/Gerald_G_clematis_occidentalis.svg'
import AddCategory from './addcategory.jsx'
import AddExpence from './addexpence.jsx'
import Modal from './modal.jsx'
import Data from './data.jsx'

function App() {
  const [category, setCategory] = useState([])
  const [addcategory , setAddcategory] = useState(false)
  const [addexpence , setAddexpence] = useState(false)
  if (category.length === 0){
  return (
    <>
    {addcategory? <Modal><AddCategory setAddcategory={setAddcategory}  setCategory={setCategory} category={category}/></Modal>:null}
    {addexpence? <Modal><AddExpence setAddexpence={setAddexpence} setCategory={setCategory}  category={category}/></Modal>:null}

    <div className='header'>
      <RequestQuoteIcon className='icon'/>
      <div>
          <button onClick={() => {setAddexpence(true)}}>
            <AddIcon/>
            <h3>add expence</h3>
          </button>
          <button onClick={() => {setAddcategory(true)}}>
            <AddIcon/>
            <h3>add category</h3>
          </button>
      </div>
    </div>
    <div className='place-holder-img'>
      <img  src={Gerald_G_clematis_occidentalis} alt="" />
    </div>
    </>
  )}

  else{
    return(
    <>
    {addcategory? <Modal><AddCategory setAddcategory={setAddcategory} setCategory={setCategory}  category={category}/></Modal>:null}
    {addexpence? <Modal><AddExpence setAddexpence={setAddexpence} setCategory={setCategory}  category={category}/></Modal>:null}
    <div className='header'>
      <RequestQuoteIcon className='icon'/>
      <div>
      <button onClick={() => {setAddexpence(true)}}>
            <AddIcon/>
            <h3>add expence</h3>
          </button>
          <button onClick={() => {setAddcategory(true) ;console.log(AddCategory())}}>
            <AddIcon/>
            <h3>add category</h3>
          </button>
      </div>
    </div>
    <div className='page-container'>
      <Data setCategory={setCategory} category={category}/>
    </div>
    </>

  )}
}

export default App
