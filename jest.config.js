/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/leetcode/*.[jt]s?(x)"],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/out/",
        "/algorithmic-tasks/.vscode/",
    ],
};
