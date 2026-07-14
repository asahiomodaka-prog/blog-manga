// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/blog/あの夜の衝撃が再びmonster-完全版デジタルで夜更かしの傑作を追体験': '/blog/natsume-arata-no-kekkon-12',
		'/blog/サイボーグ00927あの夜星空の下で夢見たsf未来を語り明かそう': '/blog/to-my-home-manga',
		'/blog/別巻-まんがゼミナール-恐竜ゼミナールで知るなぜ巨大生物は忽然と姿を消したのか': '/blog/to-my-home-manga',
		'/blog/夜更かし必読マンガで世界名作-名探偵シャーロックホームズで名推理の夜を': '/blog/classic-sherlock-holmes-manga',
		'/blog/大人になった今だからこそ齋藤孝のドラえもん読み解きクイズであの名作漫画を夜通し深読みするロマン': '/blog/manga-dinosaur-seminar',
		'/blog/小学館学習まんが世界名作館7なぜあの結末が胸に刻まれ続けるのか読後に残る普遍の問い': '/blog/shogakukan-world-classics-7',
		'/blog/忘れられない夜の熱狂pop-up-parade-スパイクスピーゲルに宿るビバップの魂': '/blog/yattaro-toritsukkun-manga',
		'/blog/歴史漫画タイムワープシリーズで過ぎ去りし熱狂を夜更けに再読するロマン': '/blog/history-manga-timewarp-series',
		'/blog/眠れない夜をblack-jack全17巻で秋田文庫が誘う青春の熱狂ドラマ': '/blog/manga-dinosaur-seminar',
		'/blog/齋藤孝のドラえもん読み解きクイズ2で深まる夜あの頃の秘密道具に隠された日本語の奥深さ': '/blog/manga-seminar-dinosaur',
	},
	site: 'https://yohukashinomeisakudana.ariawriter.com',
	integrations: [mdx(), sitemap()],
	image: {
		domains: [
			'thumbnail.image.rakuten.co.jp',
			'ebook-assets.dmm.com',
			'pics.dmm.co.jp',
			'pics.dmm.com'
		]
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
