import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WalletSearch = () => {
    const [publicKey, setPublicKey] = useState('04d47a999f3b05db0cbc5f29a130f046d52e1a3d6b81de31069ee19bb4cbd33563ec4ea9062a87e1a4a6c3e411a77658cf531ed13e890c531d5dec56587bbad03f');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/wallet/${publicKey}`);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h1 className="text-center">Wallet Search</h1>
                <form onSubmit={handleSubmit} method="GET">
                    <div className="input-group mt-4">
                        <input
                            type="text"
                            className="form-control"
                            value={publicKey}
                            onChange={(e) => setPublicKey(e.target.value)}
                            placeholder="Enter Wallet Public Key"
                            required
                            name="walletAddress"
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
