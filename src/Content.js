import { FaTrashAlt } from 'react-icons/fa';
import emptySvg from './empty.svg';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className='main'>
      {items.length ? (
        <ul className='tasklist'>
          {items.map((item) => (
            <li className='list__item' key={item.id}>
              <input
                type='checkbox'
                id={item.id}
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label htmlFor={item.id}>
                <span>{item.item}</span>
              </label>
              <FaTrashAlt
                className='delete__item'
                role='button'
                aria-label={`delte ${item.item}`}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <img className='emptyList' src={emptySvg} alt='Empty List' />
          <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>You have no tasks</p>
        </div>
      )}
    </main>
  );
};

export default Content;
