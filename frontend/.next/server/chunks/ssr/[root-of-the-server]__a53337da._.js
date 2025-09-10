module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[project]/frontend/src/lib/config.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/lib/config.ts
__turbopack_context__.s({
    "getStellarConfig": ()=>getStellarConfig
});
const getStellarConfig = ()=>{
    return {
        TESTNET_URL: ("TURBOPACK compile-time value", "https://soroban-testnet.stellar.org") || 'https://soroban-testnet.stellar.org',
        NETWORK_PASSPHRASE: ("TURBOPACK compile-time value", "Test SDF Network ; September 2015") || 'Test SDF Network ; September 2015',
        READONLY_PUBLIC_KEY: ("TURBOPACK compile-time value", "GCW225D7H6JQBEM7XVKE2AX7KGPVI3FPU3SS6A2MQMZTXNY6KDGZNSEX") || '',
        REFLECTOR_CONTRACTS: {
            USDC: ("TURBOPACK compile-time value", "CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP") || 'CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP',
            FX: ("TURBOPACK compile-time value", "CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W") || 'CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W',
            CEX: ("TURBOPACK compile-time value", "CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63") || 'CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63'
        }
    };
};
}),
"[project]/frontend/src/lib/stellar.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "StellarService": ()=>StellarService,
    "stellarService": ()=>stellarService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/config.ts [app-ssr] (ecmascript)");
