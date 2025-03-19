/**
 * Stylistic ESLint Rules
 * @see {@link https://eslint.style/rules}
 */
module.exports = {
    /**
     * 배열 대괄호를 열고 닫기 전에 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/array-bracket-newline}
     */
    '@stylistic/array-bracket-newline': [
        2,
        {
            /** 요소 안 또는 사이에 줄 바꿈이 있는 경우 줄 바꿈 필요 여부 */
            multiline: true,

            /** 요소 수가 해당 정수 이상인 경우 줄 바꿈 필요 */
            minItems: 3,
        },
    ],

    /**
     * 배열 대괄호 안에 공백이 없는지 확인
     * @see {@link https://eslint.style/rules/default/array-bracket-spacing}
     */
    '@stylistic/array-bracket-spacing': 2,

    /**
     * 각 배열 요소 뒤에 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/array-element-newline}
     */
    '@stylistic/array-element-newline': [
        2,
        {
            /** 요소 안에 줄 바꿈이 있는 경우 줄 바꿈 필요 여부 */
            multiline: true,

            /** 요소 수가 해당 정수 이상인 경우 줄 바꿈 필요 */
            minItems: 3,
        },
    ],

    /**
     * 화살표 함수 인수 주위에 괄호 필요
     * @see {@link https://eslint.style/rules/default/arrow-parens}
     */
    '@stylistic/arrow-parens': 2,

    /**
     * 화살표 함수에서 화살표 앞뒤에 공백 확인
     * @see {@link https://eslint.style/rules/default/arrow-spacing}
     */
    '@stylistic/arrow-spacing': 2,

    /**
     * 블록을 열고 블록을 닫기 전에 블록 안의 공백 확인
     * @see {@link https://eslint.style/rules/default/block-spacing}
     */
    '@stylistic/block-spacing': 2,

    /**
     * 블록에 대한 중괄호 스타일 확인
     * @see {@link https://eslint.style/rules/default/brace-style}
     */
    '@stylistic/brace-style': 2,

    /**
     * 길게 늘어지는 쉼표 확인
     * - 배열의 마지막 요소가 닫는 `]`와 다른 줄에 있는 경우 배열의 마지막 요소에 쉼표 필요
     * - 객체의 마지막 프로퍼티가 닫는 `}`와 다른 줄에 있는 경우 객체의 마지막 프로퍼티에 쉼표 필요
     * - 마지막 모듈이 닫는 `}`와 다른 줄에 있는 경우 마지막 모듈에 쉼표 필요
     * - 함수의 마지막 매개변수가 닫는 `)`와 다른 줄에 있는 경우 함수의 마지막 매개변수에 쉼표 필요
     * - enum(열거형)의 마지막 값이 닫는 `}`와 다른 줄에 있는 경우 enum(열거형)의 마지막 값에 쉼표 필요
     * - 제네릭의 마지막 타입 변수가 닫는 `>`와 다른 줄에 있는 경우 제네릭의 마지막 값에 쉼표 필요
     * - 튜플의 마지막 요소가 닫는 `]`와 다른 줄에 있는 경우 튜플의 마지막 요소에 쉼표 필요
     * @see {@link https://eslint.style/rules/default/comma-dangle}
     */
    '@stylistic/comma-dangle': [2, 'always-multiline'],

    /**
     * 쉼표 앞에 공백이 없고 쉼표 뒤에 공백이 있는지 확인
     * @see {@link https://eslint.style/rules/default/comma-spacing}
     */
    '@stylistic/comma-spacing': 2,

    /**
     * 배열 요소, 객체 프로퍼티, 변수 선언 뒤에 쉼표 확인
     * @see {@link https://eslint.style/rules/default/comma-style}
     */
    '@stylistic/comma-style': 2,

    /**
     * 계산된 프로퍼티 대괄호 안에 공백이 없는지 확인
     * @see {@link https://eslint.style/rules/default/computed-property-spacing}
     */
    '@stylistic/computed-property-spacing': 2,

    /**
     * 점 앞에 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/dot-location}
     */
    '@stylistic/dot-location': [2, 'property'],

    /**
     * 파일 끝에 있는 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/eol-last}
     */
    '@stylistic/eol-last': 2,

    /**
     * 함수 호출의 인수 사이에 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/function-call-argument-newline}
     */
    '@stylistic/function-call-argument-newline': [2, 'consistent'],

    /**
     * 함수 이름과 여는 괄호 사이의 공백 확인
     * @see {@link https://eslint.style/rules/default/function-call-spacing}
     */
    '@stylistic/function-call-spacing': 2,

    /**
     * 함수 괄호 안에 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/function-paren-newline}
     */
    '@stylistic/function-paren-newline': [2, 'multiline-arguments'],

    /**
     * 제너레이터 함수에서 `*` 연산자와 함수 이름 사이에 공백 확인
     * @see {@link https://eslint.style/rules/default/generator-star-spacing}
     */
    '@stylistic/generator-star-spacing': [2, 'after'],

    /**
     * 화살표 함수 본문의 위치 확인
     * @see {@link https://eslint.style/rules/default/implicit-arrow-linebreak}
     */
    '@stylistic/implicit-arrow-linebreak': 2,

    /**
     * 들여쓰기 확인
     * @see {@link https://eslint.style/rules/default/indent}
     */
    '@stylistic/indent': [
        2,
        4,
        {
            /** `switch`문에서 `case`문에 대한 들여쓰기 확인 */
            SwitchCase: 1,

            /** 변수 선언에 대한 들여쓰기 확인 */
            VariableDeclarator: 'first',
        },
    ],

    /**
     * 프로퍼티 이름과 타입 및 인터페이스의 타입 표기 사이의 공백 확인
     * @see {@link https://eslint.style/rules/default/key-spacing}
     */
    '@stylistic/key-spacing': 2,

    /**
     * 키워드 앞이나 뒤에 공백 확인
     * - `as` (모듈 선언), `async` (async 함수), `await` (await 표현식), `break`, `case`, `catch`, `class`, `const`, `continue`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `from` (모듈 선언), `function`, `get` (getter), `if`, `import`, `in` (for-in문), `let`, `new`, `of` (for-of문), `return`, `set` (setter), `static`, `switch`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `yield`
     * @see {@link https://eslint.style/rules/default/keyword-spacing}
     */
    '@stylistic/keyword-spacing': 2,

    /**
     * LF `\n` 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/linebreak-style}
     */
    '@stylistic/linebreak-style': 2,

    /**
     * 주석 주위에 빈 줄 필요
     * @see {@link https://eslint.style/rules/default/lines-around-comment}
     */
    '@stylistic/lines-around-comment': [
        2,
        {
            /** 여러 줄의 (`/*`) 주석 앞에 빈 줄 필요 여부 */
            beforeBlockComment: false,

            /** 블록문, 함수 본문, 클래스, switch문, 클래스 정적 블록의 시작에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowBlockStart: true,

            /** 블록문, 함수 본문, 클래스, switch문, 클래스 정적 블록의 끝에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowBlockEnd: true,

            /** 객체 리터럴의 시작에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowObjectStart: true,

            /** 객체 리터럴의 끝에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowObjectEnd: true,

            /** 배열 리터럴의 시작에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowArrayStart: true,

            /** 배열 리터럴의 끝에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowArrayEnd: true,

            /** 클래스의 시작에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowClassStart: true,

            /** 클래스의 끝에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowClassEnd: true,

            /** enum(열거형) 본문 블록의 시작에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowEnumStart: true,

            /** enum(열거형) 본문 블록의 끝에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowEnumEnd: true,

            /** 인터페이스 본문 블록의 시작에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowInterfaceStart: true,

            /** 인터페이스 본문 블록의 끝에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowInterfaceEnd: true,

            /** 모듈 본문 블록의 시작에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowModuleStart: true,

            /** 모듈 본문 블록의 끝에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowModuleEnd: true,

            /** 타입 리터럴의 시작에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowTypeStart: true,

            /** 타입 리터럴의 끝에 빈 줄이 필요하지 않고 주석 표시 여부 */
            allowTypeEnd: true,
        },
    ],

    /**
     * 클래스 멤버 간의 빈 줄 확인
     * @see {@link https://eslint.style/rules/default/lines-between-class-members}
     */
    '@stylistic/lines-between-class-members': 2,

    /**
     * 줄당 허용되는 최대 문 수 확인
     * @see {@link https://eslint.style/rules/default/max-statements-per-line}
     */
    '@stylistic/max-statements-per-line': 2,

    /**
     * 인터페이스 및 타입 리터럴에 대한 멤버의 세미콜론 (`;`) 구분 필요
     * @see {@link https://eslint.style/rules/default/member-delimiter-style}
     */
    '@stylistic/member-delimiter-style': 2,

    /**
     * 메서드 체인에서 각 호출 후 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/newline-per-chained-call}
     */
    '@stylistic/newline-per-chained-call': [
        2,
        {
            /** 허용할 체인 깊이 */
            ignoreChainWithDepth: 1,
        },
    ],

    /**
     * 불필요한 세미 콜론 확인
     * @see {@link https://eslint.style/rules/default/no-extra-semi}
     */
    '@stylistic/no-extra-semi': 2,

    /**
     * 숫자 리터럴에서 선행 또는 후행 소수점 확인
     * @see {@link https://eslint.style/rules/default/no-floating-decimal}
     */
    '@stylistic/no-floating-decimal': 2,

    /**
     * 혼합된 연산자 확인
     * - 수학 연산자 : `+`, `-`, `*`, `/`, `%`, `**`
     * - 비트 연산자 : `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
     * - 비교 연산자 : `==`, `!=`, `===`, `!==`, `>`, `>=`, `<`, `<=`
     * - 논리 연산자 : `&&`, `||`, `??`
     * - 관계 연산자 : `in`, `instanceof`
     * @see {@link https://eslint.style/rules/default/no-mixed-operators}
     */
    '@stylistic/no-mixed-operators': [
        2,
        {
            /** 확인할 연산자 그룹 */
            groups: [
                // 수학 연산자
                [
                    '+',
                    '-',
                    '*',
                    '/',
                    '%',
                    '**',
                ],

                // 비트 연산자
                [
                    '&',
                    '|',
                    '^',
                    '~',
                    '<<',
                    '>>',
                    '>>>',
                ],

                // 비교 연산자
                [
                    '==',
                    '!=',
                    '===',
                    '!==',
                    '>',
                    '>=',
                    '<',
                    '<=',
                ],

                // 논리 연산자
                [
                    '&&',
                    '||',
                    '??',
                ],

                // 관계 연산자
                ['in', 'instanceof'],
            ],
        },
    ],

    /**
     * 여러 공백 확인
     * @see {@link https://eslint.style/rules/default/no-multi-spaces}
     */
    '@stylistic/no-multi-spaces': 2,

    /**
     * 여러 개의 빈 줄 확인
     * @see {@link https://eslint.style/rules/default/no-multiple-empty-lines}
     */
    '@stylistic/no-multiple-empty-lines': [
        2,
        {
            /** 연속된 빈 줄의 최대 수 */
            max: 1,

            /** 파일의 끝 부분에 연속된 빈 줄의 최대 수 */
            maxEOF: 0,

            /** 파일의 시작 부분에 연속된 빈 줄의 최대 수 */
            maxBOF: 0,
        },
    ],

    /**
     * 모든 탭 확인
     * @see {@link https://eslint.style/rules/default/no-tabs}
     */
    '@stylistic/no-tabs': 2,

    /**
     * 줄 끝에서 길게 늘어지는 공백 확인
     * @see {@link https://eslint.style/rules/default/no-trailing-spaces}
     */
    '@stylistic/no-trailing-spaces': 2,

    /**
     * 프로퍼티 앞에 공백 확인
     * @see {@link https://eslint.style/rules/default/no-whitespace-before-property}
     */
    '@stylistic/no-whitespace-before-property': 2,

    /**
     * 객체 리터럴 또는 구조 분해 할당의 중괄호를 열고 닫기 전에 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/object-curly-newline}
     */
    '@stylistic/object-curly-newline': [
        2,
        {
            /** 프로퍼티 수가 해당 정수 이상인 경우 줄 바꿈 필요 */
            minProperties: 10,

            /** 일관된 중괄호 여부 */
            consistent: true,
        },
    ],

    /**
     * 객체 리터럴, 구조 분해 할당, 모듈 내보내고 가져오기의 중괄호 안에 공백 확인 (`{}` 제외)
     * @see {@link https://eslint.style/rules/default/object-curly-spacing}
     */
    '@stylistic/object-curly-spacing': [2, 'always'],

    /**
     * 개별 줄에 객체 프로퍼티 배치 확인
     * @see {@link https://eslint.style/rules/default/object-property-newline}
     */
    '@stylistic/object-property-newline': 2,

    /**
     * 연산자 앞에 줄 바꿈 확인
     * @see {@link https://eslint.style/rules/default/operator-linebreak}
     */
    '@stylistic/operator-linebreak': [2, 'before'],

    /**
     * 블록문, 함수 본문, 클래스 정적 블록, 클래스, switch문의 시작과 끝에 빈 줄 확인
     * @see {@link https://eslint.style/rules/default/padded-blocks}
     */
    '@stylistic/padded-blocks': [2, 'never'],

    /**
     * 필요에 따른 객체 리터럴 프로퍼티 이름 주위에 따옴표 확인
     * @see {@link https://eslint.style/rules/default/quote-props}
     */
    '@stylistic/quote-props': [2, 'as-needed'],

    /**
     * 백틱, 큰 따옴표, 작은 따옴표 중 하나 사용 확인
     * @see {@link https://eslint.style/rules/default/quotes}
     */
    '@stylistic/quotes': [2, 'single'],

    /**
     * 나머지 및 스프레드 연산자와 표현식 간의 공백 확인
     * @see {@link https://eslint.style/rules/default/rest-spread-spacing}
     */
    '@stylistic/rest-spread-spacing': 2,

    /**
     * 문장 끝에 세미 콜론 필요
     * @see {@link https://eslint.style/rules/default/semi}
     */
    '@stylistic/semi': 2,

    /**
     * 세미 콜론 뒤에 공백이 있고 세미 콜론 앞에 공백이 없는지 확인
     * @see {@link https://eslint.style/rules/default/semi-spacing}
     */
    '@stylistic/semi-spacing': 2,

    /**
     * 세미 콜론이 문의 끝에 있는지 확인
     * @see {@link https://eslint.style/rules/default/semi-style}
     */
    '@stylistic/semi-style': 2,

    /**
     * 블록 앞에 공백 확인
     * @see {@link https://eslint.style/rules/default/space-before-blocks}
     */
    '@stylistic/space-before-blocks': 2,

    /**
     * 함수 괄호 앞에 공백 확인
     * @see {@link https://eslint.style/rules/default/space-before-function-paren}
     */
    '@stylistic/space-before-function-paren': [
        2,
        {
            /** 명명된 함수 표현식은 인수의 `(` 앞에 공백이 없는지 확인 */
            named: 'never',
        },
    ],

    /**
     * 괄호 안에 공백이 없는지 확인
     * @see {@link https://eslint.style/rules/default/space-in-parens}
     */
    '@stylistic/space-in-parens': 2,

    /**
     * 연산자 주위에 공백 확인
     * @see {@link https://eslint.style/rules/default/space-infix-ops}
     */
    '@stylistic/space-infix-ops': 2,

    /**
     * 단항 연산자 앞이나 뒤에 공백 확인
     * - 공백이 있는지 확인 : `new`, `delete`, `typeof`, `void`, `yield`
     * - 공백이 없는지 확인 : `-`, `+`, `--`, `++`, `!`, `!!`
     * @see {@link https://eslint.style/rules/default/space-unary-ops}
     */
    '@stylistic/space-unary-ops': 2,

    /**
     * 주석에서 `//` 또는 `/*` 뒤에 공백 확인
     * @see {@link https://eslint.style/rules/default/spaced-comment}
     */
    '@stylistic/spaced-comment': 2,

    /**
     * switch문의 콜론 뒤에 공백이 있고 콜론 앞에 공백이 없는지 확인
     * @see {@link https://eslint.style/rules/default/switch-colon-spacing}
     */
    '@stylistic/switch-colon-spacing': 2,

    /**
     * 템플릿 리터럴의 중괄호 쌍 안의 공백 확인
     * @see {@link https://eslint.style/rules/default/template-curly-spacing}
     */
    '@stylistic/template-curly-spacing': 2,

    /**
     * 템플릿 태그와 리터럴 간의 공백 확인
     * @see {@link https://eslint.style/rules/default/template-tag-spacing}
     */
    '@stylistic/template-tag-spacing': 2,

    /**
     * 타입 표기 주위에 공백 필요
     * @see {@link https://eslint.style/rules/default/type-annotation-spacing}
     */
    '@stylistic/type-annotation-spacing': 2,

    /**
     * TypeScript 제네릭 타입 안에 공백 확인
     * @see {@link https://eslint.style/rules/default/type-generic-spacing}
     */
    '@stylistic/type-generic-spacing': 2,

    /**
     * 명명된 튜플에서 타입 선언 앞에 공백 확인
     * @see {@link https://eslint.style/rules/default/type-named-tuple-spacing}
     */
    '@stylistic/type-named-tuple-spacing': 2,

    /**
     * 정규 표현식 리터럴에 대한 괄호 필요
     * @see {@link https://eslint.style/rules/default/wrap-regex}
     */
    '@stylistic/wrap-regex': 2,

    /**
     * `yield*` 표현식에서 `*`와 인수 사이의 공백 확인
     * @see {@link https://eslint.style/rules/default/yield-star-spacing}
     */
    '@stylistic/yield-star-spacing': 2,
};
