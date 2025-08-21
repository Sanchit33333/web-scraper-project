import React, { useState } from "react";
import axios from "axios";
import { Card, Button, Spinner } from "react-bootstrap";

function Scraper() {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/scrape/");
      setHeadlines(response.data.headlines);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch headlines. Check backend server or CORS.");
    }
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2>Latest Headlines</h2>
      <Button onClick={fetchData} className="mb-3" variant="primary">
        Fetch Headlines
      </Button>
      {loading && <Spinner animation="border" />}
      {headlines.map((item, index) => (
        <Card key={index} className="mb-2">
          <Card.Body>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </Card.Body>
        </Card>
      ))}
      {headlines.length === 0 && !loading && <p>No headlines loaded yet.</p>}
    </div>
  );
}

export default Scraper;
