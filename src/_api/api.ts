interface Branch {
  name: string;
  commit: {
    url: string;
  };
}

// fetch repos from github
export const fetchRepos = () => {
  const repoUrl = "https://api.github.com/repos/tamimulislam360/problem-solving/branches"; // Replace with your repository URL

  return fetch(repoUrl)
    .then((response) => response.json())
    .then((data: Branch[]) => {
      const branches = data.filter((branch) => branch.name !== "main"); // exclude the main branch

      // Fetch commit and language information for each branch
      const branchPromises = branches.map((branch) =>
        fetch(branch.commit.url)
          .then((response) => response.json())
          .then((commitData) => ({
            id: Math.random().toString(36).substr(2, 9), // Generate a random ID
            title: branch.name,
            description: commitData.commit.message || "No commit message available",
            branch_url: `https://github.com/tamimulislam360/problem-solving/tree/${branch.name}`
          }))
      );

      // Wait for all branch promises to resolve
      return Promise.all(branchPromises)
        .then((branchesWithDetails) => {
          return branchesWithDetails; // The resulting data model with branches and commit descriptions
        })
        .catch((error) => {
          console.error("Error:", error);
          throw new Error("Some error occurred, could not fetch");
        });
    })
    .catch((error) => {
      console.error("Error:", error);
      throw new Error("Some error occurred, could not fetch");
    });
};
