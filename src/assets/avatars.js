const modules = import.meta.glob("./people/*.png", { eager: true, import: "default" });

const avatars = {};
for (const path in modules) {
  const match = path.match(/(\d+)\.png$/);
  if (match) avatars[match[1]] = modules[path];
}

export default avatars;
