/**
 * TypeScript ESLint Rules
 * @see {@link https://typescript-eslint.io/rules}
 */
module.exports = {
    /**
     * 함수 오버로드 시그니처가 연속적인지 확인
     * @see {@link https://typescript-eslint.io/rules/adjacent-overload-signatures}
     */
    '@typescript-eslint/adjacent-overload-signatures': 2,

    /**
     * 배열에 대해 `T[]` 사용 확인
     * @see {@link https://typescript-eslint.io/rules/array-type}
     */
    '@typescript-eslint/array-type': 2,

    /**
     * 클래스의 리터럴 스타일 확인
     * @see {@link https://typescript-eslint.io/rules/class-literal-property-style}
     */
    '@typescript-eslint/class-literal-property-style': 2,

    /**
     * 생성자 이름에 제네릭 타입 변수 지정 확인
     * @see {@link https://typescript-eslint.io/rules/consistent-generic-constructors}
     */
    '@typescript-eslint/consistent-generic-constructors': 2,

    /**
     * `Record` 타입 확인
     * @see {@link https://typescript-eslint.io/rules/consistent-indexed-object-style}
     */
    '@typescript-eslint/consistent-indexed-object-style': 2,

    /**
     * 인터페이스 및 타입 리터럴에 대한 멤버의 세미콜론 (`;`) 구분 필요
     * @see {@link https://typescript-eslint.io/rules/member-delimiter-style}
     */
    '@typescript-eslint/member-delimiter-style': 2,

    /**
     * 프로퍼티 시그니처 구문 사용 확인
     * @see {@link https://typescript-eslint.io/rules/method-signature-style}
     */
    '@typescript-eslint/method-signature-style': 2,

    /**
     * 빈 인터페이스 선언 확인
     * @see {@link https://typescript-eslint.io/rules/no-empty-interface}
     */
    '@typescript-eslint/no-empty-interface': [
        2,
        {
            /** 추가 멤버를 추가하지 않고 단일 인터페이스 확장 여부 */
            allowSingleExtends: true,
        },
    ],

    /**
     * `any` 타입 확인
     * @see {@link https://typescript-eslint.io/rules/no-explicit-any}
     */
    '@typescript-eslint/no-explicit-any': 0,

    /**
     * 네임스페이스로 사용되는 클래스 확인
     * @see {@link https://typescript-eslint.io/rules/no-extraneous-class}
     */
    '@typescript-eslint/no-extraneous-class': 2,

    /**
     * 인라인 `type` 키워드만 있는 타입 가져오기에 최상위 `type` 키워드 사용 확인
     * @see {@link https://typescript-eslint.io/rules/no-import-type-side-effects}
     */
    '@typescript-eslint/no-import-type-side-effects': 2,

    /**
     * 숫자형, 문자열, 불린형으로 초기화된 변수 또는 매개변수에 대한 명시적 타입 선언 확인
     * @see {@link https://typescript-eslint.io/rules/no-inferrable-types}
     */
    '@typescript-eslint/no-inferrable-types': 2,

    /**
     * 제네릭 또는 반환 타입을 제외한 `void` 타입 확인
     * @see {@link https://typescript-eslint.io/rules/no-invalid-void-type}
     */
    '@typescript-eslint/no-invalid-void-type': 2,

    /**
     * nullish 병합 연산자(`??`)의 왼쪽 피연산자에서 Null 아님 단언 연산자 (접미사 `!`) 확인
     * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing}
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,

    /**
     * Null 아님 단언 연산자 (접미사 `!`) 확인
     * @see {@link https://typescript-eslint.io/rules/no-non-null-assertion}
     */
    '@typescript-eslint/no-non-null-assertion': 0,

    /**
     * 모듈 파일에서 다른 모듈 내보내고 가져오기가 있는 경우 빈 내보내기 `export {}` 확인
     * @see {@link https://typescript-eslint.io/rules/no-useless-empty-export}
     */
    '@typescript-eslint/no-useless-empty-export': 2,

    /**
     * 가능한 경우 'for' 반복문에 대해 `for-of` 반복문 사용 확인
     * @see {@link https://typescript-eslint.io/rules/prefer-for-of}
     */
    '@typescript-eslint/prefer-for-of': 2,

    /**
     * 호출 시그니처가 있는 인터페이스 대신 함수 타입 사용 확인
     * @see {@link https://typescript-eslint.io/rules/prefer-function-type}
     */
    '@typescript-eslint/prefer-function-type': 2,

    /**
     * 모든 enum(열거형) 멤버가 리터럴 값인지 확인
     * @see {@link https://typescript-eslint.io/rules/prefer-literal-enum-member}
     */
    '@typescript-eslint/prefer-literal-enum-member': 2,

    /**
     * 커스텀 TypeScript 모듈을 선언하려면 `module` 키워드 위에 `namespace` 키워드 사용 확인
     * @see {@link https://typescript-eslint.io/rules/prefer-namespace-keyword}
     */
    '@typescript-eslint/prefer-namespace-keyword': 2,

    /**
     * `@ts-ignore`보다 `@ts-expect-error` 사용 확인
     * @see {@link https://typescript-eslint.io/rules/prefer-ts-expect-error}
     */
    '@typescript-eslint/prefer-ts-expect-error': 2,

    /**
     * 타입 표기 주위에 간격 필요
     * @see {@link https://typescript-eslint.io/rules/type-annotation-spacing}
     */
    '@typescript-eslint/type-annotation-spacing': 2,

    /**
     * union(유니언) 또는 선택적/나머지 매개변수를 사용하여 하나로 통합될 수 있는 두 개의 오버로드 확인
     * @see {@link https://typescript-eslint.io/rules/unified-signatures}
     */
    '@typescript-eslint/unified-signatures': 2,

    /**
     * 블록을 열고 블록을 닫기 전에 블록 안의 공백 확인
     * @see {@link https://typescript-eslint.io/rules/block-spacing}
     */
    '@typescript-eslint/block-spacing': 2,

    /**
     * 블록에 대한 중괄호 스타일 확인
     * @see {@link https://typescript-eslint.io/rules/brace-style}
     */
    '@typescript-eslint/brace-style': 2,

    /**
     * 길게 늘어지는 쉼표 확인
     * - 배열의 마지막 요소가 닫는 `]`와 다른 줄에 있는 경우 배열의 마지막 요소에 쉼표 필요
     * - 객체의 마지막 프로퍼티가 닫는 `}`와 다른 줄에 있는 경우 객체의 마지막 프로퍼티에 쉼표 필요
     * - 마지막 모듈이 닫는 `}`와 다른 줄에 있는 경우 마지막 모듈에 쉼표 필요
     * - 함수의 마지막 매개변수가 닫는 `)`와 다른 줄에 있는 경우 함수의 마지막 매개변수에 쉼표 필요
     * - enum(열거형)의 마지막 값이 닫는 `}`와 다른 줄에 있는 경우 enum(열거형)의 마지막 값에 쉼표 필요
     * - 제네릭의 마지막 타입 변수가 닫는 `>`와 다른 줄에 있는 경우 제네릭의 마지막 값에 쉼표 필요
     * - 튜플의 마지막 요소가 닫는 `]`와 다른 줄에 있는 경우 튜플의 마지막 요소에 쉼표 필요
     * @see {@link https://typescript-eslint.io/rules/comma-dangle}
     */
    '@typescript-eslint/comma-dangle': [2, 'always-multiline'],

    /**
     * 쉼표 앞에 공백이 없고 쉼표 뒤에 공백이 있는지 확인
     * @see {@link https://typescript-eslint.io/rules/comma-spacing}
     */
    '@typescript-eslint/comma-spacing': 2,

    /**
     * 함수 이름과 여는 괄호 사이의 공백 확인
     * @see {@link https://typescript-eslint.io/rules/func-call-spacing}
     */
    '@typescript-eslint/func-call-spacing': 2,

    /**
     * 들여쓰기 확인
     * @see {@link https://typescript-eslint.io/rules/indent}
     */
    '@typescript-eslint/indent': [
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
     * @see {@link https://typescript-eslint.io/rules/key-spacing}
     */
    '@typescript-eslint/key-spacing': 2,

    /**
     * 키워드 앞이나 뒤에 공백 확인
     * - `as` (모듈 선언), `async` (async 함수), `await` (await 표현식), `break`, `case`, `catch`, `class`, `const`, `continue`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `from` (모듈 선언), `function`, `get` (getter), `if`, `import`, `in` (for-in문), `let`, `new`, `of` (for-of문), `return`, `set` (setter), `static`, `switch`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `yield`
     * @see {@link https://typescript-eslint.io/rules/keyword-spacing}
     */
    '@typescript-eslint/keyword-spacing': 2,

    /**
     * 주석 주위에 빈 줄 필요
     * @see {@link https://typescript-eslint.io/rules/lines-around-comment}
     */
    '@typescript-eslint/lines-around-comment': [
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
     * @see {@link https://typescript-eslint.io/rules/lines-between-class-members}
     */
    '@typescript-eslint/lines-between-class-members': 2,

    /**
     * 중복 클래스 멤버 확인
     * @see {@link https://typescript-eslint.io/rules/no-dupe-class-members}
     */
    '@typescript-eslint/no-dupe-class-members': 2,

    /**
     * 빈 함수 확인
     * @see {@link https://typescript-eslint.io/rules/no-empty-function}
     */
    '@typescript-eslint/no-empty-function': [
        2,
        {
            /** 빈 함수를 허용하는 종류의 목록 */
            allow: ['methods'],
        },
    ],

    /**
     * 불필요한 세미 콜론 확인
     * @see {@link https://typescript-eslint.io/rules/no-extra-semi}
     */
    '@typescript-eslint/no-extra-semi': 2,

    /**
     * `this`의 값이 `undefined`인 상황에서 `this`의 사용 확인
     * @see {@link https://typescript-eslint.io/rules/no-invalid-this}
     */
    '@typescript-eslint/no-invalid-this': 2,

    /**
     * 반복문 안에 안전하지 않은 참조를 포함하는 함수 선언 확인
     * @see {@link https://typescript-eslint.io/rules/no-loop-func}
     */
    '@typescript-eslint/no-loop-func': 2,

    /**
     * 변수 재선언 확인
     * @see {@link https://typescript-eslint.io/rules/no-redeclare}
     */
    '@typescript-eslint/no-redeclare': 2,

    /**
     * 사용되지 않는 표현식 확인
     * @see {@link https://typescript-eslint.io/rules/no-unused-expressions}
     */
    '@typescript-eslint/no-unused-expressions': 2,

    /**
     * 사용되지 않는 변수 확인
     * @see {@link https://typescript-eslint.io/rules/no-unused-vars}
     */
    '@typescript-eslint/no-unused-vars': [
        2,
        {
            /** 에러 객체 확인 */
            caughtErrors: 'all',
        },
    ],

    /**
     * 불필요한 클래스 생성자 확인
     * @see {@link https://typescript-eslint.io/rules/no-useless-constructor}
     */
    '@typescript-eslint/no-useless-constructor': 2,

    /**
     * 객체 리터럴, 구조 분해 할당, 모듈 내보내고 가져오기의 중괄호 안에 공백 확인 (`{}` 제외)
     * @see {@link https://typescript-eslint.io/rules/object-curly-spacing}
     */
    '@typescript-eslint/object-curly-spacing': [2, 'always'],

    /**
     * 백틱, 큰 따옴표, 작은 따옴표 중 하나 사용 확인
     * @see {@link https://typescript-eslint.io/rules/quotes}
     */
    '@typescript-eslint/quotes': [2, 'single'],

    /**
     * 문장 끝에 세미 콜론 필요
     * @see {@link https://typescript-eslint.io/rules/semi}
     */
    '@typescript-eslint/semi': 2,

    /**
     * 블록 앞에 공백 확인
     * @see {@link https://typescript-eslint.io/rules/space-before-blocks}
     */
    '@typescript-eslint/space-before-blocks': 2,

    /**
     * 함수 괄호 앞에 공백 확인
     * @see {@link https://typescript-eslint.io/rules/space-before-function-paren}
     */
    '@typescript-eslint/space-before-function-paren': [
        2,
        {
            /** 명명된 함수 표현식은 인수의 `(` 앞에 공백이 없는지 확인 */
            named: 'never',
        },
    ],

    /**
     * 연산자 주위에 공백 확인
     * @see {@link https://typescript-eslint.io/rules/space-infix-ops}
     */
    '@typescript-eslint/space-infix-ops': 2,
};
