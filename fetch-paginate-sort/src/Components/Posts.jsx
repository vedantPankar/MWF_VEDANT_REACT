import React, { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    Number(localStorage.getItem("page")) || 1
  );

  const [sortType, setSortType] = useState(
    localStorage.getItem("sort") || "id-asc"
  );

  const postsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("page", currentPage);
    localStorage.setItem("sort", sortType);
  }, [currentPage, sortType]);

  // Sorting logic
  const sortedData = [...data].sort((a, b) => {
    switch (sortType) {
      case "id-asc":
        return a.id - b.id;
      case "id-desc":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedData.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div style={{ margin: "0 auto", padding: "20px" }}>
      {/* Sorting Dropdown */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <select
          value={sortType}
          onChange={(e) => {
            setSortType(e.target.value);
            setCurrentPage(1);
          }}
          style={{ padding: "8px", fontSize: "16px" }}
        >
          <option value="id-asc">Post ID: Low → High</option>
          <option value="id-desc">Post ID: High → Low</option>
        </select>
      </div>

      {/* Posts */}
      {currentPosts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            margin: "10px 0",
            borderRadius: "8px",
          }}
        >
          <h3>
            {post.id}. {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          paddingTop: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Posts;
