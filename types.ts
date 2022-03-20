export type MatterResultType = {
  date: string;
  title: string;
};

export type AllPostsDataType = {
  date: string;
  title: string;
  id: string;
};

export type LayoutType = {
  children: React.ReactNode;
  home?: boolean;
};

export type PostDataType = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};
