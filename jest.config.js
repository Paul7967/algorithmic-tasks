/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    watchAll: false,
    maxWorkers: 6,  // Ограничиваем количество параллельных процессов, чтобы не отъедать ресурсы у системы
    testMatch: ["**/leetcode/*.[jt]s?(x)"],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/out/",
        "/algorithmic-tasks/.vscode/",
    ],
};
