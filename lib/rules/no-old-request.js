/**
 * @fileoverview 打卡助手的request eslint 插件
 * @author no-old-request
 */
"use strict";

const lodash = require("lodash");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "打卡助手的request eslint 插件",
            category: "Stylistic Issues",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {



        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            Program: function checkBadEOF(node) {
                const sourceCode = context.getSourceCode(),
                    src = sourceCode.getText(),
                    location = {
                        column: lodash.last(sourceCode.lines).length,
                        line: sourceCode.lines.length
                    },
                    LF = "request.get",
                    // CRLF = `\r${LF}`,
                    endsWithNewline = src.includes(LF);
                if (!src.length) {
                    return;
                }
                if (endsWithNewline) {

                    // File is not newline-terminated, but should be
                    context.report({
                        node,
                        loc: location,
                        message: "这是即将废弃的api，建议使用request.default",
                    });
                }
            }
            // give me methods

        };
    }
};
