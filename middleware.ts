import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ja', 'ar', 'fr', 'es', 'de', 'el', 'ru', 'ko', 'zh', 'hu', 'et'], // Added et (Estonian)

    // Used when no locale matches
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|ja|ar|fr|es|de|el|ru|ko|zh|hu|et)/:path*']
};
