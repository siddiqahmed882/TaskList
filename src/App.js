import { useState } from 'react';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import SearchItem from './SearchItem';
import Footer from './Footer';
function App() {
  const data = JSON.parse(localStorage.getItem('taskList'));
  const [items, setItems] = useState(data);
  const [newItem, setNewItem] = useState('');
  const [newSearch, setNewSearch] = useState('');

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('taskList', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('taskList', JSON.stringify(listItems));
  };

  const addItemToList = (newListItem) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const listItems = [...items, { id, checked: false, item: newListItem }];
    setItems(listItems);
    localStorage.setItem('taskList', JSON.stringify(listItems));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addItemToList(newItem);
    setNewItem('');
  };
  return (
    <div className='container'>
      <Header title='Todo App' />
      <SearchItem newSearch={newSearch} setNewSearch={setNewSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleFormSubmit={handleFormSubmit}
      />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(newSearch.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        items={items.filter((item) =>
          item.item.toLowerCase().includes(newSearch.toLowerCase())
        )}
      />
    </div>
  );
}

export default App;
