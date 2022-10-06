import { Paper } from "../typings";

export const fetchPapers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPapers`);

  const data = await res.json();
  const papers: Paper[] = data.papers;

  // console.log("fetching", projects);

  return papers;
};