;
;
// Stellar testnet configuration
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStellarConfig"])();
const STELLAR_TESTNET_URL = config.TESTNET_URL;
const NETWORK_PASSPHRASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Networks"].TESTNET;
// Asset for reputation tokens (custom asset)
// TEMPORARILY DISABLED: Using a valid testnet issuer that exists and has funds
// TODO: Re-enable when we have a valid issuer
// const REPUTATION_ASSET = new Asset(
//   config.REPUTATION_TOKEN.CODE, 
//   config.REPUTATION_TOKEN.ISSUER
// );
// Temporary mock asset to prevent crashes
const REPUTATION_ASSET = null;
class StellarService {
    server;
    publicKey = null;
    constructor(){
        try {
            this.server = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rpc"].Server(("TURBOPACK compile-time value", "https://soroban-testnet.stellar.org") || 'https://soroban-testnet.stellar.org', {
                allowHttp: true
            });
        } catch (error) {
            console.error('Error initializing Stellar server:', error);
            // Create a mock server to prevent crashes
            this.server = {};
        }
    }
    // Connect to Freighter wallet
    async connectWallet() {
        try {
            console.log('🔌 StellarService: Checking for Freighter...');
            // Check if Freighter is installed
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                console.log('❌ StellarService: Freighter not found');
                throw new Error('Freighter wallet not found. Please install Freighter extension.');
            }
        } catch (error) {
            console.error('❌ StellarService: Error connecting to wallet:', error);
            throw error;
        }
    }
    // Get account balance
    async getBalance(publicKey) {
        try {
            // Check if server is properly initialized
            if (!this.server || !this.server.loadAccount) {
                console.warn('Stellar server not properly initialized, returning mock balance');
                return [
                    {
                        asset_type: 'native',
                        balance: '1000.0000000'
                    }
                ];
            }
            const account = await this.server.loadAccount(publicKey);
            return account.balances;
        } catch (error) {
            console.error('Error getting balance:', error);
            // Return mock balance instead of throwing error
            return [
                {
                    asset_type: 'native',
                    balance: '1000.0000000'
                }
            ];
        }
    }
    // Create symbolic staking transaction
    async createStakingTransaction(amount, projectId) {
        if (!this.publicKey) {
            throw new Error('Wallet not connected');
        }
        try {
            // Check if server is properly initialized
            if (!this.server || !this.server.loadAccount) {
                throw new Error('Stellar server not properly initialized');
            }
            const account = await this.server.loadAccount(this.publicKey);
            // Create a memo with project information
            const memo = `STAKING:${projectId}:${Date.now()}`;
            // Create transaction for symbolic staking (using XLM)
            const transaction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionBuilder"](account, {
                fee: '100',
                networkPassphrase: NETWORK_PASSPHRASE
            }).addOperation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Operation"].payment({
                destination: this.publicKey,
                asset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Asset"].native(),
                amount: amount.toString()
            })).addMemo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Memo"].text(memo)).setTimeout(30).build();
            return transaction.toXDR();
        } catch (error) {
            console.error('Error creating staking transaction:', error);
            throw error;
        }
    }
    // Issue reputation token
    async issueReputationToken(amount, recipient) {
        if (!this.publicKey) {
            throw new Error('Wallet not connected');
        }
        // TEMPORARILY DISABLED: Reputation asset is not available
        if ("TURBOPACK compile-time truthy", 1) {
            throw new Error('Reputation tokens are temporarily disabled');
        }
        try {
            const account = await this.server.loadAccount(this.publicKey);
            const transaction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionBuilder"](account, {
                fee: '100',
                networkPassphrase: NETWORK_PASSPHRASE
            }).addOperation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Operation"].payment({
                destination: recipient,
                asset: REPUTATION_ASSET,
                amount: amount.toString()
            })).setTimeout(30).build();
            return transaction.toXDR();
        } catch (error) {
            console.error('Error issuing reputation token:', error);
            throw error;
        }
    }
    // Sign and submit transaction
    async signAndSubmitTransaction(transactionXDR) {
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                throw new Error('Freighter wallet not available');
            }
        } catch (error) {
            console.error('Error signing/submitting transaction:', error);
            throw error;
        }
    }
    // Get transaction history
    async getTransactionHistory(publicKey) {
        try {
            const transactions = await this.server.transactions().forAccount(publicKey).order('desc').limit(20).call();
            return transactions.records;
        } catch (error) {
            console.error('Error getting transaction history:', error);
            throw error;
        }
    }
}
const stellarService = new StellarService();
}),
"[project]/frontend/src/lib/friendbot.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/lib/friendbot.ts
// Friendbot utility for testnet account funding
__turbopack_context__.s({
    "ensureFunded": ()=>ensureFunded
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/index.js [app-ssr] (ecmascript)");
;
const RPC = ("TURBOPACK compile-time value", "https://soroban-testnet.stellar.org") || 'https://soroban-testnet.stellar.org';
const server = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rpc"].Server(RPC, {
    allowHttp: true
});
async function ensureFunded(publicKey) {
    try {
        // Try to get account - if it exists, we're good
        await server.getAccount(publicKey);
        console.log('✅ Account exists and is funded');
        return true;
    } catch (error) {
        console.log('⚠️ Account not found, requesting airdrop from Friendbot...');
        try {
            // Request airdrop from Friendbot (testnet only)
            await server.requestAirdrop(publicKey);
            console.log('✅ Airdrop successful');
            return true;
        } catch (airdropError) {
            console.error('❌ Airdrop failed:', airdropError);
            return false;
        }
    }
}
}),
"[project]/frontend/src/hooks/useWallet.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useWallet": ()=>useWallet
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/stellar.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$friendbot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/friendbot.ts [app-ssr] (ecmascript)");
;
;
;
const useWallet = ()=>{
    const [walletState, setWalletState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isConnected: false,
        publicKey: null,
        balance: null,
        isLoading: false,
        error: null
    });
    // Check if Freighter is installed
    const isFreighterInstalled = ()=>{
        const hasFreighter = "undefined" !== 'undefined' && window.stellar;
        console.log('🔍 Checking Freighter installation:', hasFreighter);
        return hasFreighter;
    };
    // Connect to wallet
    const connectWallet = async ()=>{
        console.log('🔌 Starting wallet connection...');
        setWalletState((prev)=>({
                ...prev,
                isLoading: true,
                error: null
            }));
        try {
            if (!isFreighterInstalled()) {
                console.log('❌ Freighter not installed');
                // Show alert and redirect to Freighter installation
                alert("Necesitas instalar la wallet Freighter para usar esta función. Te redirigiremos a la página oficial.");
                window.open("https://freighter.app/", "_blank");
                throw new Error('Freighter wallet not found. Please install the Freighter extension.');
            }
            console.log('✅ Freighter found, requesting account...');
            const publicKey = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].connectWallet();
            console.log('✅ Account received:', publicKey);
            // Ensure account is funded (testnet only)
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$friendbot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureFunded"])(publicKey);
            const balance = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].getBalance(publicKey);
            console.log('✅ Balance retrieved:', balance);
            setWalletState({
                isConnected: true,
                publicKey,
                balance,
                isLoading: false,
                error: null
            });
            // Store in localStorage for persistence
            localStorage.setItem('ahorrostellar_wallet', publicKey);
            console.log('💾 Wallet saved to localStorage');
            return publicKey;
        } catch (error) {
            console.error('❌ Wallet connection error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Failed to connect wallet';
            setWalletState((prev)=>({
                    ...prev,
                    isLoading: false,
                    error: errorMessage
                }));
            throw error;
        }
    };
    // Disconnect wallet
    const disconnectWallet = ()=>{
        setWalletState({
            isConnected: false,
            publicKey: null,
            balance: null,
            isLoading: false,
            error: null
        });
        localStorage.removeItem('ahorrostellar_wallet');
    };
    // Create staking transaction
    const createStaking = async (amount, projectId)=>{
        if (!walletState.isConnected) {
            throw new Error('Wallet not connected');
        }
        setWalletState((prev)=>({
                ...prev,
                isLoading: true,
                error: null
            }));
        try {
            const transactionXDR = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].createStakingTransaction(amount, projectId);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].signAndSubmitTransaction(transactionXDR);
            // Update balance after transaction
            if (walletState.publicKey) {
                const newBalance = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].getBalance(walletState.publicKey);
                setWalletState((prev)=>({
                        ...prev,
                        balance: newBalance,
                        isLoading: false
                    }));
            }
            return result;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to create staking transaction';
            setWalletState((prev)=>({
                    ...prev,
                    isLoading: false,
                    error: errorMessage
                }));
            throw error;
        }
    };
    // Issue reputation token
    const issueReputation = async (amount, recipient)=>{
        if (!walletState.isConnected) {
            throw new Error('Wallet not connected');
        }
        setWalletState((prev)=>({
                ...prev,
                isLoading: true,
                error: null
            }));
        try {
            const transactionXDR = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].issueReputationToken(amount, recipient);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].signAndSubmitTransaction(transactionXDR);
            return result;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to issue reputation token';
            setWalletState((prev)=>({
                    ...prev,
                    isLoading: false,
                    error: errorMessage
                }));
            throw error;
        }
    };
    // Get transaction history
    const getTransactionHistory = async ()=>{
        if (!walletState.publicKey) {
            return [];
        }
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].getTransactionHistory(walletState.publicKey);
        } catch (error) {
            console.error('Error getting transaction history:', error);
            return [];
        }
    };
    // Auto-connect on mount if wallet was previously connected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const autoConnect = async ()=>{
            // Small delay to ensure everything is initialized
            await new Promise((resolve)=>setTimeout(resolve, 100));
            console.log('🔍 Checking for saved wallet...');
            const savedWallet = localStorage.getItem('ahorrostellar_wallet');
            console.log('📦 Saved wallet:', savedWallet);
            if (savedWallet && isFreighterInstalled()) //TURBOPACK unreachable
            ;
            else {
                console.log('❌ No saved wallet or Freighter not installed');
            }
        };
        autoConnect();
    }, []); // connectWallet is stable, so this is safe
    return {
        ...walletState,
        connectWallet,
        disconnectWallet,
        createStaking,
        issueReputation,
        getTransactionHistory,
        isFreighterInstalled
    };
};
}),
"[project]/frontend/src/lib/mockData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Mock data for the MVP
// TODO: Replace with real backend data
__turbopack_context__.s({
    "mockActivity": ()=>mockActivity,
    "mockProjects": ()=>mockProjects,
    "mockStakes": ()=>mockStakes,
    "mockUserStats": ()=>mockUserStats,
    "projectCategories": ()=>projectCategories,
    "projectStatuses": ()=>projectStatuses
});
const mockProjects = [
    {
        id: 1,
        title: "Web3 Certifications for University Students",
        description: "Certification platform recognized by companies, with hands-on courses in Solidity, DeFi, and Smart Contracts.",
        category: "Technology",
        creator: "Dr. Garcia",
        totalStaked: 2500,
        myStake: 200,
        backers: 45,
        stakers: 45,
        daysLeft: 15,
        image: "blockchain",
        status: "active",
        goal: 5000,
        progress: 50,
        bonusPercent: 8
    },
    {
        id: 2,
        title: "Web3 Fintech Startup Hub (Blockchain R&D)",
        description: "Blockchain-first innovation hub connecting students with startups to build DeFi rails, on-chain payments, and tokenized experiments.",
        category: "Social",
        creator: "Maria Lopez",
        totalStaked: 1800,
        myStake: 150,
        backers: 32,
        stakers: 32,
        daysLeft: 8,
        image: "community",
        status: "active",
        goal: 3000,
        progress: 60,
        bonusPercent: 6
    },
    {
        id: 3,
        title: "Web3 Advanced Blockchain Mentorship",
        description: "Specialized mentorship program where industry experts guide students in real DeFi and NFT projects.",
        category: "Education",
        creator: "Carlos Ruiz",
        totalStaked: 3200,
        myStake: 0,
        backers: 67,
        stakers: 67,
        daysLeft: 22,
        image: "tutoring",
        status: "active",
        goal: 4000,
        progress: 80,
        bonusPercent: 11
    },
    {
        id: 4,
        title: "Web3 Green Campus: Renewable Energy On-chain",
        description: "Renewable energy deployments with on-chain metering, transparent reporting, and tokenized incentives for sustainability.",
        category: "Environment",
        creator: "Ana Martinez",
        totalStaked: 1200,
        myStake: 100,
        backers: 28,
        stakers: 28,
        daysLeft: 5,
        image: "sustainability",
        status: "ending",
        goal: 2000,
        progress: 60,
        bonusPercent: 5
    },
    {
        id: 5,
        title: "Web3 AI & Blockchain Lab (DeAI)",
        description: "Research lab exploring decentralized AI, verifiable data pipelines, and on-chain automation with real dApps.",
        category: "Technology",
        creator: "Prof. Rodriguez",
        totalStaked: 4500,
        myStake: 300,
        backers: 89,
        stakers: 89,
        daysLeft: 30,
        image: "ai-lab",
        status: "active",
        goal: 6000,
        progress: 75,
        bonusPercent: 9
    },
    {
        id: 6,
        title: "Web3 Digital Library (On-chain IP)",
        description: "Decentralized library with on-chain provenance, open licensing, and contributor rewards via smart contracts.",
        category: "Education",
        creator: "Central Library",
        totalStaked: 2800,
        myStake: 0,
        backers: 156,
        stakers: 156,
        daysLeft: 12,
        image: "digital-library",
        status: "active",
        goal: 3500,
        progress: 80,
        bonusPercent: 7
    }
];
const mockUserStats = {
    totalBalance: 1250,
    activeStakes: 450,
    reputation: 85,
    totalProjects: 4,
    totalRewards: 150,
    rank: 15
};
const mockStakes = [
    {
        id: 1,
        projectId: 1,
        projectTitle: "Blockchain Project",
        amount: 200,
        date: "2025-08-05",
        status: "active"
    },
    {
        id: 2,
        projectId: 2,
        projectTitle: "Student Community",
        amount: 150,
        date: "2025-08-03",
        status: "active"
    },
    {
        id: 3,
        projectId: 4,
        projectTitle: "Campus Sustainability",
        amount: 100,
        date: "2025-08-01",
        status: "active"
    },
    {
        id: 4,
        projectId: 5,
        projectTitle: "AI Laboratory",
        amount: 300,
        date: "2025-07-28",
        status: "active"
    }
];
const mockActivity = [
    {
        id: 1,
        type: "stake",
        title: "Stake in Blockchain Project",
        description: "You staked $200 in the Blockchain project",
        date: "2025-08-05",
        amount: 200
    },
    {
        id: 2,
        type: "reward",
        title: "Reward earned",
        description: "You earned $25 for your participation in Student Community",
        date: "2025-08-04",
        amount: 25
    },
    {
        id: 3,
        type: "reputation_gained",
        title: "Reputation increased",
        description: "Your reputation increased to 85 points",
        date: "2025-08-03"
    },
    {
        id: 4,
        type: "stake",
        title: "Stake in Campus Sustainability",
        description: "You staked $100 in the Sustainability project",
        date: "2025-08-01",
        amount: 100
    }
];
const projectCategories = [
    "Technology",
    "Education",
    "Social",
    "Environment",
    "Health",
    "Arts",
    "Sports"
];
const projectStatuses = {
    active: "Active",
    completed: "Completed",
    ending: "Ending"
};
}),
"[project]/frontend/src/contexts/AppContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AppProvider": ()=>AppProvider,
    "useApp": ()=>useApp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useWallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/useWallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/stellar.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/mockData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Mock Data
