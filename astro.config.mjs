// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/blog/manga-tv-anime-dvd': '/blog/neon-genesis-evangelion-tv-dvdbox',
		'/blog/あの夜の衝撃が再びmonster-完全版デジタルで夜更かしの傑作を追体験': '/blog/monster-kanzenban-18',
		'/blog/別巻-まんがゼミナール-恐竜ゼミナールで知るなぜ巨大生物は忽然と姿を消したのか': '/blog/manga-dinosaur-seminar',
		'/blog/夜更かし必読マンガで世界名作-名探偵シャーロックホームズで名推理の夜を': '/blog/classic-sherlock-holmes-manga',
		'/blog/小学館学習まんが世界名作館7なぜあの結末が胸に刻まれ続けるのか読後に残る普遍の問い': '/blog/shogakukan-world-classics-7',
		'/blog/歴史漫画タイムワープシリーズで過ぎ去りし熱狂を夜更けに再読するロマン': '/blog/history-manga-timewarp-series',
		'/blog/眠れない夜をblack-jack全17巻で秋田文庫が誘う青春の熱狂ドラマ': '/blog/black-jack-akita-bunko',
		'/blog/anime-drawing-tsuchiya-anne': '/blog/cowboy-bebop-pop-up-parade-spike',
		'/blog/yosuga-no-sora-kasugano-sora-manga': '/blog/beatless-kouka-figure-review',
		'/blog/cecile-no-joou-manga': '/blog/keikoku-no-karma-manga',
		'/blog/expelled-reincarnated-heavy-knight-manga': '/blog/hunter-hunter-monochrome-manga',
		'/blog/hunterhunter-モノクロ版の残酷な真実なぜ読むほど沼にハマり考察が止まらないのか': '/blog/reincarnated-heavy-knight-game-knowledge',
		'/blog/neon-genesis-evangelion-tv-broadcast-dvd-box': '/blog/kingdom-anime-dvdbox-kokuyoukyou',
		'/blog/yattaro-toritsukkun-manga': '/blog/yattaro-toritsukkun-model-kit',
		'/blog/yatterman-fan-book-manga': '/blog/teyandee-yattaro-figure-review',
		'/blog/カウボーイビバップ-pop-up-parade-スパイクが語る過去彼のbangに何を思う': '/blog/teyandee-yattaro-gimmick-review',
		'/blog/getbackers-manga-series': '/blog/shoujouhime-dark-fantasy-manga',
		'/blog/high-teen-boogie-plus-one-manga': '/blog/shoujouhime-saiyuuki-manga',
		'/blog/printania-nippon-manga': '/blog/bad-ending-avoidance-yande-manga',
		'/blog/beatless-紅霞が問う人間とaiの境界彼女の心は本物か読後深く悩む一冊': '/blog/beatless-original-soundtrack',
		'/blog/猩猩姫の業に潜む真実なぜ彼女はあそこまで追い詰められたのか': '/blog/shoujouhime-ippatu-manga',
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
