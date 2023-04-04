import { Item } from './ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchAllContacts, setDeleteContacts } from 'redux/operations';

export const Contacts = () => {
  const contactsList = useSelector(selectFilteredContacts);
  console.log(contactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const removeContact = id => {
    dispatch(setDeleteContacts(id));
  };

  return contactsList.length <= 0 ? (
    <p>There are no contacts yet</p>
  ) : (
    <ol>
      {contactsList.map(({ id, name, number }) => (
        <li key={id}>
          <Item id={id} name={name} number={number} onClick={removeContact} />{' '}
        </li>
      ))}{' '}
    </ol>
  );
};
