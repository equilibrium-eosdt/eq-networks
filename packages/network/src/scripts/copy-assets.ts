import fs from "fs/promises";
import path from "path";

const ASSETS_PATH = path.join(process.cwd(), "assets");

const SUPPORTED_EXTENSIONS = [".svg"];
const main = async () => {
  const outDir =
    process.env.OUT_DIR || path.join(process.cwd(), "..", "..", "docs");

  for await (const namespace of await fs.readdir(ASSETS_PATH)) {
    const namespacePath = path.join(ASSETS_PATH, namespace);

    if (!(await fs.stat(namespacePath)).isDirectory()) {
      // TODO name check
      continue;
    }

    for await (const file of await fs.readdir(namespacePath)) {
      const filePath = path.join(namespacePath, file);

      if (
        !SUPPORTED_EXTENSIONS.some((ext) => {
          const [, fileExt] = file.split(".");
          return ext.toLowerCase() === `.${fileExt.toLowerCase()}`;
        })
      ) {
        continue;
      }

      if ((await fs.stat(filePath)).isDirectory()) {
        continue;
      }

      const destDir = path.join(outDir, namespace);

      try {
        await fs.access(destDir);
        console.log(`Found ${destDir}`);
      } catch {
        await fs.mkdir(destDir);
        console.log(`Created ${destDir}`);
      }

      const destPath = path.join(outDir, namespace, file);
      await fs.copyFile(filePath, destPath);
      console.log(`Copied ${filePath} to ${destPath}`);
    }
  }
};

main().catch((e) => {
  console.error(e, e.stack);
  process.exit(-1);
});
