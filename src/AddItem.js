import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
const AddItem = ({ newItem, setNewItem, handleFormSubmit }) => {
  const inputRef = useRef();
  return (
    <form className='addItem-form' onSubmit={handleFormSubmit}>
      <input
        type='text'
        autoFocus
        ref={inputRef}
        aria-label='Add Item'
        placeholder='Add Item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      />
      <button
        type='submit'
        aria-label='Add item'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
