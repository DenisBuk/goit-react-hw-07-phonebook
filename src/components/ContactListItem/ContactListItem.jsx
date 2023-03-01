import { useEffect } from "react";
import PropTypes from "prop-types";

import { toast } from 'react-toastify';
import css from "./ContactListItem.module.css";

import { useDeleteContactsMutation } from '../../redux/ContactsApi';

function ContactListItem({ name, phone, id }) {
    
    const [deleteContacts, { isLoading: isDeleting, isSuccess, error }] =
        useDeleteContactsMutation();

    useEffect(() => { 
        isSuccess && toast.info(`${name} was removed from the phone book`);
        error && toast.error('something went wrong');
    }, [isSuccess, name, error]);
    
    return (
        <li className={css.Contact} key={ id}>
            <p>
                {name}: {phone}
            </p>
            
            <button
                className={ css.Button}
                    onClick={() => deleteContacts(id)}
                disabled={ isDeleting}
                    type="button"
            >
                { isDeleting ? 'Delete...' : 'Delete'}
            </button>   
        </li>
    );
}
 

ContactListItem.propTypes = {
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
};

export default ContactListItem;