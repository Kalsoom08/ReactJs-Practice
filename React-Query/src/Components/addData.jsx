import React from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddUserButton = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: newUser => axios.post('/data', newUser),

        onSuccess : ()=>{
            queryClient.invalidateQueries(['data'])
        }
    })

  return (
    <button onClick={() => mutation.mutate({ name: 'John' })}>
      Add User
    </button>
  );
};

export default AddUserButton;
