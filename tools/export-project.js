import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const OUTPUT_DIR = path.join(ROOT, "exports");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "PROJECT_EXPORT.md");

const IGNORE = new Set([
  ".git",
  ".github",
  ".wrangler",
  "node_modules",
  "dist",
  "build",
  "coverage",
  ".next",
  ".turbo",
  ".cache",
  "exports"
]);

const TEXT_EXTENSIONS = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".json",
  ".md",
  ".txt",
  ".css",
  ".scss",
  ".html",
  ".htm",
  ".xml",
  ".yml",
  ".yaml",
  ".sql",
  ".env",
  ".gitignore",
  ".editorconfig",
  ".npmrc",
  ".ps1",
  ".sh"
]);

let folderCount = 0;
let fileCount = 0;
let lineCount = 0;

const output = [];

output.push("# PROJECT EXPORT");
output.push("");
output.push(`Generated: ${new Date().toISOString()}`);
output.push("");

function walkTree(dir, indent = "") {

    const entries = fs
        .readdirSync(dir, { withFileTypes: true })
        .sort((a, b) => a.name.localeCompare(b.name));

    for (const entry of entries) {

        if (IGNORE.has(entry.name)) continue;

        const full = path.join(dir, entry.name);

        output.push(`${indent}- ${entry.name}`);

        if (entry.isDirectory()) {

            folderCount++;

            walkTree(full, indent + "  ");

        } else {

            fileCount++;

        }
    }
}

output.push("## Folder Tree");
output.push("");

walkTree(ROOT);

output.push("");
output.push("---");
output.push("");
output.push("# SOURCE FILES");
output.push("");

function exportFiles(dir) {

    const entries = fs
        .readdirSync(dir, { withFileTypes: true })
        .sort((a, b) => a.name.localeCompare(b.name));

    for (const entry of entries) {

        if (IGNORE.has(entry.name)) continue;

        const full = path.join(dir, entry.name);

        if (entry.isDirectory()) {

            exportFiles(full);
            continue;

        }

        const ext = path.extname(entry.name);

        if (
            !TEXT_EXTENSIONS.has(ext) &&
            !entry.name.startsWith(".")
        ) {
            continue;
        }

        let content;

        try {

            content = fs.readFileSync(full, "utf8");

        } catch {

            continue;

        }

        lineCount += content.split(/\r?\n/).length;

        output.push("");
        output.push("---");
        output.push("");

        output.push(`## ${path.relative(ROOT, full)}`);

        output.push("");

        output.push("```");

        output.push(content);

        output.push("```");
    }
}

exportFiles(ROOT);

output.push("");
output.push("---");
output.push("");
output.push("# Statistics");
output.push("");

output.push(`Folders : ${folderCount}`);
output.push(`Files   : ${fileCount}`);
output.push(`Lines   : ${lineCount}`);

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

fs.writeFileSync(
    OUTPUT_FILE,
    output.join("\n"),
    "utf8"
);

console.log("");
console.log("====================================");
console.log("PROJECT EXPORT COMPLETED");
console.log("====================================");
console.log("");
console.log(`Output : ${OUTPUT_FILE}`);
console.log(`Folders: ${folderCount}`);
console.log(`Files  : ${fileCount}`);
console.log(`Lines  : ${lineCount}`);
console.log("");