export interface GitHubRepo {
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    updated_at: string;
  }
  
  const GITHUB_USER = 'Eduardoescola007';
  
  export async function fetchRepos(): Promise<GitHubRepo[]> {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=20`,
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      }
    );
  
    if (!res.ok) {
      throw new Error(`Erro ao buscar repositórios: ${res.status}`);
    }
  
    return res.json();
  }