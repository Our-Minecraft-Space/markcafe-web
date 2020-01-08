import MarkdownIt from 'markdown-it';
import containerPlugin from 'markdown-it-container'
import juice from 'juice/client';

const template1Start = `<div class="container">`;
const template1End = `</div>`

main();

async function main() {
    const config = await (await fetch('https://markcafe.finalchild.me/markcafe-config.json')).text();
    const md = new MarkdownIt(config.markdownItOptions).use(containerPlugin, 'tip', {
        render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
                return `<div class="tip-header">${config.tipHeaderContent}</div>\n<div class="tip">`;
            } else {
                return `</div>\n`;
            }
        }
    });
    const oldImageRule = md.renderer.rules.image;
    md.renderer.rules.image = (tokens, idx, options, env, slf) => {
        if (tokens[idx].nesting !== 0) return oldImageRule(tokens, idx, options, env, slf);
        let result = oldImageRule(tokens, idx, options, env, slf);
        if (idx === 0) {
            result = `<div class="img-wrapper">` + result;
        }
        if (idx === tokens.length - 1) {
            result = result + `</div>`;
        }
        return result;
    };
    
    document.getElementById('convert-button').addEventListener('click', async event => {
        const css = await (await fetch(`https://markcafe.finalchild.me/default${document.getElementById('is-non-wide').checked ? '-non-wide' : ''}.css`)).text()
        document.getElementById('out').value = renderMdToCafeHtml(md, css, document.getElementById('in').value);
    });
}

function renderMdToCafeHtml(md, css, src) {
    const rendered = md.render(src);
    const templated1 = template1Start + rendered + template1End;
    const juiced = juice.inlineContent(templated1, css, {
        inlinePseudoElements: true,
        preserveFontFaces: false,
        preserveImpotant: false,
        preserveMediaQueries: false,
        preserveKeyFrames: false,
        preservePseudos: false
    });
    return juiced;
}
