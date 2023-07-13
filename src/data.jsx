/* eslint-disable react/jsx-key */
import DeleteIcon from '@mui/icons-material/Delete';
import { useRef} from "react"

/* eslint-disable react/prop-types */
const Data = ({category,setCategory}) => {
    const valueEach = useRef(0)
    const total = useRef(0) 
    total.current = 0;
    const deleteexpense = (category,itemid, expenseid,id) => {
        const updatedCategory = [...category];
        document.getElementById(id).style.animation = 'delete 0.5s 0s 1 normal forwards'
        setTimeout(() => {
            updatedCategory[itemid].expenses.splice(expenseid,1);
            setCategory(updatedCategory);
        },500)
      };
      
      const deleteitem = (category,itemid, id) => {
        const updatedCategory = [...category];
        setTimeout(() => {
            updatedCategory.splice(itemid,1);
            setCategory(updatedCategory);
            return;

        },50)
        return;
      };



    return(
        <>
            {category.map((item) => {
                const itemid = category.indexOf(item)
                valueEach.current = 0;
                return (
                <div className="each-category" id={item.id + 'item'}>
                    <h1>{item.name}</h1>
                    <button onClick={() => {deleteitem(category,itemid,item.id + 'item');}} >
                        <DeleteIcon/>
                    </button>
                    {item.expenses.map((expense) =>{
                        valueEach.current = valueEach.current + expense.amount;
                        total.current = total.current + expense.amount;
                        const id = item.expenses.indexOf(expense)
                        return(
                            <div className="each-expense" id={expense.id}>
                                <div className="expense-data">
                                <h2>{expense.name}</h2>
                                <h2>{expense.date}</h2>
                                </div>
                                <button onClick={() => {deleteexpense(category,itemid,id,expense.id);}} className="expense-delete">
                                    <DeleteIcon/>
                                </button>
                                <h3>amount: {expense.amount}</h3>

                            </div>
                            )
                    })}
                    <h3>total in this category : {valueEach.current}</h3>
                </div>
            )})}
            <div>
                <h3 className="total-money">total value is {total.current}</h3>
            </div>

            
        </>
    )
}
export default Data; 