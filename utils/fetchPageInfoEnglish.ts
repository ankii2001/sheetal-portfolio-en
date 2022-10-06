import { PageInfo } from "../typings";

export const fetchPageInfoEnglish = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfoEnglish`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  // console.log("fetching", pageInfo);

  return pageInfo;
};
