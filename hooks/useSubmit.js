import React, {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = (submitForm) => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [formData, setFormData] = useState({
        nombre:"",
        apellidos:"",
        dia:"",
        comensales:"",
        hora:"",
        especial: "",

    });

    const handleChange = (e) => {
        // const  {nombre, apellidos, dia, comensales, hora} = e.target;
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submit = async (e) => {
        e.preventDefault();
        console.log("Entra");
        const random = Math.random();
        setLoading(true);
        console.log(formData);
        try {
            await submitForm();
            if (random < 0.5) {
                throw new Error("Something went wrong");
            }
            setResponse({
                type: 'success',
                message: `Thanks for your submission.`
            })
        } catch(error){
            setResponse({
                type: 'error',
                message: 'Something went wrong,please try again'
            })
        } finally {
            setLoading(false);
        }
    }
    return {isLoading, response, handleChange,submit };
}
export default useSubmit;