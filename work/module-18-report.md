# Module 18 QA Report

## Application URL
http://127.0.0.1:5173/

## Pages Visited
- Main page (`/`) opened and reloaded in Chrome.
- Source inspection found no other frontend routes; the application is a single-page view.
- Also requested the backend API endpoints `/api/jira/projects`, `/api/jira/issues`, and `/api/confluence/pages` at `http://127.0.0.1:3001/`.

## Visible Elements Tested
- Main heading: “Jira-Confluence Automation Toolkit”.
- “Jira Projects” section and “Demo Project” list item.
- “Jira Issues” section and “Sample Issue” list item.
- “Confluence Pages” section and “Home Page” list item.
- Accessibility snapshot exposed the title and section labels as headings and entries as list items.

## Interactive Elements Tested
- Inspected visible buttons, links, form elements, inputs, and focusable controls; none were present.
- No interactive flow could be exercised because the page contains no interactive controls.

## Browser Console Inspection Results
- Checked Chrome DevTools console errors and warnings after loading the main page.
- No JavaScript errors or warnings were found.

## Screenshots Captured
- Captured a full-page screenshot of the main page with Chrome DevTools MCP. It was displayed in chat and was not saved as a repository file.

## Bugs Found
- Minor visual issue: the list item text is centered, but the bullet markers appear near the far left edge of the page rather than beside their text.
- No functional frontend failures or browser console errors/warnings were observed.
- Docker Compose could not be started because `docker-compose.yml` is empty and defines no services.

## Fixes Applied
- Installed the missing Express backend dependency and generated the backend lockfile so the API server could start. This is a runtime dependency setup fix, not a UI fix.
- No frontend bug fixes were applied during QA; the bullet alignment issue remains.

## Current Application Status
- Frontend is responding at http://127.0.0.1:5173/.
- Backend API is responding at http://127.0.0.1:3001/:
  - `/api/jira/projects` returns the Demo Project entry.
  - `/api/jira/issues` returns the Sample Issue entry.
  - `/api/confluence/pages` returns the Home Page entry.
- `npm run build` and `npm run lint` passed in the frontend.
- Docker Compose services are not running because the Compose file is empty.
