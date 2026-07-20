const modules = import.meta.glob("./pictures/*.jpg", { eager: true, import: "default" });

const pictures = {};
for (const path in modules) {
  const match = path.match(/(\d+)\.jpg$/);
  if (match) pictures[match[1]] = modules[path];
}

export default pictures;