const mockUser = {
    id: '1',
    name: 'Kaream Badillo',
    email: 'kaream@university.edu',
    avatar: 'KB',
    university: 'Universidad Nacional',
    reputation: 85,
    reputationLevel: 'Bronze',
    totalBalance: 1250,
    activeStakes: 450,
    totalProjects: 4,
    totalRewards: 150,
    memberSince: '2025-01-15'
};
;
const realProjects = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProjects"].map((project)=>({
        id: project.id.toString(),
        title: project.title,
        description: project.description,
        category: project.category,
        creator: project.creator,
        totalStaked: project.totalStaked,
        targetAmount: project.goal,
        progress: project.progress,
        stakers: project.stakers,
        daysLeft: project.daysLeft,
        status: project.status === 'ending' ? 'active' : project.status,
        myStake: project.myStake,
        image: project.image,
        tags: [
            project.category.toLowerCase()
        ],
        bonusPercent: project.bonusPercent
    }));
const mockActivities = [
    {
        id: '1',
        type: 'stake',
        title: 'Nuevo stake realizado',
        description: 'Stakeaste $500 en "Blockchain Education Platform"',
        amount: 500,
        date: '2025-01-15T10:30:00Z',
        projectId: '1'
    },
    {
        id: '2',
        type: 'reputation_gained',
        title: 'Reputación aumentada',
        description: 'Ganaste 50 puntos de reputación por tu participación',
        amount: 50,
        date: '2025-01-14T15:45:00Z'
    },
    {
        id: '3',
        type: 'reward',
        title: 'Recompensa recibida',
        description: 'Recibiste $25 por tu participación en "Fintech Startup Hub"',
        amount: 25,
        date: '2025-01-13T09:20:00Z',
        projectId: '2'
    },
    {
        id: '4',
        type: 'project_completed',
        title: 'Proyecto completado',
        description: 'El proyecto "Blockchain Education" alcanzó su meta',
        date: '2025-01-10T14:15:00Z',
        projectId: '1'
    }
];
// Create Context
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AppProvider({ children }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        user: mockUser,
        wallet: {
            isConnected: false,
            publicKey: null,
            balance: null,
            isLoading: false,
            error: null
        },
        projects: realProjects,
        myStakedProjects: realProjects.filter((p)=>p.myStake > 0),
        activities: mockActivities,
        notifications: 3,
        isLoading: false,
        currentPage: '/'
    });
    // Use the useWallet hook to get real wallet state
    const walletHook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useWallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    // Sync wallet state from useWallet hook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('🔄 AppContext: Syncing wallet state from useWallet hook');
        console.log('📊 useWallet state:', {
            isConnected: walletHook.isConnected,
            publicKey: walletHook.publicKey,
            balance: walletHook.balance,
            isLoading: walletHook.isLoading,
            error: walletHook.error
        });
        setState((prev)=>({
                ...prev,
                wallet: {
                    isConnected: walletHook.isConnected,
                    publicKey: walletHook.publicKey,
                    balance: walletHook.balance,
                    isLoading: walletHook.isLoading,
                    error: walletHook.error
                }
            }));
    }, [
        walletHook.isConnected,
        walletHook.publicKey,
        walletHook.balance,
        walletHook.isLoading,
        walletHook.error
    ]);
    // Connect Wallet
    const connectWallet = async ()=>{
        // En modo demo o producción sin variables de entorno, simular conexión exitosa sin llamar a Freighter
        if ("TURBOPACK compile-time truthy", 1) {
            console.log('Demo mode: Simulating successful wallet connection');
            setState((prev)=>({
                    ...prev,
                    wallet: {
                        isConnected: true,
                        publicKey: "GDEMO1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                        balance: {
                            USDC: 1000,
                            XLM: 500
                        },
                        isLoading: false,
                        error: null
                    }
                }));
            return;
        }
        //TURBOPACK unreachable
        ;
    };
    // Disconnect Wallet
    const disconnectWallet = ()=>{
        walletHook.disconnectWallet();
    };
    // Make Stake
    const makeStake = async (projectId, amount)=>{
        // En modo demo, no requerir wallet conectada
        if (!state.wallet.isConnected && !state.wallet.publicKey) {
            console.log('Demo mode: Simulating stake without wallet connection');
        }
        setState((prev)=>({
                ...prev,
                isLoading: true
            }));
        try {
            // Create blockchain transaction with error handling
            let transactionResult = null;
            try {
                const transactionXDR = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].createStakingTransaction(amount, projectId);
                transactionResult = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stellarService"].signAndSubmitTransaction(transactionXDR);
            } catch (stellarError) {
                console.error('Stellar transaction error:', stellarError);
                // Continue with mock transaction for UI purposes
                transactionResult = {
                    hash: `mock_${Date.now()}`
                };
            }
            // Update project statistics
            const updatedProjects = state.projects.map((project)=>project.id === projectId ? {
                    ...project,
                    totalStaked: project.totalStaked + amount,
                    progress: Math.min(100, (project.totalStaked + amount) / project.targetAmount * 100),
                    stakers: project.stakers + 1,
                    myStake: project.myStake + amount
                } : project);
            // Update user balance (solo si hay usuario)
            const updatedUser = state.user ? {
                ...state.user,
                totalBalance: Math.max(0, state.user.totalBalance - amount),
                activeStakes: state.user.activeStakes + amount,
                totalProjects: state.user.totalProjects + 1
            } : null;
            setState((prev)=>({
                    ...prev,
                    projects: updatedProjects,
                    myStakedProjects: updatedProjects.filter((p)=>p.myStake > 0),
                    user: updatedUser,
                    isLoading: false
                }));
            // Add activity
            const project = state.projects.find((p)=>p.id === projectId);
            addActivity({
                type: 'stake',
                title: 'Nuevo stake realizado',
                description: `Stakeaste $${amount.toFixed(2)} en "${project?.title}"`,
                amount,
                projectId
            });
            console.log(`✅ Stake simulado: $${amount.toFixed(2)} para proyecto ${projectId}`);
        } catch (error) {
            console.error('Staking error:', error);
            setState((prev)=>({
                    ...prev,
                    isLoading: false
                }));
            // Don't throw error, just log it
            console.warn('Staking failed but UI continues:', error);
        }
    };
    // Update User Profile
    const updateUserProfile = (updates)=>{
        if (state.user) {
            setState((prev)=>({
                    ...prev,
                    user: {
                        ...prev.user,
                        ...updates
                    }
                }));
        }
    };
    // Add Activity
    const addActivity = (activity)=>{
        const newActivity = {
            ...activity,
            id: Date.now().toString(),
            date: new Date().toISOString()
        };
        setState((prev)=>({
                ...prev,
                activities: [
                    newActivity,
                    ...prev.activities
                ],
                notifications: prev.notifications + 1
            }));
    };
    // Set Current Page
    const setCurrentPage = (page)=>{
        setState((prev)=>({
                ...prev,
                currentPage: page
            }));
    };
    // Clear Notifications
    const clearNotifications = ()=>{
        setState((prev)=>({
                ...prev,
                notifications: 0
            }));
    };
    const value = {
        state,
        connectWallet,
        disconnectWallet,
        makeStake,
        updateUserProfile,
        addActivity,
        setCurrentPage,
        clearNotifications
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/contexts/AppContext.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
function useApp() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}
}),
"[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/frontend/src/components/ui/Button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, variant = 'primary', size = 'md', children, ...props }, ref)=>{
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stellarBlue';
    const variants = {
        primary: 'btn-stellar',
        secondary: 'bg-stellarPurple hover:bg-purple-600 text-white shadow-lg hover:shadow-xl',
        outline: 'border-2 border-stellarBlue text-stellarBlue hover:bg-stellarBlue hover:text-white shadow-md hover:shadow-lg',
        ghost: 'text-gray-600 hover:text-stellarBlue hover:bg-stellar-50'
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(baseClasses, variants[variant], sizes[size], className),
        ref: ref,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/ui/Button.tsx",
        lineNumber: 28,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
}),
"[project]/frontend/src/components/ui/ErrorBoundary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ErrorBoundary": ()=>ErrorBoundary
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-stellar-50 to-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-10 h-10 text-red-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Algo salió mal"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6 max-w-md",
                            children: "Ha ocurrido un error inesperado. Por favor, recarga la página o contacta al soporte si el problema persiste."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>window.location.reload(),
                                    variant: "primary",
                                    children: "Recargar página"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>this.setState({
                                            hasError: false
                                        }),
                                    variant: "outline",
                                    children: "Intentar de nuevo"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        ("TURBOPACK compile-time value", "development") === 'development' && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "mt-6 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "cursor-pointer text-sm text-gray-500",
                                    children: "Detalles del error (solo desarrollo)"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto",
                                    children: this.state.error.toString()
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/ErrorBoundary.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a53337da._.js.map