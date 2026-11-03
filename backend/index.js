const express = require("express");

const app = express();

const jiraProjects = [
  { id: 1, key: "JIRA", name: "Demo Project" }
];

const jiraIssues = [
  { id: 1, summary: "Sample Issue", status: "Open" }
];

const confluencePages = [
  { id: 1, title: "Home Page", space: "DEMO" }
];

app.get("/api/jira/projects", (req, res) => {
  res.json(jiraProjects);
});

app.get("/api/jira/issues", (req, res) => {
  res.json(jiraIssues);
});

app.get("/api/confluence/pages", (req, res) => {
  res.json(confluencePages);
});

app.listen(3001, () => {
  console.log("Server running");
});