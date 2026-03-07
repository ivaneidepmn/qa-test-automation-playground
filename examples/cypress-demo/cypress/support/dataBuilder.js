export function buildUser(overrides = {}) {
  return {
    username: "standard_user",
    password: "secret_sauce",
    ...overrides,
  };
}