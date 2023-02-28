import { useState } from "react";
import {
    useAddContactMutation,
    useGetContactQuery
} from '../../redux/'
import Button from "../Button";
import css from "./ContactForm.module.css";

function ContactForm() {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");



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

        const isExist = contacts.find
            (item => item.name.toLowerCase() === name.toLowerCase());

        if (isExist) {
            return alert(`${name} is alredy in contacts`);
        }


        dispatch(addContact({ name, number }));
        setName("");
        setNumber("");
    };

    return (
        <form onSubmit={onFormSubmit}>
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
                <Button
                    text="Add Contact"
                    type="submit"
                    disabled={number && name ? false : true}
                />
            </label>
        </form>
    );
}


export default ContactForm;