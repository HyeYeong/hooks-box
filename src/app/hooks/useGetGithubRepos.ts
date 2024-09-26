import { useState, useEffect } from "react";
import client from "@/app/api/graphqlClient";

const query = `
  query findRepos($login: String!) {
    user(login: $login) {
      login
      name
      location
      avatar_url: avatarUrl
      repositories(first: 100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;

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
        const result = await client.request<RepoData>(query, { login });
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
