import type { Linter } from 'eslint';

/**
 * JavaScript ESLint 규칙
 * @see {@link https://eslint.org/docs/latest/rules}
 */
export const rules: NonNullable<Linter.Config['rules']> = {
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
     * `debugger` 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/no-debugger}
     */
    'no-debugger': 0,

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
     * `parseInt()`를 사용할 경우 필요에 따라 진수 인수의 사용 확인
     * @see {@link https://eslint.org/docs/latest/rules/radix}
     */
    radix: [2, 'as-needed'],

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
     * 유니코드 바이트 순서 표식 (BOM) 확인
     * @see {@link https://eslint.org/docs/latest/rules/unicode-bom}
     */
    'unicode-bom': 2,
};

export default {
    name: 'rules/js',
    rules,
};
