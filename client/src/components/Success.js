import React from 'react';

export default function Success({ msg }) {
    return (
        <div>
            <div className="alert alert-success" role="success">
                {msg}
            </div>
        </div>
    );
}
