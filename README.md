# UmarAbidAPILinkedClientWebApplication

## Improvements:

1. Loading police force data
2. From the loaded data, calling police force detail api to load the relevant information
3. Removed the dependency from HTML, all the events are bound using a javascript onload event
4. Common.js has a function that is used to bind multiple on load events from different files. as window.onload from multiple locations can not be used.
5. The scope of global variable is kept within a file. Not using any variable defined in a different file, unlike before.
6. Fixed the semantic tags in HTML
7. favicon.ico added for logo
