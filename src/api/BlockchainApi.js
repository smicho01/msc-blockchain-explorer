import axios from 'axios';

const API_KEY = 'api-key';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const blockchainApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getWalletData = async (publicKey) => {
    try {
        const requestBalanceUrl = `/wallet/balance/${publicKey}`
        const walletTransactionsUrl = `/wallet/transactions/${publicKey}`

        const walletBalanceResponse = await blockchainApi.get(requestBalanceUrl);
        const balance = walletBalanceResponse.data['balance']
        //console.log(balance)

        const walletTransactionsResponse = await blockchainApi.get(walletTransactionsUrl);
        const transactions = walletTransactionsResponse.data
        //console.log(transactions)


        return {balance: balance, transactions: transactions}
    } catch (error) {
        console.error('Error fetching wallet data:', error);
        throw error;
    }
};

export default blockchainApi;
