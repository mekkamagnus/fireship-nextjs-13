(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/app_notes_CreateNote.tsx.js", {

"[project-with-next]/app/notes/CreateNote.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>CreateNote
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$navigation$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/navigation.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
function CreateNote() {
    const [title, setTitle] = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__["useState"]('');
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__["useState"]('');
    const router = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$navigation$2e$js__["useRouter"]();
    const create = async ()=>{
        await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            })
        });
        setContent('');
        setTitle('');
        router.refresh();
    };
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("form", {
        onSubmit: create,
        children: [
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("h3", {
                children: "Create a new Note"
            }, void 0, false, {
                fileName: "<app/notes/CreateNote.tsx>",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("input", {
                type: "text",
                placeholder: "Title",
                value: title,
                onChange: (e)=>setTitle(e.target.value)
            }, void 0, false, {
                fileName: "<app/notes/CreateNote.tsx>",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("textarea", {
                placeholder: "Content",
                value: content,
                onChange: (e)=>setContent(e.target.value)
            }, void 0, false, {
                fileName: "<app/notes/CreateNote.tsx>",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("button", {
                type: "submit",
                children: "Create note"
            }, void 0, false, {
                fileName: "<app/notes/CreateNote.tsx>",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<app/notes/CreateNote.tsx>",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}

})()),
}]);


//# sourceMappingURL=app_notes_CreateNote.tsx.js.map