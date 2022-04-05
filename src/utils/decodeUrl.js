export default function decodeUrl(path) {

  path = decodeURIComponent(path)

  const page = path === "/" ? "home" : path.slice(1);

  const segments = page.split("/").filter((e) => e !== "/");

  return {
    page: segments[0],
    segments,
  };
}
