/// <reference types="vitest/globals" />
/// <reference types="vitest/import" />

declare namespace vi {
  type Mock<T extends (...args: any) => any = (...args: any) => any> = import('vitest').MockInstance<
    Parameters<T>,
    ReturnType<T>
  >;
}
