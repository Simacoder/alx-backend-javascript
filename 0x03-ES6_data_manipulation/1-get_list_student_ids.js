// eslint-disable-next-line consistent-return function
export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) return [];
  return arg.map((el) => el.id);
}
