import type { Linter } from 'eslint';

/**
 * Stylistic ESLint 규칙
 * @see {@link https://eslint.style/rules}
 */
export const rules: NonNullable<Linter.Config['rules']> = {
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
     * 블록에 대한 중괄호 스타일 확인
     * @see {@link https://eslint.style/rules/default/brace-style}
     */
    '@stylistic/brace-style': [
        2,
        '1tbs',
        {
            /** 같은 줄에 연속 블록에 대한 중괄호 허용 여부 */
            allowSingleLine: false,
        },
    ],

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
     * 이진 연산자에 대한 들여쓰기
     * @see {@link https://eslint.style/rules/default/indent-binary-ops}
     */
    '@stylistic/indent-binary-ops': [2, 0],

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
     * 개별 줄에 객체 프로퍼티 배치 확인
     * @see {@link https://eslint.style/rules/default/object-property-newline}
     */
    '@stylistic/object-property-newline': 2,

    /**
     * 백틱, 큰 따옴표, 작은 따옴표 중 하나 사용 확인
     * @see {@link https://eslint.style/rules/default/quotes}
     */
    '@stylistic/quotes': [
        2,
        'single',
        {
            /** 문자열을 벗어나지 않도록 필요한 경우 작은 따옴표, 큰 따옴표, 템플릿 리터럴 사용 여부 */
            avoidEscape: true,

            /** 문자열을 벗어나지 않도록 필요한 경우 백틱 사용 여부 */
            allowTemplateLiterals: 'avoidEscape',
        },
    ],

    /**
     * 세미 콜론이 문의 끝에 있는지 확인
     * @see {@link https://eslint.style/rules/default/semi-style}
     */
    '@stylistic/semi-style': 2,

    /**
     * switch문의 콜론 뒤에 공백이 있고 콜론 앞에 공백이 없는지 확인
     * @see {@link https://eslint.style/rules/default/switch-colon-spacing}
     */
    '@stylistic/switch-colon-spacing': 2,

    /**
     * 정규 표현식 리터럴에 대한 괄호 필요
     * @see {@link https://eslint.style/rules/default/wrap-regex}
     */
    '@stylistic/wrap-regex': 2,

    /**
     * `yield*` 표현식에서 `*`와 인수 사이의 공백 확인
     * @see {@link https://eslint.style/rules/default/yield-star-spacing}
     */
    '@stylistic/yield-star-spacing': [2, 'before'],
};

export default {
    name: 'rules/stylistic',
    rules,
};
