/* eslint-disable react/prop-types */
import AddIcon from '@mui/icons-material/Add';
import { useState ,useRef,useId} from 'react';
import CloseIcon from '@mui/icons-material/Close';
const AddCategory = ({setAddcategory, category, setCategory}) => {
    const [message,setMessage] = useState('')
    const already = useRef(false) 
    const id = useId()
    const handleForm = (e) => {
        const name = e.target.name.value;
        if (!name) {
            setMessage('name can not  be empty!')
            setTimeout(()=> setMessage('') ,2000)
            return;
        }
        category.forEach((item) => {
            console.log(item.name)
            if (item.name == name){
                setMessage('name already exist!')
                setTimeout(()=> setMessage('') ,2000)
                already.current = true;
                return;
            }
        })
        if (already.current == true){
            already.current = false;
            return;
        }
        setCategory([...category,{name:name,id:id,expenses:[]}])
        setMessage('category added')
        setTimeout(()=> setMessage('') ,2000)
        setAddcategory(false)

        return;
    }
    return(
        <div className="category-modal addexpense">
            <button onClick={() => setAddcategory(false)}><CloseIcon /></button>
            <form onSubmit={(e) => {e.preventDefault() ; handleForm(e)}}>
                <input type="text" name="name" placeholder="Category name" />
                <button type="submit"><AddIcon/>Add!</button>
            </form>
            <h3>{message}</h3>
        </div>
    )

}
export default AddCategory