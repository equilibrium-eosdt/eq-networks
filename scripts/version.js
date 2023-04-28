const fs = require("fs");
const path = require("path");
const { resolutions } = require("../package.json");

const basePath = path.join(__dirname, "..", "packages");
const ns = "@equilab";

const libs = {
  network: {},
};

const pkgPath = [];
const versions = {};
const exclude = [];

const deps = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "resolutions",
];

for (const dir of fs.readdirSync(basePath)) {
  if (exclude.includes(dir)) {
    continue;
  }

  const stat = fs.statSync(path.join(basePath, dir));

  if (!stat.isDirectory()) {
    continue;
  }

  if (libs[dir]) {
    libs[dir].path = path.join(basePath, dir);
  }

  pkgPath.push(path.join(basePath, dir));
}

for (const [k, v] of Object.entries(libs)) {
  const { version } = require(path.join(v.path, "package.json"));
  versions[`${ns}/${k}`] = version;
}

for (const [k, v] of Object.entries(resolutions)) {
  versions[k] = v;
}

for (const pkg of pkgPath) {
  const pj = path.join(pkg, "package.json");
  const p = require(pj);

  const d = deps.reduce((prev, key) => {
    const dep = p[key];

    if (!dep) {
      return prev;
    }

    for (const [k, v] of Object.entries(versions)) {
      if (dep[k]) {
        dep[k] = v;
      }
    }

    return { ...prev, [key]: dep };
  }, {});

  const data = JSON.stringify({ ...p, ...d }, null, 2);
  fs.writeFileSync(pj, data, { encoding: "utf8" });
}
