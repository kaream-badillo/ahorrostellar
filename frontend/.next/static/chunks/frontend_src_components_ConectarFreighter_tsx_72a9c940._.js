(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/frontend/src/components/ConectarFreighter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "conectarFreighter": ()=>conectarFreighter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/freighter-api/build/index.min.js [app-client] (ecmascript)");
'use client';
;
async function conectarFreighter() {
    try {
        console.log('🔍 Checking Freighter connection...');
        // Check if Freighter is connected
        const c = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isConnected();
        console.log('Connection status:', c);
        if (!c.isConnected) {
            throw new Error('Freighter no detectada');
        }
        // Request permission
        const p = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setAllowed();
        console.log('Permission status:', p);
        if (!p.isAllowed) {
            throw new Error('Permiso denegado');
        }
        // Try to get address directly
        const a1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAddress();
        console.log('Get address result:', a1);
        if (a1.address) {
            console.log('✅ Address received:', a1.address);
            return a1.address;
        }
        // If no address, request access
        const a2 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].requestAccess();
        console.log('Request access result:', a2);
        if (a2.error || !a2.address) {
            throw new Error(a2.error || 'Sin address');
        }
        console.log('✅ Address received via requestAccess:', a2.address);
        return a2.address;
    } catch (error) {
        console.error('❌ Error connecting to Freighter:', error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=frontend_src_components_ConectarFreighter_tsx_72a9c940._.js.map