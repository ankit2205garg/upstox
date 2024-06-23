export const GET = async (api:string) => {
  try {
    const res = await fetch(api);
    const jsonRes = await res.json();
    return jsonRes;
  } catch (e) {
    return e;
  }
};
