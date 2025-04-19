import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// キャッシュを無効化
	cacheDir: null,
	build: {
		// ビルド時のキャッシュを削除
		emptyOutDir: true
	}
});
