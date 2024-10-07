import { useState, useEffect } from "react";
import client from "@/app/api/graphqlClient";
import { repositoriesInfo } from "@/app/hooks/queries/repositoriesInfo";
interface RepoData {
  user: {
    login: string;
    name: string;
    location: string;
    avatar_url: string;
    repositories: {
      totalCount: number;
      nodes: Array<{ name: string }>;
    };
  };
}

export const useGithubRepos = (login: string) => {
  const [loginData, setLoginData] = useState<RepoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.request<RepoData>(repositoriesInfo, {
          login,
        });
        setLoginData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [login]);

  return { loginData, loading, error };
};
