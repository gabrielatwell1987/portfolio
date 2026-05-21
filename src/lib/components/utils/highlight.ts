import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/vs2015.min.css';
import { tick } from 'svelte';

hljs.registerLanguage('js', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);
hljs.registerLanguage('xml', html);

export async function sanitizeAndHighlight(rawHtml: string): Promise<string> {
    if (typeof window === 'undefined') return '';

    const { default: DOMPurify } = await import('dompurify');

    // mitigate XSS
    DOMPurify.addHook('uponSanitizeAttribute', (node, data) => {
        if (data?.attrName?.startsWith('on')) {
            data.keepAttr = false;
        }
    });

    const cleanHtml = DOMPurify.sanitize(rawHtml, {
        USE_PROFILES: { html: true },
    });

    await tick();

    const codeBlocks = Array.from(
        document.querySelectorAll('pre code'),
    ) as HTMLElement[];

    for (const element of codeBlocks) {
        const raw = element.textContent ?? element.innerText ?? '';
        element.textContent = raw;
        hljs.highlightElement(element);
    }

    return cleanHtml;
}
