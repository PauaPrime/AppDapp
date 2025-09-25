@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #3b82f6;
}

.dark {
  --primary-color: #60a5fa;
}

button {
  transition: background-color 0.3s ease;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #e5e7eb;
}

.dark th {
  background-color: #374151;
}

tr {
  border-bottom: 1px solid #e5e7eb;
}

.dark tr {
  border-bottom: 1px solid #4b5563;
}
