/**
 * JavaScript ESLint Rules
 * @see {@link https://eslint.org/docs/latest/rules}
 */
const rules = {
    /**
     * 배열 메서드의 콜백에 `return`문 확인
     * @see {@link https://eslint.org/docs/latest/rules/array-callback-return}
     */
    'array-callback-return': [
        2,
        {
            /** 반환 값이 필요한 메서드의 콜백에 `return`문으로 `undefined`를 암시적으로 반환 여부 */
            allowImplicit: true,
        },
    ],

    /**
     * 반복문 안에 `await` 확인 (`Promise.all()` 사용)
     * @see {@link https://eslint.org/docs/latest/rules/no-await-in-loop}
     */
    'no-await-in-loop': 2,

    /**
     * 항상 `true` 또는 `false`로 평가되는 `==` 및 `===` 비교를 식별하고 항상 또는 결코 단락되지 않는 `||`, `&&`, `??` 논리식 식별 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-constant-binary-expression}
     */
    'no-constant-binary-expression': 2,

    /**
     * `switch`문의 `case`에서 다음 `case`로 넘어갈 수 있는 오류 확인 (`break`를 사용하여 오류 방지)
     * @see {@link https://eslint.org/docs/latest/rules/no-fallthrough}
     */
    'no-fallthrough': [
        2,
        {
            /** 빈 case 허용 여부 */
            allowEmptyCase: true,
        },
    ],

    /**
     * 불규칙한 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-irregular-whitespace}
     */
    'no-irregular-whitespace': [
        2,
        {
            /** 문자열 리터럴에서 불규칙한 공백 문자 허용 여부 */
            skipStrings: false,
        },
    ],

    /**
     * 전역 비생성자 함수에 `new` 연산자 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor}
     */
    'no-new-native-nonconstructor': 2,

    /**
     * Promise(프라미스) 실행기 함수에서 반환 값 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-promise-executor-return}
     */
    'no-promise-executor-return': 2,

    /**
     * 양쪽이 정확히 같은 비교 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-self-compare}
     */
    'no-self-compare': 2,

    /**
     * 빈 요소가 포함되어 있는 배열 확인
     * - `recommended`에서는 `error`인데 빈 요소가 포함되어 있는 배열을 사용할 수도 있으므로 `warning`으로 설정
     * @see {@link https://eslint.org/docs/latest/rules/no-sparse-arrays}
     */
    'no-sparse-arrays': 1,

    /**
     * 일반 문자열에서 템플릿 리터럴 자리 표시자 (`${something}`) 구문 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-template-curly-in-string}
     */
    'no-template-curly-in-string': 1,

    /**
     * 수정되지 않는 반복 조건 확인 (무한 반복 방지)
     * @see {@link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition}
     */
    'no-unmodified-loop-condition': 2,

    /**
     * 한 번의 반복만 허용하는 반복문 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-unreachable-loop}
     */
    'no-unreachable-loop': 2,

    /**
     * `undefined` 값이 허용되지 않는 컨텍스트에서 옵셔널 체이닝 (`?.`) 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining}
     */
    'no-unsafe-optional-chaining': [
        2,
        {
            /** 옵셔널 체이닝 표현식에 대한 산술 연산 확인 여부 */
            disallowArithmeticOperators: true,
        },
    ],

    /**
     * 사용하지 않는 private 클래스 멤버 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-private-class-members}
     */
    'no-unused-private-class-members': 2,

    /**
     * 객체 및 클래스에 getter(get 구문) 및 setter(set 구문) 쌍 확인
     * @see {@link https://eslint.org/docs/latest/rules/accessor-pairs}
     */
    'accessor-pairs': 2,

    /**
     * 화살표 함수에 중괄호 필요
     * @see {@link https://eslint.org/docs/latest/rules/arrow-body-style}
     */
    'arrow-body-style': 2,

    /**
     * 프로그램에 허용되는 최대 순환 복잡도(프로그램의 소스 코드를 통과하는 경로의 수) 확인
     * @see {@link https://eslint.org/docs/latest/rules/complexity}
     */
    complexity: 2,

    /**
     * 모든 제어문(`if`, `else if`, `else`, `for`, `while`, `do`)에 대해 중괄호 확인
     * @see {@link https://eslint.org/docs/latest/rules/curly}
     */
    curly: 2,

    /**
     * switch문의 default문이 마지막인지 확인
     * @see {@link https://eslint.org/docs/latest/rules/default-case-last}
     */
    'default-case-last': 2,

    /**
     * 점 표기법을 사용하여 프로퍼티를 읽을 수 있는 경우 점 표기법 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/dot-notation}
     */
    'dot-notation': 2,

    /**
     * `===` 및 `!==`의 사용 필요
     * @see {@link https://eslint.org/docs/latest/rules/eqeqeq}
     */
    eqeqeq: 2,

    /**
     * 할당된 변수 또는 프로퍼티의 이름과 일치하는 함수 이름 필요
     * @see {@link https://eslint.org/docs/latest/rules/func-name-matching}
     */
    'func-name-matching': [
        2,
        {
            /** `Object.create`, `Object.defineProperty`, `Object.defineProperties`, `Reflect.defineProperty` 확인 여부 */
            considerPropertyDescriptor: true,

            /** `module.exports` 및 `module['exports']` 확인 여부 */
            includeCommonJSModuleExports: true,
        },
    ],

    /**
     * 이름이 필요한 재귀 함수를 제외하고 명명된 함수 표현식을 확인하지 않음
     * @see {@link https://eslint.org/docs/latest/rules/func-names}
     */
    'func-names': [2, 'never'],

    /**
     * 함수 선언 대신 함수 표현식 사용
     * @see {@link https://eslint.org/docs/latest/rules/func-style}
     */
    'func-style': 2,

    /**
     * 객체 리터럴 및 클래스에서 그룹화된 getter(get 구문) 및 setter(set 구문) 쌍 필요
     * - 프로퍼티에 getter(get 구문)와 setter(set 구문)가 모두 있는 경우 getter(get 구문)를 setter(set 구문) 앞에 할당
     * @see {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs}
     */
    'grouped-accessor-pairs': [2, 'getBeforeSet'],

    /**
     * `if`문을 포함한 `for-in` 반복문 필요 (프로토타입 상속 프로퍼티 제외)
     * @see {@link https://eslint.org/docs/latest/rules/guard-for-in}
     */
    'guard-for-in': 2,

    /**
     * 논리 할당 연산자 단축 문법 확인
     * @see {@link https://eslint.org/docs/latest/rules/logical-assignment-operators}
     */
    'logical-assignment-operators': [
        2,
        'always',
        {
            /** 논리 할당 연산자로 표현할 수 있는 if문이 있는지 확인 여부 */
            enforceForIfStatements: true,
        },
    ],

    /**
     * 대문자로 시작하는 생성자 이름 필요
     * @see {@link https://eslint.org/docs/latest/rules/new-cap}
     */
    'new-cap': 2,

    /**
     * 비트 연산자 사용 확인
     * - 비트 연산자를 사용하는 것은 매우 드물며 종종 `&` 또는 `|`는 단순히 잘못 입력된 `&&` 또는 `||`일 수 있으므로 확인 필요
     * @see {@link https://eslint.org/docs/latest/rules/no-bitwise}
     */
    'no-bitwise': 1,

    /**
     * `arguments.caller` 또는 `arguments.callee`의 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-caller}
     */
    'no-caller': 2,

    /**
     * 정규 표현식의 시작 부분에 명시적인 등호 확인
     * - 정규 표현식 리터럴의 시작 부분에 있는 문자 `/=`는 나눗셈 할당 연산자와 혼동될 수 있음
     * @see {@link https://eslint.org/docs/latest/rules/no-div-regex}
     */
    'no-div-regex': 2,

    /**
     * `if`문에서 `return`문 뒤의 `else` 블록 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-else-return}
     */
    'no-else-return': [
        2,
        {
            /** 반환 후 `else if` 블록 허용 여부 */
            allowElseIf: false,
        },
    ],

    /**
     * 클래스 안에 빈 정적 블록 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-empty-static-block}
     */
    'no-empty-static-block': 2,

    /**
     * 동등 연산자 (`==`) 또는 부등 연산자 (`!=`) 없이 `null` 비교 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-eq-null}
     */
    'no-eq-null': 2,

    /**
     * `eval()` 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-eval}
     */
    'no-eval': 2,

    /**
     * 내장 객체 확장 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-extend-native}
     */
    'no-extend-native': 2,

    /**
     * 불필요한 `.bind()` 호출 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-bind}
     */
    'no-extra-bind': 2,

    /**
     * 불필요한 불린형 변환 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-boolean-cast}
     */
    'no-extra-boolean-cast': [
        2,
        {
            /** 불린형 변환이 논리 연산자에 포함되어 있는지 확인 여부 */
            enforceForLogicalOperands: true,
        },
    ],

    /**
     * 불필요한 레이블 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-label}
     */
    'no-extra-label': 2,

    /**
     * 불필요한 세미 콜론 확인
     * - TypeScript 규칙 사용
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-semi}
     */
    'no-extra-semi': 0,

    /**
     * 숫자 리터럴에서 선행 또는 후행 소수점 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-floating-decimal}
     */
    'no-floating-decimal': 2,

    /**
     * 단축 문법 변환 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-implicit-coercion}
     */
    'no-implicit-coercion': [
        2,
        {
            /** `${expression}` 형식을 사용하여 `string` 형식 변환 확인 여부 */
            disallowTemplateShorthand: true,
        },
    ],

    /**
     * `__iterator__` 프로퍼티의 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-iterator}
     */
    'no-iterator': 2,

    /**
     * 변수와 이름을 공유하는 레이블 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-label-var}
     */
    'no-label-var': 2,

    /**
     * 불필요한 중첩 블록 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-lone-blocks}
     */
    'no-lone-blocks': 2,

    /**
     * `if`문이 `else` 블록의 유일한 문인지 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-lonely-if}
     */
    'no-lonely-if': 2,

    /**
     * 혼합된 연산자 확인
     * - 수학 연산자 : `+`, `-`, `*`, `/`, `%`, `**`
     * - 비트 연산자 : `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
     * - 비교 연산자 : `==`, `!=`, `===`, `!==`, `>`, `>=`, `<`, `<=`
     * - 논리 연산자 : `&&`, `||`, `??`
     * - 관계 연산자 : `in`, `instanceof`
     * @see {@link https://eslint.org/docs/latest/rules/no-mixed-operators}
     */
    'no-mixed-operators': [
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
     * 여러 줄 문자열 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-multi-str}
     */
    'no-multi-str': 2,

    /**
     * 부정된 조건 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-negated-condition}
     */
    'no-negated-condition': 2,

    /**
     * 결과를 변수에 할당하지 않는 `new` 연산자 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-new}
     */
    'no-new': 2,

    /**
     * `new` 연산자를 사용한 `Function` 객체 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-new-func}
     */
    'no-new-func': 2,

    /**
     * `new` 연산자를 사용한 `String`, `Number`, `Boolean` 객체 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-new-wrappers}
     */
    'no-new-wrappers': 2,

    /**
     * 인수 없이 `Object` 생성자에 대한 호출 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-object-constructor}
     */
    'no-object-constructor': 2,

    /**
     * 문자열 리터럴에서 8진수 이스케이프 문자 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-octal-escape}
     */
    'no-octal-escape': 2,

    /**
     * 증가 `++` 및 감소 `--` 연산자 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-plusplus}
     */
    'no-plusplus': 2,

    /**
     * `__proto__` 프로퍼티의 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-proto}
     */
    'no-proto': 2,

    /**
     * `return`문에서 할당 연산자 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-return-assign}
     */
    'no-return-assign': 2,

    /**
     * `javascript:` URL 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-script-url}
     */
    'no-script-url': 2,

    /**
     * 쉼표 연산자 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-sequences}
     */
    'no-sequences': [
        2,
        {
            /** 명시적인 괄호로 싸인 쉼표 연산자 허용 여부 */
            allowInParentheses: false,
        },
    ],

    /**
     * 예외를 리터럴로 던지는지 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-throw-literal}
     */
    'no-throw-literal': 2,

    /**
     * `undefined`로 초기화하는 변수 선언 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-undef-init}
     */
    'no-undef-init': 2,

    /**
     * 식별자에 매달린 밑줄 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-underscore-dangle}
     */
    'no-underscore-dangle': [
        2,
        {
            /** 배열 구조 분해에 의해 할당된 변수 이름에 매달린 밑줄 허용 여부 */
            allowInArrayDestructuring: false,

            /** 객체 구조 분해에 의해 할당된 변수 이름에 매달린 밑줄 허용 여부 */
            allowInObjectDestructuring: false,

            /** 함수 매개변수 이름에 매달린 밑줄 허용 여부 */
            allowFunctionParams: false,
        },
    ],

    /**
     * 삼항 연산자보다 더 간단한 대안이 존재하는지 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary}
     */
    'no-unneeded-ternary': [
        2,
        {
            /** `x ? x : expr` 형식을 기본 할당 시 허용 여부 */
            defaultAssignment: false,
        },
    ],

    /**
     * `.call()` 및 `.apply()`에 대한 불필요한 호출 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-call}
     */
    'no-useless-call': 2,

    /**
     * 객체 및 클래스에서 불필요한 계산된 프로퍼티 키 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-computed-key}
     */
    'no-useless-computed-key': 2,

    /**
     * 문자열 리터럴 또는 템플릿 리터럴의 불필요한 연결 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-concat}
     */
    'no-useless-concat': 2,

    /**
     * 모듈 내보내고 가져오기 및 구조 분해 할당 이름을 같은 이름으로 변경 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-rename}
     */
    'no-useless-rename': 2,

    /**
     * 불필요한 반환문 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-return}
     */
    'no-useless-return': 2,

    /**
     * `void` 연산자 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-void}
     */
    'no-void': 2,

    /**
     * 객체 리터럴에 대한 메서드 및 프로퍼티 단축 문법 확인
     * @see {@link https://eslint.org/docs/latest/rules/object-shorthand}
     */
    'object-shorthand': [
        2,
        'always',
        {
            /** 함수 프로퍼티에 대해 명시적 반환 화살표 함수보다 메서드 선호 여부 */
            avoidExplicitReturnArrows: true,
        },
    ],

    /**
     * 변수를 함께 또는 개별적으로 선언 확인
     * @see {@link https://eslint.org/docs/latest/rules/one-var}
     */
    'one-var': [
        2,
        {
            /** 연속 `var` 선언이 단일 선언 필요 */
            var: 'consecutive',

            /** 연속 `let` 선언이 단일 선언 필요 */
            let: 'consecutive',

            /** 블록당 여러 개의 `const` 선언 필요 */
            const: 'never',
        },
    ],

    /**
     * 할당 연산자 단축 문법이 가능한지 확인
     * @see {@link https://eslint.org/docs/latest/rules/operator-assignment}
     */
    'operator-assignment': 2,

    /**
     * 콜백에 화살표 함수 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback}
     */
    'prefer-arrow-callback': 2,

    /**
     * 배열 및 객체의 구조 분해 필요
     * @see {@link https://eslint.org/docs/latest/rules/prefer-destructuring}
     */
    'prefer-destructuring': [
        2,
        {
            /** 변수 선언 */
            VariableDeclarator: {
                /** 배열에 대한 구조 분해 필요 여부 */
                array: true,

                /** 객체에 대한 구조 분해 필요 여부 */
                object: true,
            },

            /** 할당 표현식 */
            AssignmentExpression: {
                /** 배열에 대한 구조 분해 필요 여부 */
                array: false,

                /** 객체에 대한 구조 분해 필요 여부 */
                object: false,
            },
        },
    ],

    /**
     * `Math.pow`의 사용을 하지 않고 `**` 연산자의 사용 선호
     * @see {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator}
     */
    'prefer-exponentiation-operator': 2,

    /**
     * `parseInt()` 및 `Number.parseInt()`의 사용을 하지 않고 2진수, 8진수, 16진수 리터럴의 사용 선호
     * @see {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals}
     */
    'prefer-numeric-literals': 2,

    /**
     * `Object.prototype.hasOwnProperty.call()`의 사용을 하지 않고 `Object.hasOwn()`의 사용 선호
     * @see {@link https://eslint.org/docs/latest/rules/prefer-object-has-own}
     */
    'prefer-object-has-own': 2,

    /**
     * 첫 번째 인수로 객체 리터럴을 사용하여 Object.assign의 사용을 하지 않고 객체 스프레드(전개)의 사용 선호
     * @see {@link https://eslint.org/docs/latest/rules/prefer-object-spread}
     */
    'prefer-object-spread': 2,

    /**
     * Promise(프라미스) 거부 이유로 에러 객체 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors}
     */
    'prefer-promise-reject-errors': 2,

    /**
     * `RegExp` 생성자의 사용을 하지 않고 정규 표현식 리터럴의 사용 선호
     * @see {@link https://eslint.org/docs/latest/rules/prefer-regex-literals}
     */
    'prefer-regex-literals': [
        2,
        {
            /** 정규 표현식 리터럴이 `RegExp` 생성자에 불필요하게 호출되는 경우 확인 여부 */
            disallowRedundantWrapping: true,
        },
    ],

    /**
     * 문자열 연결 대신 템플릿 리터럴 필요
     * @see {@link https://eslint.org/docs/latest/rules/prefer-template}
     */
    'prefer-template': 2,

    /**
     * 필요에 따른 객체 리터럴 프로퍼티 이름 주위에 따옴표 확인
     * @see {@link https://eslint.org/docs/latest/rules/quote-props}
     */
    'quote-props': [2, 'as-needed'],

    /**
     * `parseInt()`를 사용할 경우 필요에 따라 진수 인수의 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/radix}
     */
    radix: [2, 'as-needed'],

    /**
     * 주석에서 `//` 또는 `/*` 뒤에 공백 확인
     */
    'spaced-comment': [
        2,
        'always',
        {
            /** 한 줄짜리 주석 `//` */
            line: {
                /**
                 * 주석의 시작 부분 예외
                 * - TypeScript 트리플-슬래시 지시어 `///` 예외
                 */
                markers: ['/'],
            },
        },
    ],

    /**
     * 엄격 모드 지시어 확인
     * @see {@link https://eslint.org/docs/latest/rules/strict}
     */
    strict: [2, 'never'],

    /**
     * 요다 조건 확인
     * - 변수의 값이 항상 우선 (리터럴 값이 두 번째)
     * @see {@link https://eslint.org/docs/latest/rules/yoda}
     */
    yoda: 2,

    /**
     * 배열 대괄호를 열고 닫기 전에 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/array-bracket-newline}
     */
    'array-bracket-newline': [
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
     * @see {@link https://eslint.org/docs/latest/rules/array-bracket-spacing}
     */
    'array-bracket-spacing': 2,

    /**
     * 각 배열 요소 뒤에 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/array-element-newline}
     */
    'array-element-newline': [
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
     * @see {@link https://eslint.org/docs/latest/rules/arrow-parens}
     */
    'arrow-parens': 2,

    /**
     * 화살표 함수에서 화살표 앞뒤에 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/arrow-spacing}
     */
    'arrow-spacing': 2,

    /**
     * 배열 요소, 객체 프로퍼티, 변수 선언 뒤에 쉼표 확인
     * @see {@link https://eslint.org/docs/latest/rules/comma-style}
     */
    'comma-style': 2,

    /**
     * 계산된 프로퍼티 대괄호 안에 공백이 없는지 확인
     * @see {@link https://eslint.org/docs/latest/rules/computed-property-spacing}
     */
    'computed-property-spacing': 2,

    /**
     * 점 앞에 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/dot-location}
     */
    'dot-location': [2, 'property'],

    /**
     * 파일 끝에 있는 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/eol-last}
     */
    'eol-last': 2,

    /**
     * 함수 호출의 인수 사이에 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/function-call-argument-newline}
     */
    'function-call-argument-newline': [2, 'consistent'],

    /**
     * 함수 괄호 안에 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/function-paren-newline}
     */
    'function-paren-newline': [2, 'multiline-arguments'],

    /**
     * 제너레이터 함수에서 `*` 연산자와 함수 이름 사이에 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/generator-star-spacing}
     */
    'generator-star-spacing': [2, 'after'],

    /**
     * 화살표 함수 본문의 위치 확인
     * @see {@link https://eslint.org/docs/latest/rules/implicit-arrow-linebreak}
     */
    'implicit-arrow-linebreak': 2,

    /**
     * LF `\n` 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/linebreak-style}
     */
    'linebreak-style': 2,

    /**
     * 줄당 허용되는 최대 문 수 확인
     * @see {@link https://eslint.org/docs/latest/rules/max-statements-per-line}
     */
    'max-statements-per-line': 2,

    /**
     * 메서드 체인에서 각 호출 후 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/newline-per-chained-call}
     */
    'newline-per-chained-call': [
        2,
        {
            /** 허용할 체인 깊이 */
            ignoreChainWithDepth: 1,
        },
    ],

    /**
     * 여러 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-multi-spaces}
     */
    'no-multi-spaces': 2,

    /**
     * 여러 개의 빈 줄 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-multiple-empty-lines}
     */
    'no-multiple-empty-lines': [
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
     * @see {@link https://eslint.org/docs/latest/rules/no-tabs}
     */
    'no-tabs': 2,

    /**
     * 줄 끝에서 길게 늘어지는 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-trailing-spaces}
     */
    'no-trailing-spaces': 2,

    /**
     * 프로퍼티 앞에 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-whitespace-before-property}
     */
    'no-whitespace-before-property': 2,

    /**
     * 객체 리터럴 또는 구조 분해 할당의 중괄호를 열고 닫기 전에 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/object-curly-newline}
     */
    'object-curly-newline': [
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
     * @see {@link https://eslint.org/docs/latest/rules/object-property-newline}
     */
    'object-property-newline': 2,

    /**
     * 연산자 앞에 줄 바꿈 확인
     * @see {@link https://eslint.org/docs/latest/rules/operator-linebreak}
     */
    'operator-linebreak': [2, 'before'],

    /**
     * 블록문, 함수 본문, 클래스 정적 블록, 클래스, switch문의 시작과 끝에 빈 줄 확인
     * @see {@link https://eslint.org/docs/latest/rules/padded-blocks}
     */
    'padded-blocks': [2, 'never'],

    /**
     * 나머지 및 스프레드 연산자와 표현식 간의 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/rest-spread-spacing}
     */
    'rest-spread-spacing': 2,

    /**
     * 세미 콜론 뒤에 공백이 있고 세미 콜론 앞에 공백이 없는지 확인
     * @see {@link https://eslint.org/docs/latest/rules/semi-spacing}
     */
    'semi-spacing': 2,

    /**
     * 세미 콜론이 문의 끝에 있는지 확인
     * @see {@link https://eslint.org/docs/latest/rules/semi-style}
     */
    'semi-style': 2,

    /**
     * 괄호 안에 공백이 없는지 확인
     * @see {@link https://eslint.org/docs/latest/rules/space-in-parens}
     */
    'space-in-parens': 2,

    /**
     * 단항 연산자 앞이나 뒤에 공백 확인
     * - 공백이 있는지 확인 : `new`, `delete`, `typeof`, `void`, `yield`
     * - 공백이 없는지 확인 : `-`, `+`, `--`, `++`, `!`, `!!`
     * @see {@link https://eslint.org/docs/latest/rules/space-unary-ops}
     */
    'space-unary-ops': 2,

    /**
     * switch문의 콜론 뒤에 공백이 있고 콜론 앞에 공백이 없는지 확인
     * @see {@link https://eslint.org/docs/latest/rules/switch-colon-spacing}
     */
    'switch-colon-spacing': 2,

    /**
     * 템플릿 리터럴의 중괄호 쌍 안의 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/template-curly-spacing}
     */
    'template-curly-spacing': 2,

    /**
     * 템플릿 태그와 리터럴 간의 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/template-tag-spacing}
     */
    'template-tag-spacing': 2,

    /**
     * 유니코드 바이트 순서 표식 (BOM) 확인
     * @see {@link https://eslint.org/docs/latest/rules/unicode-bom}
     */
    'unicode-bom': 2,

    /**
     * 정규 표현식 리터럴에 대한 괄호 필요
     * @see {@link https://eslint.org/docs/latest/rules/wrap-regex}
     */
    'wrap-regex': 2,

    /**
     * `yield*` 표현식에서 `*`와 인수 사이의 공백 확인
     * @see {@link https://eslint.org/docs/latest/rules/yield-star-spacing}
     */
    'yield-star-spacing': 2,
};

if (process.env.NODE_ENV === 'development') {
    // 로컬 개발 환경인 경우
    Object.assign(rules, {
        /**
         * `debugger` 사용 확인
         * @see {@link https://eslint.org/docs/latest/rules/no-debugger}
         */
        'no-debugger': 0,
    });
} else {
    // 개발/운영 서버 환경인 경우
    Object.assign(rules, {
        /**
         * `alert`, `confirm`, `prompt` 사용 확인
         * @see {@link https://eslint.org/docs/latest/rules/no-alert}
         */
        'no-alert': 2,

        /**
         * `console` 사용 확인
         * @see {@link https://eslint.org/docs/latest/rules/no-console}
         */
        'no-console': 'off',
    });
}

module.exports = rules;
