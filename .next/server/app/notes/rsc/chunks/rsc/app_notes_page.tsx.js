(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/app_notes_page.tsx.js", {

"[project-with-next]/app/notes/page.tsx (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>NotesPage
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$link$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$app$2f$notes$2f$Notes$2e$module$2e$css__ = __turbopack_import__("[project-with-next]/app/notes/Notes.module.css (css module, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
async function getNotes() {
    const results = await fetch('http:127.0.01:8090/api/collections/notes/records?page=1&perPage=30', {
        cache: 'no-store'
    });
    const data = await results.json();
    return data?.items;
}
async function NotesPage() {
    const notes = await getNotes();
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("h1", {
                children: "Notes"
            }, void 0, false, {
                fileName: "<app/notes/page.tsx>",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$app$2f$notes$2f$Notes$2e$module$2e$css__["default"].grid,
                children: notes?.map((note)=>{
                    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"](Note, {
                        note: note
                    }, note.id, false, {
                        fileName: "<app/notes/page.tsx>",
                        lineNumber: 35,
                        columnNumber: 18
                    }, this);
                })
            }, void 0, false, {
                fileName: "<app/notes/page.tsx>",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<app/notes/page.tsx>",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function Note({ note  }) {
    const { id , title , content , created  } = note || {};
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$link$2e$js__["default"], {
        href: `/notes/${id}`,
        children: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
            className: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$app$2f$notes$2f$Notes$2e$module$2e$css__["default"].note,
            children: [
                __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("h2", {
                    children: title
                }, void 0, false, {
                    fileName: "<app/notes/page.tsx>",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("h5", {
                    children: content
                }, void 0, false, {
                    fileName: "<app/notes/page.tsx>",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("p", {
                    children: created
                }, void 0, false, {
                    fileName: "<app/notes/page.tsx>",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<app/notes/page.tsx>",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<app/notes/page.tsx>",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}

})()),
"[project-with-next]/app/notes/Notes.module.css (css module, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "action": "action◽[project-with-next]/app/notes/Notes.module.css",
  "container": "container◽[project-with-next]/app/notes/Notes.module.css",
  "content": "content◽[project-with-next]/app/notes/Notes.module.css",
  "created": "created◽[project-with-next]/app/notes/Notes.module.css",
  "grid": "grid◽[project-with-next]/app/notes/Notes.module.css",
  "note": "note◽[project-with-next]/app/notes/Notes.module.css",
  "pageTitle": "pageTitle◽[project-with-next]/app/notes/Notes.module.css",
  "title": "title◽[project-with-next]/app/notes/Notes.module.css",
});

})()),
}]);


//# sourceMappingURL=app_notes_page.tsx.js.map