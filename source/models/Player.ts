export interface Player {
    name: string;
    class: string;
    title: string;
    bio: string;
    location: string;
    github: string;
    email: string;
    linkedin?: string;
    stats: {
      code: number;
      logic: number;
      creativity: number;
      persistence: number;
    };
  }