// serve.js
import esbuild from "esbuild";

let context = await esbuild.context({
    entryPoints: ["./src/index.js"],
    outfile: "./public/assets/app.js",
    bundle: true,
    sourcemap: 'inline',
    loader: {
        ".js": "jsx",
    },
    logLevel: "info",
});

await context.watch();

let { host, port } = await context.serve({
    servedir: "public",
});
