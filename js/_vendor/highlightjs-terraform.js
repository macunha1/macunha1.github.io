/*
 *
 * highlight.js definition adapted from Ruby to leverage a mature implementation
 * that better supports highlighting,
 *
 * * Ref: https://github.com/highlightjs/highlight.js/blob/1fa2a16/src/languages/ruby.js
 * * Ref: https://github.com/highlightjs/highlightjs-terraform
 *
 * Language: HCL (+Terraform .tf)
 * Description: HCL is the HashiCorp configuration language.
 *
 * Website: https://github.com/hashicorp/hcl
 *
 * Author:  Matheus Cunha <dev-null@macunha.me>
 * Since:   <2021-10-16 Sat>
 *
 * Category: common
 */

export default function (hljs) {
  const METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
  const KEYWORDS = {
    keywords:
      'resource variable provider output locals module data terraform' + 'var each dynamic content for_each lifecycle',
    literal: 'true false null',
  };

  const COMMENT_MODES = [hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE, hljs.HASH_COMMENT_MODE];

  const SUBST = {
    className: 'subst',
    begin: '$\\{',
    end: '}',
    keywords: KEYWORDS,
  };

  const STRING = {
    className: 'string',
    contains: [SUBST],
    variants: [
      {begin: /"/, end: /"/},
      {begin: '%[qQwWx]?\\(', end: '\\)'},
      {begin: '%[qQwWx]?\\[', end: '\\]'},
      {begin: '%[qQwWx]?{', end: '}'},
      {begin: '%[qQwWx]?<', end: '>'},
      {begin: '%[qQwWx]?/', end: '/'},
      {begin: '%[qQwWx]?%', end: '%'},
      {begin: '%[qQwWx]?-', end: '-'},
      {begin: '%[qQwWx]?\\|', end: '\\|'},
      {
        // \B in the beginning suppresses recognition of ?-sequences where ?
        // is the last character of a preceding identifier, as in: `func?4`
        begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/,
      },
      {
        // heredocs
        begin: /<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,
        returnBegin: true,
        contains: [
          {begin: /<<[-~]?'?/},
          hljs.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          }),
        ],
      },
    ],
  };

  const PARAMS = {
    className: 'params',
    begin: '\\(',
    end: '\\)',
    endsParent: true,
    keywords: KEYWORDS,
  };

  const DEFAULT_CONTAINS = [
    STRING,
    {
      className: 'class',
      beginKeywords: 'resource module data',
      illegal: /=/,
      contains: COMMENT_MODES,
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
      relevance: 0,
    },
    {
      begin: '(\\$\\W)|(\\w+)', // variables
    },
  ].concat(COMMENT_MODES);

  SUBST.contains = DEFAULT_CONTAINS;
  PARAMS.contains = DEFAULT_CONTAINS;

  return {
    name: 'Terraform',
    aliases: ['tf', 'hcl'],
    keywords: KEYWORDS,
    illegal: /\/\*/,
    contains: DEFAULT_CONTAINS,
  };
}
