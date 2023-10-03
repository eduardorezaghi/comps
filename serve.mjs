// serve.js
import esbuild from "esbuild";

let context = await esbuild.context({
    entryPoints: ["./src/index.js", "./src/index.css"],
    outdir: "public",
    bundle: true,
    sourcemap: 'inline',
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json"],
    loader: {
        ".js": "jsx",
    },
    logLevel: "info",
});

await context.watch();

let { host, port } = await context.serve({
    servedir: "public",
});
