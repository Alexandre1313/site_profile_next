export interface tag {
    ot: string
    ct: string
}

const tagsHtml: tag[] = [
    { ot: "html", ct: "/html" },
    { ot: "head", ct: "/head" },
    { ot: "meta", ct: "/" },
    { ot: "link", ct: "/" },
    { ot: "body", ct: "/body" },
    { ot: "div", ct: "/div" },
    { ot: "span", ct: "/span" },
    { ot: "form", ct: "/form" },
    { ot: "input", ct: "/" },
    { ot: "button", ct: "/button" },
    { ot: "table", ct: "/table" },
    { ot: "tbody", ct: "/tbody" },
    { ot: "thead", ct: "/thead" },
    { ot: "tfoot", ct: "/tfoot" },
    { ot: "tr", ct: "/tr" },
    { ot: "th", ct: "/th" },
    { ot: "td", ct: "/td" },
    { ot: "ul", ct: "/ul" },
    { ot: "li", ct: "/li" },
    { ot: "img", ct: "/" },
    { ot: "map", ct: "/map" },
    { ot: "area", ct: "/" },
    { ot: "time", ct: "/time" },
    { ot: "code", ct: "/code" },    
    { ot: "mark", ct: "/mark" },
    { ot: "bdo", ct: "/bdo" },
    { ot: "ins", ct: "/ins" },
    { ot: "del", ct: "/del" },
    { ot: "menu", ct: "/menu" },
    { ot: "slot", ct: "/" },
    { ot: "embed", ct: "/" },
    { ot: "map", ct: "/map" },
    { ot: "area", ct: "/" },
    { ot: "svg", ct: "/svg" },
    { ot: "math", ct: "/math" },
    { ot: "ol", ct: "/ol" },
    { ot: "p", ct: "/p" },
    { ot: "nav", ct: "/nav" },
    { ot: "cite", ct: "/cite" },
    { ot: "main", ct: "/main" },
    { ot: "s", ct: "/s" },
    { ot: "sub", ct: "/sub" },
    { ot: "u", ct: "/u" },
    { ot: "tt", ct: "/tt" },
    { ot: "wbr", ct: "/wbr" },
    { ot: "sup", ct: "/sup" },
    { ot: "style", ct: "/style" },
    { ot: "small", ct: "/small" },
    { ot: "a", ct: "/a" },
    { ot: "aside", ct: "/aside" },
    { ot: "bdi", ct: "/bdi" }
];

const tagRandon = (): tag => {
    return tagsHtml[Math.floor(Math.random() * tagsHtml.length)];
}

export default tagRandon
