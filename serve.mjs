// serve.js
import esbuild from "esbuild";

let context = await esbuild.context({
    entryPoints: ["./src/index.js", "./src/index.css"],
    outdir: "public",
    bundle: true,
    sourcemap: 'inline',
    loader: {
        ".js": "jsx",
    },
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json"],
    jsx: 'automatic',
    logLevel: "info",
});

await context.watch();

let { host, port } = await context.serve({
    servedir: "public",
});
