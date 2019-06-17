import { python } from "./python.db";
import { c } from "./c.db";
import { objectiveC } from "./objective-c.db";
import { java } from "./java.db";
import { perl } from "./perl.db";
import { php } from "./php.db";
import { ruby } from "./ruby.db";
import { actionscript } from "./actionscript.db";
import { dotnet } from "./dotnet.db";
import { common } from "./common.db";

export const signaturesDb = {
    common,
    languages: [
        {
            languages: [
                'python',
            ],
            signatures: python,
        },
        {
            languages: [
                'c',
                'cpp',
                'csharp',
            ],
            signatures: c,
        },
        {
            languages: [
                'objective-c',
                'objective-cpp',
            ],
            signatures: objectiveC,
        },
        {
            languages: [
                'java',
                'scala',
                'kotlin',
            ],
            signatures: java,
        },
        {
            languages: [
                'perl',
                'perl6',
            ],
            signatures: perl,
        },
        {
            languages: [
                'php',
            ],
            signatures: php,
        },
        {
            languages: [
                'ruby',
            ],
            signatures: ruby,
        },
        {
            languages: [
                'actionscript',
            ],
            signatures: actionscript,
        },
        {
            languages: [
                'vb',
                'csharp',
                'fsharp',
            ],
            signatures: dotnet,
        },
    ]
};
