/* eslint-disable react/prop-types */
import AddIcon from '@mui/icons-material/Add';
import { useState,useRef, useId } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const AddExpence = ({setAddexpence, category, setCategory}) => {
    const [message,setMessage] = useState('')
    const temp = useRef(category)
    const category_found = useRef(false)
    const id = useId()

    const handleForm = (e) => {

        const name = e.target.name.value;
        const target_category = e.target.categoryName.value;
        const date = e.target.date.value;
        if (!name || !target_category) {
            setMessage('name or category can not  be empty!')
            setTimeout(()=> setMessage('') ,2000)
            return;
        }
        if(!e.target.amount.value || !Number(e.target.amount.value)) {
            setMessage('invalid amount')
            setTimeout(()=> setMessage('') ,2000)
            return;
             
        }
        const amount = Number(e.target.amount.value)
        temp.current.forEach((item) => {
            if (item.name == target_category){
                category_found.current = true;
                item.expenses.push({
                    id:id,
                    name:name,
                    date:date,
                    amount:amount,
                })
            }
        })
        setCategory(temp.current)
        setMessage('expense added')
        setTimeout(()=> setMessage('') ,2000)

        setAddexpence(false)
        return;
    }
    return(
        <div className="category-modal addexpense">
            <button onClick={() => {setAddexpence(false)}}><CloseIcon /></button>
            <form onSubmit={(e) => {e.preventDefault() ; handleForm(e)}}>
                <input type="text" name="categoryName" placeholder="Category name" />
                <input type="text" name="name" placeholder="expense name" />
                <input type="date" name="date" id="" />
                    <input type="text" name="amount" placeholder="amount of money" />

                <button type="submit"><AddIcon/>Add!</button>
            </form>
            <h3>{message}</h3>
        </div>
    )

}
export default AddExpence;