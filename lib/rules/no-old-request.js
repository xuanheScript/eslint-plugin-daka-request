/**
 * @fileoverview 打卡助手的request eslint 插件
 * @author no-old-request
 */
"use strict";

const lodash = require("lodash");

function isShadowed(scope, node) {
    const reference = findReference(scope, node);

    return reference && reference.resolved && reference.resolved.defs.length > 0;
}

function isProhibitedIdentifier(name) {
    return /^(request.get|request.post)$/u.test(name);
}

function findReference(scope, node) {
    const references = scope.references.filter(reference => reference.identifier.range[0] === node.range[0] &&
        reference.identifier.range[1] === node.range[1]);

    if (references.length === 1) {
        return references[0];
    }
    return null;
}
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
            CallExpression(node) {
                const callee = node.callee,
                    currentScope = context.getScope();
                // without window.
                if (callee.type === "MemberExpression") {
                    const objectName = (callee.object || {}).name
                    const propertyName = (callee.property || {}).name

                    if (!isShadowed(currentScope, callee) && isProhibitedIdentifier(`${objectName}.${propertyName}`)) {
                        context.report({
                            node,
                            message: '🤔这是不推荐的api，建议使用request.default'
                        });
                    }
                }
            }
        };
    }
};
