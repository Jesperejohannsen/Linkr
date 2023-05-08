import React, { FormEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
    name: string;
    age: number
}


const Form = () => {

    // Her bruger vi et useForm fra react-hook-form, som vi bruger til at opdatere vores state values.
    const { register, handleSubmit, formState: { errors} } = useForm<FormData>();

    
    // Her laver vi en onSubmit, som vi bruger til at console.logge vores state values.
    const onSubmit = (data: FieldValues) => console.log(data);

  
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="name" className="class-label">Name</label>
            <input 
            // Her går vi ind i vores register, og giver den et navn, som vi kan bruge til at identificere vores state values.
                { ...register("name", { required: true, minLength: 3 })}
                id="name" 
                type="text" 
                className="form-control" />
            { errors.name?.type === "required" && <p className="text-danger">The name field is required.</p>}
            { errors.name?.type === "minLength" && <p className="text-danger">The name field must be at least 3 characters.</p>}

        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input 
            // Det samem gør vi med age, som vi har gjort med navn. 
            { ...register("age")}
            id="age" 
            type="number" 
            className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form

