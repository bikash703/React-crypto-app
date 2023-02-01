import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react'
// import {} from 'react-icons'

const ErrorComponent = ({message}) => {
  return (
    <Alert status='error' pos={'fixed'} bottom={'4'} left={'50%'} transform={'translateX(-50%)'} w={'60%'} borderRadius={'lg'}>
        <AlertIcon/>
        {message}
    </Alert>
  )
}

export default ErrorComponent;
