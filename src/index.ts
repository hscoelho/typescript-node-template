console.log("Hello, World");

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('sum', () => {
    expect(1 + 1).toBe(2);
  })
}
