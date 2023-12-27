import { useState, useCallback } from "react";

export function useForm() {
    const [values, setValues] = useState({});

    const handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange, setValues };
}

export function useFormWithValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [initialValues, setInitialValues] = useState({});

    const emailPattern = /^(([^<()[\]\\.,;:\s@"]+(\.[^<()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<()[\]\\.,;:\s@"]+\.)+[^<()[\]\\.,;:\s@"]{2,})$/i;
    const namePattern = /^[а-яА-Яa-zA-Z]+$/;
    const phonePattern = /^\+[0-9]{11}$/;
    const urlPattern = /^(https?:\/\/)?[\w-]+\.[\w]{2,4}(\.[\w]{2,4})?(?:\/[^\s]*)?$/;

    const handleChange = useCallback((evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        if (name === 'email') {
            setErrors({ ...errors, [name]: value.match(emailPattern) ? '' : 'Enter correct Email' });
        } else if (name === 'name') {
            if (value.trim() === '') {
                setErrors({ ...errors, [name]: 'The Name field is required' });
            } else {
                setErrors({ ...errors, [name]: value.match(namePattern) ? '' : 'Enter a valid name' });
            }
        } else if (name === 'phone') {
            if (value.trim() === '') {
                setErrors({ ...errors, [name]: 'The Phone field is required.' });
            } else {
                setErrors({ ...errors, [name]: value.match(phonePattern) ? '' : 'Please enter a valid phone number' });
            }
        } else if (name === 'url') {
           setErrors({ ...errors, [name]: value.match(urlPattern) ? '' : 'Please enter a valid URL' });
        } else {
            setErrors({ ...errors, [name]: target.validationMessage });
        }

        setValues({ ...values, [name]: value });
        setIsValid(target.closest('form').checkValidity());
    }, [values, errors])

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setInitialValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
            setValues(newValues);
        },
        [setInitialValues, setErrors, setIsValid]
    );

    return {
        values,
        handleChange,
        errors,
        isValid,
        resetForm,
        emailPattern,
        initialValues,
        setInitialValues,
        setValues,
        namePattern,
        phonePattern,
        urlPattern
    };
}