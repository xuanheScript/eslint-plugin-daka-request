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


const testCode = `
        request.default({
            apiName: 'login',
        })
        request.defaultRequest.post('index/login', {
            
        })
        request.get('index/login', {
            
        })

        console.log(a, b, c);

`

ruleTester.run("no-old-request", rule, {

    valid: [
        'request.default'
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: testCode,
            errors: [{
                message: "🤔这是不推荐的api，建议使用request.default",
            }]
        }
    ]
});