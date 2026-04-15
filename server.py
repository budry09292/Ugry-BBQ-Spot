Now update the backend with real address:
Action: file_editor str_replace /app/backend/server.py --old-str "        \"phone\": \"452 237 722\",
        \"address\": \"Kowale, Polska\"," --new-str "        \"phone\": \"452 237 722\",
        \"address\": \"plac Afrodyty 1, 80-180 Kowale\",
        \"rating\": \"4.8\",
        \"reviews_count\": 786,"
Observation: Edit was successful.
