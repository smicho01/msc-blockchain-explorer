import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWalletData } from '../api/BlockchainApi';

const WalletPreview = () => {
    const { publicKey } = useParams();
    const [walletData, setWalletData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWalletData(publicKey);
                console.log("Data is: ", data)
                setWalletData(data);
            } catch (err) {
                setError('Error fetching wallet data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [publicKey]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h2>Transactions for Wallet</h2>
                        <p>{publicKey}</p>
                    </div>
                    <div className="card-body">
                        <h4>Token Balance: {walletData.balance}</h4>
                        <p>OUTPUT = add tokens to wallet; INPUT = extract tokens from wallet</p>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Transaction ID</th>
                                <th scope="col">Type</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {walletData.transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <th scope="row">{transaction.id}</th>
                                    <td>{transaction.type}</td>
                                    <td>{transaction.amount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletPreview;
