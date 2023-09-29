import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "ShadCdn",
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ["react"],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					react: "/npm/react@18.2.0/+esm",
				},
			},
		},
	},
});
