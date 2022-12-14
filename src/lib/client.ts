export type ContentsResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

const baseUrl = `https://${
  import.meta.env.VITE_SERVICE_DOMAIN
}.microcms.io/api/v1/blogs`;

const requestInit: RequestInit = {
  headers: {
    "X-MICROCMS-API-KEY": import.meta.env.VITE_API_KEY,
  },
};

export const getPostList = async (): Promise<ContentsResponse<Post>> => {
  const response = await fetch(baseUrl, requestInit);
  const data = await response.json();
  return data;
};

export const getPost = async (id: string): Promise<Post> => {
  const response = await fetch(`${baseUrl}/${id}`, requestInit);
  const data = await response.json();
  return data;
};
