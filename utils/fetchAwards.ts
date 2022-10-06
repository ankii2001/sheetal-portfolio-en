import { Award } from "../typings";

export const fetchAwards = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAwards`);

  const data = await res.json();
  const awards: Award[] = data.awards;

  // console.log("fetching", projects);

  return awards;
};
