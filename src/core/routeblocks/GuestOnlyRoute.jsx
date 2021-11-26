import React, { useEffect } from 'react'
import { useAuth } from '../contexts'
import { useHistory } from 'react-router-dom';

const GuestOnlyRoute = ({children, redirect}) => {
    const { status } = useAuth()
	const history = useHistory();
    
    useEffect(() => {
        if (status !== 'guest' && status !== 'initial') {
            history.push(redirect)
        }
    }, [status])

    return (
        <div>
           {status === 'guest' && children}
        </div>
    )
}

export default GuestOnlyRoute