import type { Linter } from 'eslint';

/**
 * TypeScript ESLint 규칙
 * @see {@link https://typescript-eslint.io/rules}
 */
export const rules: NonNullable<Linter.Config['rules']> = {
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
     * 프로퍼티 시그니처 구문 사용 확인
     * @see {@link https://typescript-eslint.io/rules/method-signature-style}
     */
    '@typescript-eslint/method-signature-style': 2,

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
     * 잘못된 "빈 객체" 타입 사용 확인
     */
    '@typescript-eslint/no-empty-object-type': [
        2,
        {
            /** 단일 기본 인터페이스에서 `extend`가 있는 빈 인터페이스 허용 */
            allowInterfaces: 'with-single-extends',
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
     * `this`의 값이 `undefined`인 상황에서 `this`의 사용 확인
     * @see {@link https://typescript-eslint.io/rules/no-invalid-this}
     */
    '@typescript-eslint/no-invalid-this': 2,

    /**
     * 제네릭 또는 반환 타입을 제외한 `void` 타입 확인
     * @see {@link https://typescript-eslint.io/rules/no-invalid-void-type}
     */
    '@typescript-eslint/no-invalid-void-type': 2,

    /**
     * 반복문 안에 안전하지 않은 참조를 포함하는 함수 선언 확인
     * @see {@link https://typescript-eslint.io/rules/no-loop-func}
     */
    '@typescript-eslint/no-loop-func': 2,

    /**
     * nullish 병합 연산자(`??`)의 왼쪽 피연산자에서 Null 아님 단언 연산자 (접미사 `!`) 확인
     * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing}
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,

    /**
     * 변수 재선언 확인
     * @see {@link https://typescript-eslint.io/rules/no-redeclare}
     */
    '@typescript-eslint/no-redeclare': 2,

    /**
     * 생성자 프로퍼티 매개변수의 불필요한 할당 확인
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment}
     */
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 2,

    /**
     * 불필요한 클래스 생성자 확인
     * @see {@link https://typescript-eslint.io/rules/no-useless-constructor}
     */
    '@typescript-eslint/no-useless-constructor': 2,

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
     * union(유니언) 또는 선택적/나머지 매개변수를 사용하여 하나로 통합될 수 있는 두 개의 오버로드 확인
     * @see {@link https://typescript-eslint.io/rules/unified-signatures}
     */
    '@typescript-eslint/unified-signatures': 2,
};

export default {
    name: 'rules/ts',
    rules,
};