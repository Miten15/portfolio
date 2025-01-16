export interface Project {
  id: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  content?: {
    overview: string;
    challenges: string[];
    solutions: string[];
    techDetails: string;
  };
}
