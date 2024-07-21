import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WalletSearch = () => {
    const [publicKey, setPublicKey] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/wallet/${publicKey}`);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h1 className="text-center">Wallet Search</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mt-4">
                        <input
                            type="text"
                            className="form-control"
                            value={publicKey}
                            onChange={(e) => setPublicKey(e.target.value)}
                            placeholder="Enter Wallet Public Key"
                            required
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WalletSearch;
