/**
 * @fileoverview 打卡助手的request eslint 插件
 * @author no-old-request
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-old-request"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-old-request", rule, {

    valid: [
        'request.default'
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "request.get",
            errors: [{
                message: "这是即将废弃的api，建议使用request.default",
            }]
        }
    ]
});
