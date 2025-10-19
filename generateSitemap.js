import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';

const hostname = 'https://elevatorsworld-eg.com/';
const pages = ['', 'about', 'services', 'contact']; // عدل حسب صفحاتك

const links = pages.map((page) => ({
    url: `/${page}`,
    changefreq: 'weekly',
    priority: page === '' ? 1.0 : 0.8,
}));

const stream = new SitemapStream({ hostname });
const sitemapPath = path.resolve('public', 'sitemap.xml');
const writeStream = fs.createWriteStream(sitemapPath);

// كتابة البيانات في الستريم
links.forEach((link) => stream.write(link));
stream.end();

// حفظ الـ Sitemap
streamToPromise(stream)
    .then(() => {
        console.log('✅ Sitemap created successfully!');
    })
    .catch((err) => {
        console.error('❌ Error creating sitemap:', err);
    });

stream.pipe(writeStream);
