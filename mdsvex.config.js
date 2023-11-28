// https://mdsvex.com/docs#options
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

// using remark-images makes only sense if we would reference by a complete path
// and not through an import. so '/assets/image.png' will work but '{imgsrc}' not.
// import remarkImages from 'remark-images';

/* 
 * this has been declare in vite.config.ts as I couldn't manage to import it here
 * even if compiling the ts file using module resolution node.
 * I don't have the necessary experience and won't invest the time for now to 
 * access it.
 */

const config = defineConfig({
    extensions: ['.svelte.md', '.md', '.svx'],

    smartypants: {
        quotes: true,
        dashes: 'oldschool',
        ellipses: true
    },

    remarkPlugins: [],
    rehypePlugins: [],

});

export default config;
