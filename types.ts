
export interface Movie {
  id: string;
  title: string;
  description: string;
  img: string;
  year?: number | string;
  quality?: 'HD' | 'SD';
}
