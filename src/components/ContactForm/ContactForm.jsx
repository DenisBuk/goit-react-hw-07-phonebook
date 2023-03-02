import { useEffect, useState } from "react";
import {
    useAddContactsMutation,
    useGetContactQuery
} from '../../redux/ContactsApi';
import { toast }  from 'react-toastify';
import css from "./ContactForm.module.css";

function ContactForm() {
    const [addContacts, { isLoading, isSuccess, error }] =
        useAddContactsMutation();
    const { data } = useGetContactQuery();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [nameForToast, setnameForToast] = useState('');

    useEffect(() => {
        isSuccess &&
            toast.success(`${nameForToast} added to contact book`, {
                autoClose: 800,
            });
        error && toast.error('oops something went wrong');
    }, [error, isSuccess, nameForToast]);
    

    const handleInputChange = ({ currentTarget: { name, value } }) => {
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const onFormSubmit = e => {

        e.preventDefault();
        setnameForToast(name);

        data.map(item => item.name.toLowerCase() !== name.toLowerCase())
            ? addContacts({
                name: name,
                phone: number,
            })
            : toast.error(`${name} is already in contacts!!!`);
        
        console.log(data);
        
        setName('');
        setNumber('');
    };

    return (
        <form autoComplete="off" onSubmit={onFormSubmit}>
            <label className={css.form}>
                <p>Name</p>
                <input
                    onChange={handleInputChange}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. 
                           For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    className={css.input}
                />
                <p>Number</p>
                <input
                    onChange={handleInputChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    className={css.input}
                />
                <button
                    className={ css.button}
                    type="submit"
                    disabled={number && name ? false : true}
                >
                    { isLoading ? 'Add Contact...Spiner' : 'Add Contact'}
                    </button>
            </label>
        </form>
    );
}


export default ContactForm;