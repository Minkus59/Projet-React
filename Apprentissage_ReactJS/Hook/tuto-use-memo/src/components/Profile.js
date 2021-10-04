import React from 'react';

function profile({profile, count}) {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item"><strong>User ID: {count}</strong></li>
                <li className="list-group-item"><strong>Nom:</strong> {profile.name}</li>
                <li className="list-group-item"><strong>Pseudo:</strong> {profile.username}</li>
                <li className="list-group-item"><strong>Email:</strong> {profile.email}</li>
            </ul>
        </div>
    );
}

export default React.memo(profile);