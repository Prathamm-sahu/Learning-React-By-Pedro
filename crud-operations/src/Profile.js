import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function Profile() {
    let navigate = useNavigate();
    let { username } = useParams();
    return (
        <div>
            This is profile page for {username}
            <button
                onClick={() => {
                    navigate("/")
                }}
            >
            Change to about page
            </button>
        </div>
    )
}