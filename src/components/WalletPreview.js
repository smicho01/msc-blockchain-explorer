import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WalletPreview = () => {
    const { publicKey } = useParams();
    const [walletData, setWalletData] = useState(null);

    useEffect(() => {
        // Replace the following line with an actual API call to fetch wallet data
        const fetchWalletData = async () => {
            // Simulated wallet data
            const data = {
                tokenCount: 100,
                transactions: [
                    { id: 1, detail: 'Transaction 1' },
                    { id: 2, detail: 'Transaction 2' },
                    { id: 3, detail: 'Transaction 3' },
                ],
            };
            setWalletData(data);
        };

        fetchWalletData();
    }, [publicKey]);

    if (!walletData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <h2>Wallet Public Key: {publicKey}</h2>
                    </div>
                    <div className="card-body">
                        <h4>Number of Tokens: {walletData.tokenCount}</h4>
                        <h4>Transactions:</h4>
                        <ul className="list-group">
                            {walletData.transactions.map((transaction) => (
                                <li key={transaction.id} className="list-group-item">
                                    {transaction.detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletPreview;
